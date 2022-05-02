import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './Components/Splash/SplashScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login/Login';
import TNav from './TabNav/TNav';

const Stack=createNativeStackNavigator()

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Splash" component={SplashScreen}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name='TNav' component={TNav}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}