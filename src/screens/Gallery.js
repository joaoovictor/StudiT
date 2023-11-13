import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { deleteFamilyItem, getAllItems, upsertFamilyItem } from '../../services/CosmoDBService';
import { styles } from '../../styles';
import { BoxTransparentThreeTexts } from '../components/BoxTransparentThreeTexts';
import { FontAwesome } from '@expo/vector-icons';

export default function Gallery() {
  const [items, setItems] = useState(null);
  const [editingItemId, setEditingItemId] = useState(null);
  const [newUserMessage, setNewUserMessage] = useState('');
  const [newType, setNewType] = useState('');

  const handleEdit = (id) => {
    setEditingItemId(id);
    setNewUserMessage('');
    setNewType('');
  };

  const handleSave = async (id, newUserMessage, gptMessage, type) => {
    console.log(newUserMessage, gptMessage, type)
    try {
      const updatedItem = {
        id: id,
        userMessage: newUserMessage,
        gptMessage: gptMessage,
        user_id: FIREBASE_AUTH.currentUser.uid,
        type: type
      };

      await upsertFamilyItem(updatedItem, id);
      console.log('Alterações salvas com sucesso:', id, newUserMessage, newType);
      setEditingItemId(null);
    } catch (error) {
      console.error('Erro ao salvar alterações:', error);
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    try {
      if (editingItemId === id) {
        handleSave(id, newUserMessage);
      } else {
        await deleteFamilyItem(id);
        console.log('Item excluído com sucesso:', id);

        const updatedItems = await getAllItems(FIREBASE_AUTH.currentUser.uid);
        setItems(updatedItems);
      }
    } catch (error) {
      console.error('Erro ao excluir item:', error);
    }
  };

  useEffect(() => {
    const fetchAllItems = async () => {
      try {
        const fetchedItems = await getAllItems(FIREBASE_AUTH.currentUser.uid);
        console.log('Itens recebidos:', fetchedItems);
        setItems(fetchedItems);
      } catch (error) {
        console.error('Erro ao obter itens recentes:', error);
      }
    };
    fetchAllItems();
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#3A3446' }}>
      <View style={stylesHome.viewRecentActivity}>
        <Text style={[styles('').textDefault, { marginLeft: 20, fontSize: 22, marginTop: 10 }]}>
          Todos os itens
        </Text>
        {items &&
          items.map((item, index) => (
            <View style={stylesHome.centeredBox} key={index}>
              <BoxTransparentThreeTexts
                  title={item.userMessage}
                  subtitle={item.userMessage}
                  subtitle2={editingItemId === item.id ? (
                    <TextInput
                      value={newUserMessage}
                      onChangeText={(text) => setNewUserMessage(text)}  
                      placeholder="Novo Tipo"
                      style={{ color: '#e2e2e2', fontSize: 14, fontWeight: '300' }}
                    />
                  ) : item.type}
                  hasIcon={true}
                  onClick={() => handleDelete(item.id)}
                  onEdit={() => handleEdit(item.id)}
                  onSave={() => handleSave(item.id, newUserMessage, item.gptMessage, item.type)}
                  onCancelEdit={() => setEditingItemId(null)}
                />
              {editingItemId === item.id && (
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                  <FontAwesome
                    style={{ alignSelf: 'center', margin: 5 }}
                    name="check"
                    size={20}
                    onPress={() => handleSave(item.id, newUserMessage, item.gptMessage, item.type)}
                  />
                  <FontAwesome
                    style={{ alignSelf: 'center', margin: 5 }}
                    name="times"
                    size={20}
                    onPress={() => setEditingItemId(null)}
                  />
                </View>
              )}
            </View>
          ))}
      </View>
    </ScrollView>
  );
}

const stylesHome = StyleSheet.create({
  main: {
    backgroundColor: '#3A3446',
    flex: 1,
  },

  viewRecentActivity: {
    flex: 1,
    paddingTop: 20,
    marginBottom: 80,
  },
  centeredBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
});
