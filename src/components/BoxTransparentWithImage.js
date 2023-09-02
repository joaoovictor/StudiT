import {View, Text, Image} from 'react-native'
import React from 'react'

export function BoxTransparentWithImage({textBox, source, boxWidth, boxHeight, imageWidth, imageHeight}) {
  return (
    <View style={{width: boxWidth, height: boxHeight, alignItems: "center", justifyContent: 'center', borderRadius: 34, borderWidth: 1, borderColor: '#ffffff80', backgroundColor: '#FFFFFF38', marginRight: 20, gap: 20}}>
      <Image source={source} width={imageWidth} heigth={imageHeight}/>
      <Text style={{color: '#E2E2E2', fontSize: 17}}>{textBox}</Text>
    </View>
  )
}