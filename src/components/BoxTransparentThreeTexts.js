import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Img from '../../assets/BiologiaIcon.png'
import { FontAwesome, Ionicons } from '@expo/vector-icons';



export function BoxTransparentThreeTexts({ title, subtitle, subtitle2, hasIcon, onClick }) {
  return (
    <View>
      <View style={styles.main}>
        <Image source={Img} style={{ marginLeft: 12 }} />
        <View style={styles.textContainer}>
          <Text style={{ color: '#e2e2e2', fontSize: 17, fontWeight: '500' }}>{title}</Text>
          <Text style={{ color: '#e2e2e2', fontSize: 14, fontWeight: '300' }}>{subtitle}</Text>
          <Text style={{ color: '#e2e2e2', fontSize: 14, fontWeight: '300' }}>{subtitle2}</Text>
        </View>
        {hasIcon === true ?
          <FontAwesome style={{ alignSelf: 'center' }} name='trash-o' size={20} onPress={onClick}/>
          : null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    borderRadius: 23,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#D9D9D938',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Distribui os elementos ao longo do contêiner
    width: '95%',
    height: 73,
    paddingHorizontal: 10, // Adiciona espaço interno para os elementos
  },
  textContainer: {
    flex: 1, // Ocupa o restante do espaço disponível
  },
});
