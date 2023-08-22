import React, {useEffect} from 'react'
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image} from 'react-native'
import Inicialimg from '../../assets/icon-inicial.png';
import logo from '../../assets/logoS.png';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';


export function PrimeiraTela({navigation}){
    return (
        <SafeAreaView style={stylesss.main}>

            <View style={{marginBottom: 1}}>
                <Image source={logo}/>
            </View>

            <View style={{flex: 2, width: '48%', height: '50%'}}>
                <Image style={stylesss.img} source={Inicialimg}/>
            </View>

            <View style={{flex: 1}}>
                <Text style={stylesss.texto}>Conheça uma nova ferramenta que vai impulsional seus estudos e sua produtividade</Text>
            </View>

            <View style={{ marginTop: 50, marginBottom: 14 , marginLeft: 11}}>
                <Button transparent={false} title="Começar" width={200} onPress={() => navigation.navigate('Home')}/>
            </View>
        </SafeAreaView>
    )
}

const stylesss = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#3A3446',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    texto: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 600,
        color: '#E2E2E2', 
        marginHorizontal: 42,
        marginBottom: 8,
        marginTop: 100,
        textAlign: 'center'

    },

    img: {
        resizeMode: 'contain',
        marginTop: 60,
        marginTop: 39
    },
});