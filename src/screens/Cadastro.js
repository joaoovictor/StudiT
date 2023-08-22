import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image} from 'react-native'
import { styles } from '../../styles'
import { Input } from '../components/Input'
import { Button } from '../components/Button';
//import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import GoogleLogo from '../../assets/logo-google.png'
import MicrosoftLogo from '../../assets/microsoft-logo.png'
import FacebookLogo from '../../assets/facebook-logo.png'
import { signUpFirebase } from '../../services/SignService';
import { validateEmail, validateSenha } from '../../utils/validations';


export function Cadastro(){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confSenha, setConfSenha] = useState("")
    const [emailValido, setEmailValido] = useState(false)
    const [senhaValida, setSenhaValida] = useState(false)
    useEffect(() => {
        setEmailValido(validateEmail(email))
    }, [email])

    useEffect(() => {
        setSenhaValida(validateSenha(senha))
    }, [senha])

    return(
        <SafeAreaView style={styless.main}>
            <View style={styles("").center}>
                <Text style={styles("").textTitle}>Crie sua Conta</Text>
                <Text style={[styles("").textMediumText, {textAlign: 'center', marginTop: 15}]}>Sem custos!</Text>
            </View>

            <View style={{justifyContent: 'space-between'}}>
                <Input placeholder={"Insira seu email"} value={email} onChangeText={setEmail} keyboardType="email-address" mgBottom={20}/>
                <Input secureText={true} placeholder={"Insira sua senha"} value={senha} onChangeText={setSenha} mgBottom={20}/>
                <Input secureText={true} placeholder={"Confirme sua senha"} value={confSenha} onChangeText={setConfSenha} mgBottom={8}/>
                {/* </Input>
                    <Octicons style={{alignSelf: 'flex-end'}} name="eye-closed" size={24} color="#7DB9B6" />
                </Input> */} 
                <Text style={{fontWeight: 600, color: "#F0B86E", display: emailValido ? "none" : "flex"}}> <AntDesign name="exclamationcircleo" size={15} color="#F0B86E" /> Digite um email válido!</Text>
                <Text style={{fontWeight: 600, color: "#F0B86E", display: senhaValida ? "none" : "flex"}}> <AntDesign name="exclamationcircleo" size={15} color="#F0B86E" /> A senha deve ter no minímo 6 caracteres!</Text> 
            </View>
                <View>
                    <Button title={"Cadastrar"} width={318} onPress={() => senha === confSenha ? signUpFirebase(email, senha) : alert("As senhas não conferem!")}/>
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


