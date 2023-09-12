import { View, StyleSheet, TextInput} from 'react-native'
import { Feather } from '@expo/vector-icons';
import React from 'react'

export function TransparentInputWithIcon({placeholderText, width, height, iconName, value, onTextChange, onPressIcon}) {
  return (
    <View style={style.input} width={width} height={height}>
      <TextInput placeholder={placeholderText} placeholderTextColor="#e2e2e239" onTextChange={onTextChange} value={value} /> 
      <Feather name={iconName} size={18} color="#545454" onPress={onPressIcon}/>
    </View>
  )
}

const style = StyleSheet.create({
  input: {
    backgroundColor: '#7878787A',
    borderWidth: 1,
    borderColor: '#45454554',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  textInputStyle: {
    fontSize: 16
  }
})