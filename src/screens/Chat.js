import React, { useState, useEffect, useCallback } from 'react';
import { View } from 'react-native';
import { Bubble, GiftedChat, InputToolbar } from 'react-native-gifted-chat';
import { getGptResponse } from '../../utils/openAiRequests';
import CosmoDbClient, { createFamilyItem } from '../../services/CosmoDBService.js'
import { FIREBASE_AUTH } from '../../FirebaseConfig';

const Chat = ({navigation}) => {
  const [messages, setMessages] = useState([]);
  const [messageIdCounter, setMessageIdCounter] = useState(2);
  
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Olá! Como posso ajudar?',
        createdAt: new Date(),
        user: {
          _id: 2, 
          name: 'StuditBot', 
        },
      },
    ]);
  }, []);

  const handleUserMessage = useCallback(async (userInput) => {
   
    setMessages((previousMessages) => [
      {
        _id: messageIdCounter,
        text: userInput,
        createdAt: new Date(),
        user: {
          _id: 1, 
        },
      },
      ...previousMessages,
    ]);

    const gptResponse = await handleGpt(userInput);

    if(gptResponse.type == "resumo"){
      setMessages((previousMessages) => [
        {
          _id: messageIdCounter + 1,
          text: gptResponse.content,
          createdAt: new Date(),
          user: {
            _id: 2, 
            name: 'StuditBot', 
          },
        },
        ...previousMessages,
      ]);
  
      
      setMessageIdCounter(messageIdCounter + 2);
      const currentDate = new Date();
      const obj = {
        user_id: FIREBASE_AUTH.currentUser.uid,
        userMessage: userInput,
        gptMessage: gptResponse.content,
        subject: gptResponse.subject,
        title: gptResponse.title,
        type: gptResponse.type,
        date: currentDate.toISOString(),
      }
  
      console.debug(obj)
  
      createFamilyItem(obj)
    } else {
      const simulados = {...gptResponse, userInput: userInput}
      navigation.navigate("SimuladoScreen", {simuladosData: simulados})
    }

    
  }, [messageIdCounter]);

  async function handleGpt(userInput) {
    const data = await getGptResponse(userInput);
    return data;
  }

  

  return (
    <View style={{ flex: 1, backgroundColor: '#3A3446' }}>
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => handleUserMessage(newMessages[0].text)}
        renderInputToolbar={(props) => <InputToolbar {...props} containerStyle={{ backgroundColor: "#7C7C7C4D" }} />}
        renderBubble={(props) => (
          <Bubble
            {...props}
            textStyle={{
              left: { color: '#E2E2E2' },
            }}
            wrapperStyle={{
              left: { backgroundColor: "#FFFFFF38" },
              right: { backgroundColor: "#FFFFFF38" },
            }}
          />
        )}
        user={{
          _id: 1, 
        }}
      />
    </View>
  );
};

export default Chat;
