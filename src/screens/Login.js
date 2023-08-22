import React, {useState} from 'react'
import GoogleLogo from '../../assets/logo-google.png'
import MicrosoftLogo from '../../assets/microsoft-logo.png'
import FacebookLogo from '../../assets/facebook-logo.png'
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image} from 'react-native'
import { styles } from '../../styles'
import { Input } from '../components/Input'
import { Octicons } from '@expo/vector-icons';
import { Button } from '../components/Button';
import { signInFirebase } from '../../services/SignService'

export function Login(){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    return (
        <SafeAreaView style={styless.main}>
            <View style={styles("").center}>
                <Text style={styles("").textTitle}>Olá Novamente!</Text>
                <Text style={[styles("").textMediumText, {textAlign: 'center', marginTop: 15}]}>Bem vindo de volta, sentimos a sua falta! </Text>
            </View>

            <View style={{justifyContent: 'space-between'}}>
                <Input placeholder={"Insira seu email"} value={email} onChangeText={setEmail} mgBottom={20}/>
                <Input secureText={true} placeholder={"Insira sua senha"} value={senha} onChangeText={setSenha} mgBottom={8}>
                    <Octicons style={{alignSelf: 'flex-end'}} name="eye-closed" size={24} color="#7DB9B6" />  
                </Input>
                <View>
                    <Text style={{color: '#e2e2e2', fontWeight: '800', alignSelf: 'flex-end', marginEnd: 5}}>Recuperar senha</Text>
                </View>
            </View>

            <View>
                <Button title={"Entrar"} width={318} onPress={() => signInFirebase(email, senha)}/>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: '100%'}}>
                <View style={styles("").lineSeparator}></View>

                <Text style={{fontWeight: 800, color: '#e2e2e2', fontSize: 16}}>Ou continue com</Text>

                <View style={styles("").lineSeparator}></View>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: '100%'}}>
                <TouchableOpacity style={styles("").viewGlassBgIcons}>
                <Image 
                source={GoogleLogo}
                style={{width: 40, height: 40}} />
                </TouchableOpacity>

                <TouchableOpacity style={styles("").viewGlassBgIcons}>
                <Image 
                source={MicrosoftLogo}
                style={{width: 35, height: 35}} />
                </TouchableOpacity>

                <TouchableOpacity style={styles("").viewGlassBgIcons}>
                <Image 
                source={FacebookLogo}
                style={{width: 40, height: 40}} />
                </TouchableOpacity>
            </View > 
        </SafeAreaView>
    )
}

const styless = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#3A3446',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})