import React from 'react'
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'
import { styles } from '../../styles'
import { Input } from '../components/Input'
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Button } from '../components/Button';

export function Login(){
    return (
        <SafeAreaView style={styless.main}>
            <View style={styles("").center}>
                <Text style={styles("").textTitle}>Olá Novamente!</Text>
                <Text style={[styles("").textMediumText, {textAlign: 'center', marginTop: 15}]}>Bem vindo de volta, sentimos a sua falta! </Text>
            </View>

            <View style={{justifyContent: 'space-between'}}>
                <Input placeholder={"Insira seu email"} value={""} onChangeText={() => {}} mgBottom={20}/>
                <Input placeholder={"Insira sua senha"} value={""} onChangeText={() => {}} mgBottom={8}>
                    <Octicons style={{alignSelf: 'flex-end'}} name="eye-closed" size={24} color="#7DB9B6" />  
                </Input>
                <View>
                    <Text style={{color: '#e2e2e2', fontWeight: '800', alignSelf: 'flex-end', marginEnd: 5}}>Recuperar senha</Text>
                </View>
            </View>

            <View>
                <Button title={"Descobrir"} width={318}/>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: '100%'}}>
                <View style={styles("").lineSeparator}></View>

                <Text style={styles("").textDefault}>Ou continue com</Text>

                <View style={styles("").lineSeparator}></View>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: '100%'}}>
                <TouchableOpacity style={styles("").viewGlassBgIcons}>
                <AntDesign name="google" size={28} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={styles("").viewGlassBgIcons}>
                <AntDesign name="apple1" size={28} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={styles("").viewGlassBgIcons}>
                <AntDesign name="facebook-square" size={28} color="black" />
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