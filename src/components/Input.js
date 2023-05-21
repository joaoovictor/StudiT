import React from 'react'
import {TextInput, View} from 'react-native'

export function Input(props){
    return (
        <TextInput placeholderTextColor={"#FFFFFF5C"} value={props.value} placeholder={props.placeholder} onChangeText={props.onChangeText} style={{height: 60, backgroundColor: '#FFFFFF42', borderWidth: 1, borderStyle: 'solid', borderColor: '#FFFFFF', borderRadius: 12, width: 318, marginBottom: props.mgBottom, padding: 20, fontSize: 18 }}/>
    )
}
