import React, {useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './src/screens/Login';
import { Cadastro } from './src/screens/Cadastro';
import { PrimeiraTela } from './src/screens/PrimeiraTela';
import { Homescreen } from './src/screens/Homescreen';
import { ScreenUnlogged } from './src/screens/ScreenUnlogged';
import { onAuthStateChanged } from 'firebase/auth';                                                                                                                                                            
import { FIREBASE_AUTH } from './FirebaseConfig';
const Stack = createStackNavigator();
const InsideStack = createStackNavigator();
const OutStack = createStackNavigator();

function OutLayout() {
  return (
      <OutStack.Navigator initialRouteName="PrimeiraTela" screenOptions={{
        headerShown: false
      }}>
         <OutStack.Screen name="Home" component={ScreenUnlogged}  />
        <OutStack.Screen name="LoginPage" component={Login} />
        <OutStack.Screen name="Cadastro" component={Cadastro} />
        <OutStack.Screen name="PrimeiraTela" component={PrimeiraTela} />
      </OutStack.Navigator>
  )
}

function InsideLayout() {
  return (
    <InsideStack.Navigator initialRouteName="HomeScreen" screenOptions={{
      headerShown: false
    }}>
      <InsideStack.Screen name="HomeScreen" component={Homescreen}/>
    </InsideStack.Navigator>
  )
}

export default function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user)
    })
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
    headerShown: false
  }}> 
       {user ? (<Stack.Screen name="Inside" component={InsideLayout}/>) : (<Stack.Screen name="Out" component={OutLayout}/>)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

