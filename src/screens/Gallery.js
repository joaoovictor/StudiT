import { View, Text, StyleSheet, ScrollView } from 'react-native'
import {useEffect, useState} from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { deleteFamilyItem, getAllItems } from '../../services/CosmoDBService';
import { styles } from '../../styles';
import { BoxTransparentThreeTexts } from '../components/BoxTransparentThreeTexts';
import { FontAwesome, Ionicons } from '@expo/vector-icons';


export default function Gallery() {

  const [itens, setItens] = useState(null)

  
const handleDelete = async (id) => {
  console.log(id)
  try {
    await deleteFamilyItem(id);
    console.log('Item excluído com sucesso:', id);
    
    const updatedItems = await getAllItems(FIREBASE_AUTH.currentUser.uid);
    setItens(updatedItems);

  } catch (error) {
    console.error('Erro ao excluir item:', error);
  }
}

  useEffect(() => {
    const fetchAllItens = async () => {
      try {
        const items = await getAllItems(FIREBASE_AUTH.currentUser.uid);
        console.log('Itens recebidos:', items);
        setItens(items);
      } catch (error) {
        console.error("Erro ao obter itens recentes:", error);
      }
    };
    fetchAllItens();
  }, [])

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#3A3446'}}>
      <View style={stylesHome.viewRecentActivity}>
        <Text style={[styles("").textDefault, {marginLeft: 20, fontSize: 22, marginTop: 10}]}>Todos os itens</Text>
        {itens && itens.map((item, index) => (
          <View style={stylesHome.centeredBox} key={index}>
            <BoxTransparentThreeTexts
              title={item.userMessage}
              subtitle={item.userMessage}
              subtitle2={item.type}
              hasIcon={true}
              onClick={() => handleDelete(item.id)}
            />
            
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const stylesHome = StyleSheet.create({
  main: {
    backgroundColor: '#3A3446',
    flex: 1
  },

  viewRecentActivity: {
    flex: 1,
    paddingTop: 20, 
    marginBottom: 80
  }, 
  centeredBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
})
