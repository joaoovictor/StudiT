import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import ImgGirl from './assets/girlwithbooks.png'
import { styles } from './styles.js';
import { Button } from './src/components/Button.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './src/screens/Login';

function ScreenUnlogged({ navigation }){
  return (
    <View style={styless.container}>
      <View style={[styles({flex: 1}).divTopHalfRadius, styles("").center]}>
        <Image source={ImgGirl}/>
      </View>
      <View style={styless.divBottom}>
        <Text style={styles({flex: ""}).textTitle}>Tome o controle</Text>
        <Text style={[styles({flex: ""}).textDefault, {textAlign: 'center', width: 280}]}>Tenha em seu dispositivo móvel suas principais ferramentas de estudo.</Text>
        <View style={styless.divButtons}>
          <Button transparent={false} title="Login" width={174} onPress={() => navigation.navigate('LoginPage')}/>
          <Button transparent={true} title="Cadastrar" width={174}/>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Home" component={ScreenUnlogged}  />
        <Stack.Screen name="LoginPage" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styless = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: '#3A3446'
  },
divBottom: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'space-around'
},
divButtons: {
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-evenly'
}
})