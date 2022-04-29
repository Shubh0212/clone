import * as React from 'react';

import { View,Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './Components/Splash/SplashScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login/Login';
import DrawerNav from './Drawer/DrawerNav'

const Stack=createNativeStackNavigator()

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Splash" component={SplashScreen}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name='Drawer' component={DrawerNav}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}