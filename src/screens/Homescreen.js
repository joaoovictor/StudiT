import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native'
import { FIREBASE_AUTH } from '../../FirebaseConfig'
import { userData } from '../../utils/asyncStorageUtils'
import { styles } from '../../styles'
import { StatusBar } from 'expo-status-bar'
import Avatar from '../components/Avatar'
import { TransparentInputWithIcon } from '../components/TransparentInputWithIcon'
import { BoxTransparentWithImage } from '../components/BoxTransparentWithImage'
import { menuItems, itemsRecentActivity } from '../../utils/mocks'
import { BoxTransparentThreeTexts } from '../components/BoxTransparentThreeTexts'
import { fazerLogout, fazerLogoutFirebase } from '../../services/SignService'

export function Homescreen() {

  const [usuarioLogado, setUsuarioLogado] = useState(null);

  useEffect(() => {
    console.info(FIREBASE_AUTH.currentUser)

    const fetchUserData = async () => {
      const data = await userData();
      setUsuarioLogado(data);
    };

    fetchUserData();

  }, [])

  return (
    <ScrollView style={stylesHome.main}>
      <View key="unique-key"> 
      <View style={[styles({ flex: 1.0 }).divTopHalfRadius, { justifyContent: 'space-between'}]}>
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-evenly', marginTop: 70 }}>
          <Avatar source="https://catracalivre.com.br/wp-content/uploads/2017/05/sheldon_cooper.jpg" size={60} />
          <Text style={stylesHome.headerText}><Text style={stylesHome.headerBoldText}>Olá {usuarioLogado ? usuarioLogado.displayName : ""},</Text> bom te ver!</Text>
        </View>
        <View style={{ width: '100%', alignItems: 'center', marginBottom: 20}}>
          <TransparentInputWithIcon width={'90%'} height={60} iconName="user-x" placeholderText={"Você tem alguma pergunta?"} onPressIcon={fazerLogoutFirebase}/>
        </View>
      </View>

      <View style={stylesHome.secondView}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={stylesHome.scrollView}>
          {menuItems.map((item, index) => (
            <BoxTransparentWithImage
              key={index}
              textBox={item.text}
              source={item.img}
              boxWidth={188}
              boxHeight={250}
              imageWidth={150}
              imageHeight={150}
            />
          ))}
        </ScrollView>
      </View>

      <View style={stylesHome.viewRecentActivity}>
        <Text style={[styles("").textDefault, {marginLeft: 20, fontSize: 22}]}>Atividade Recente</Text>
     
          {itemsRecentActivity.map((item, index) => (
            <View style={stylesHome.centeredBox}>
            <BoxTransparentThreeTexts
              key={index}
              img={item.img}
              title={item.title}
              subtitle={item.subtitle}
              subtitle2={item.subtitle2}
            />
            </View>
          ))}
   
       
      </View>
      <StatusBar style="auto" />
      </View>
    </ScrollView>
    
  )
}

const stylesHome = StyleSheet.create({
  main: {
    backgroundColor: '#3A3446',
    flex: 1
  },

  secondView: {
    flex: 1,
    marginTop: 20
  },

  headerBoldText: {
    fontSize: 26,
    fontWeight: 600,
    color: '#3A3446'
  },
  headerText: {
    fontSize: 26,
    fontWeight: 500,
    color: '#3A344680',
    maxWidth: 280
  },

  scrollView: {
    paddingLeft: 10 
  },
 
  viewRecentActivity: {
    flex: 1,
    paddingTop: 20, // Ajuste o espaçamento superior conforme necessário
  }, 
  centeredBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
})
