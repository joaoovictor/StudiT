import React, { useState, useEffect } from 'react';
import { View, Text} from 'react-native';
import { Button } from '../components/Button';
import { styles } from '../../styles';
import { createFamilyItem } from '../../services/CosmoDBService';
import { FIREBASE_AUTH } from '../../FirebaseConfig';

const SimuladoScreen = ({route}) => {
  const { simuladosData } = route.params;
  const [simulados, setSimulados] = useState([]);
  const [currentSimuladoIndex, setCurrentSimuladoIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [acertos, setAcertos] = useState(0)
  

  const updateAcertos = (amount) => {
    setAcertos((currentCount => {
      return currentCount + amount
    }))
  }

  const loadNextSimulado = () => {
    if (currentSimuladoIndex < simulados.length - 1) {
      setCurrentSimuladoIndex(currentSimuladoIndex + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      alert("Você acertou: " + acertos)
    }
  };

  const checkAnswer = () => {
    if (selectedOption === simulados[currentSimuladoIndex].correctAnswer) {
      updateAcertos(1)
    }
    setShowExplanation(true);
  };

  useEffect(() => {
    setSimulados(simuladosData.questions);
    const currentDate = new Date();
    createFamilyItem({
      user_id: FIREBASE_AUTH.currentUser.uid,
      userMessage: simuladosData.userInput,
      gptMessage: simuladosData.questions,
      type: simuladosData.type,
      date: currentDate.toISOString(),
    })
  }, []);

  return (
    <View style={{backgroundColor: '#3A3445', flex: 1, alignItems: 'center'}}>
      {simulados.length > 0 && currentSimuladoIndex < simulados.length && (
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Text style={[styles("").textMediumText, {textAlign: 'center', marginBottom: 14}]}>{simulados[currentSimuladoIndex].question}</Text>
          {simulados[currentSimuladoIndex].options.map((option, index) => (
            <Button
              key={index}
              title={option}
              onPress={() => setSelectedOption(option)}
            />
          ))}
          <View style={{flexDirection: 'row', padding: 20, justifyContent: 'center', gap: 20}}>
            <Button transparent="true" title="Verificar Resposta" onPress={checkAnswer} />
            <Button title={currentSimuladoIndex != simulados.length - 1 ? "Próxima questão" : "Finalizar Simulado"} onPress={loadNextSimulado} />
          </View>
          {showExplanation && <Text style={[styles("").textDefault, {textAlign: 'center', fontSize: 14, marginHorizontal: 20}]}>{simulados[currentSimuladoIndex].explanation}</Text>}
        </View>
      )}
    </View>
  );
};

export default SimuladoScreen;
