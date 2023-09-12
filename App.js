import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { onAuthStateChanged } from 'firebase/auth';
import { FontAwesome, Ionicons } from '@expo/vector-icons'; 
import { FIREBASE_AUTH } from './FirebaseConfig';
import { ScreenUnlogged } from './src/screens/ScreenUnlogged';
import { Login } from './src/screens/Login';
import { Cadastro } from './src/screens/Cadastro';
import { PrimeiraTela } from './src/screens/PrimeiraTela';
import { Homescreen } from './src/screens/Homescreen';
import Chat from './src/screens/Chat';
import "react-native-url-polyfill/auto"

const Stack = createStackNavigator();
const InsideStack = createBottomTabNavigator();
const OutStack = createStackNavigator();


const optionsScreens = {
  homescreen: {
    tabBarLabel: "",
    tabBarIcon: () => (
      <FontAwesome name="home" size={28}  />
    )
  },
  config: {
      tabBarLabel: "",
      tabBarIcon: () => (
        <FontAwesome name="gear" size={28} />
      )
  },
  user: {
    tabBarLabel: "",
    tabBarIcon: () => (
      <FontAwesome name="user-o" size={28}  />
    )
  },
  chat: {
    tabBarLabel: "",
    tabBarIcon: () => (
      <Ionicons name="chatbubbles-outline" size={28}  />
    )
  }
}

const tabBarStyle = {
  position: 'absolute',
  height: 80,
  borderTopWidth: 0,
  backgroundColor: "#FFFFFF26",
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  elevation: 0
};

const tabBarOptions = {
  activeTintColor: '#7DB9B6',
  inactiveTintColor: '#000000',
  labelStyle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
};



function OutLayout() {
  return (
    <OutStack.Navigator  initialRouteName="PrimeiraTela" screenOptions={{ headerShown: false }}>
      <OutStack.Screen name="Home" component={ScreenUnlogged}/>
      <OutStack.Screen name="LoginPage" component={Login} />
      <OutStack.Screen name="Cadastro" component={Cadastro} />
      <OutStack.Screen name="PrimeiraTela" component={PrimeiraTela} />
    </OutStack.Navigator>
  );
}

function InsideLayout() {
  return (
    <InsideStack.Navigator initialRouteName="HomeScreen" screenOptions={{
      headerShown: false,
      tabBarStyle: tabBarStyle,
      ...tabBarOptions,
    }}>
      <InsideStack.Screen name="HomeScreen" component={Homescreen} options={optionsScreens.homescreen}/>
      <InsideStack.Screen name="ConfigPage" component={""} options={optionsScreens.config}/>
      <InsideStack.Screen name="UserPage" component={""} options={optionsScreens.user}/>
      <InsideStack.Screen name="Chat" component={Chat} options={{ ...optionsScreens.chat, tabBarStyle: { height: 0 } }}/>
    </InsideStack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (<Stack.Screen name="Inside" component={InsideLayout} />) : (<Stack.Screen name="Out" component={OutLayout} />)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
