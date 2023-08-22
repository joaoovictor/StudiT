import React, {useEffect} from 'react'
import { View, Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FIREBASE_AUTH } from '../../FirebaseConfig'
import AsyncStorage from '@react-native-async-storage/async-storage'



export function Homescreen() {

  const userData = async () => {
    const value = await AsyncStorage.getItem("@USER_DATA")
    console.log(JSON.parse(value))
  }

  useEffect(() => {
    console.info(FIREBASE_AUTH.currentUser)
  })

  return (
    <SafeAreaView>
      <Text>Homescreen</Text>
      <Button 
      title="Logout"
      onPress={() => {
          FIREBASE_AUTH.signOut()
      }}/>
    </SafeAreaView>
  )
}