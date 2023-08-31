import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import QuimicaImg from '../../assets/QuimicaIcon.png'
export function BoxTransparentThreeTexts({title, subtitle, subtitle2, imageWidth, imageHeight}) {
  return (
    <View style={styles.main}>
        <Image source={QuimicaImg} style={{marginLeft: 12}}/>
        <View>
            <Text style={{color: '#e2e2e2', fontSize: 17, fontWeight: 500}}>{title}</Text>
            <Text style={{color: '#e2e2e2', fontSize: 14, fontWeight: 300}}>{subtitle}</Text>
            <Text style={{color: '#e2e2e2', fontSize: 14, fontWeight: 300}}>{subtitle2}</Text> 
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
    width: '95%',
    height: 73,
    gap: 10
  }
})