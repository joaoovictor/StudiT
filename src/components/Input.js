import React from 'react'
import {TextInput} from 'react-native'

export function Input(props){
    return (
        <TextInput 
        onChange={props.onChange} 
        keyboardAppearance="dark" 
        secureTextEntry={props.secureText}  
        placeholderTextColor={"#FFFFFF5C"} 
        value={props.value} 
        keyboardType={props.keyboardType}
        placeholder={props.placeholder} 
        onChangeText={props.onChangeText} 
        style={{height: 60, backgroundColor: '#FFFFFF42', borderWidth: 1, borderStyle: 'solid', borderColor: '#FFFFFF50', borderRadius: 12, width: 318, marginBottom: props.mgBottom, padding: 20, fontSize: 18, color: '#E2E2E2'}}/>
    )
}
