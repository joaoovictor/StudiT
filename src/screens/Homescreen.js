import { View, Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FIREBASE_AUTH } from '../../FirebaseConfig'

export function Homescreen() {
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