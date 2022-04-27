import * as React from 'react';

import { View,Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TNav from './TabNav/TNav';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerList from './src/DrawerList';
import SplashScreen from './Components/Splash/SplashScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Drawer=createDrawerNavigator();

const DrawerNav=()=>{
  return(
    <Drawer.Navigator intialRouteName="Home" screenOptions={{
      headerShown:false,
      drawerType:'front'
    }}
    drawerContent={()=><DrawerList/>}>
      <Drawer.Screen name='Home' component={TNav} />
      </Drawer.Navigator>
    
  )
}
const Stack=createNativeStackNavigator()

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Splash" component={SplashScreen}/>
        <Stack.Screen name='Drawer' component={DrawerNav}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}