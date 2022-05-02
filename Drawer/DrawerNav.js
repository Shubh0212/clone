import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerList from '../src/DrawerList';
import { HomeScreen } from '../Components/Home/HomeScreen';

const Drawer=createDrawerNavigator();

export default function DrawerNav(){
  return(
    <Drawer.Navigator intialRouteName="Tnav" screenOptions={{
      headerShown:false,
      drawerType:'front'
    }}
    drawerContent={()=><DrawerList/>}>
      <Drawer.Screen name='Home' component={HomeScreen} />
      </Drawer.Navigator>
    
  )
}