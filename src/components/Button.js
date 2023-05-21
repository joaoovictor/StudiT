import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

export function Button(props){
    const transparent = props.transparent
    return (
        <TouchableOpacity onPress={props.onPress} style={{backgroundColor: transparent ? '#E9647954' : '#E96479', width: props.width, height: 67, borderRadius: 20, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#E9647954', borderStyle: 'solid'}}>
            <Text style={{color: '#E2E2E2', fontSize: 21, fontWeight: 'bold'}}>{props.title}</Text>
        </TouchableOpacity>        
    )
}

