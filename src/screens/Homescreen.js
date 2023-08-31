import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native'
import { FIREBASE_AUTH } from '../../FirebaseConfig'
import { userData } from '../../utils/asyncStorageUtils'
import { styles } from '../../styles'
import { StatusBar } from 'expo-status-bar'
import Avatar from '../components/Avatar'
import { TransparentInputWithIcon } from '../components/TransparentInputWithIcon'
import { BoxTransparentWithImage } from '../components/BoxTransparentWithImage'
import { menuItems } from '../../utils/mocks'

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
    <View style={stylesHome.main}>
      <View style={[styles({ flex: 1.4 }).divTopHalfRadius, { justifyContent: 'space-between'}]}>
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-evenly', marginTop: 70 }}>
          <Avatar source="https://catracalivre.com.br/wp-content/uploads/2017/05/sheldon_cooper.jpg" size={60} />
          <Text style={stylesHome.headerText}><Text style={stylesHome.headerBoldText}>Olá {usuarioLogado ? usuarioLogado.displayName : ""},</Text> bom te ver!</Text>
        </View>
        <View style={{ width: '100%', alignItems: 'center', marginBottom: 20}}>
          <TransparentInputWithIcon width={'90%'} height={60} iconName="mic" placeholderText={"Você tem alguma pergunta?"} />
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

      <View>

      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const stylesHome = StyleSheet.create({
  main: {
    backgroundColor: '#3A3446',
    flex: 1
  },

  secondView: {
    flex: 3,
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
    marginLeft: 10
  }
})