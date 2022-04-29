import { View, Text } from 'react-native'
import React from 'react'
import TNav from '../TabNav/TNav';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerList from '../src/DrawerList';

const Drawer=createDrawerNavigator();

export default function DrawerNav(){
  return(
    <Drawer.Navigator intialRouteName="Tnav" screenOptions={{
      headerShown:false,
      drawerType:'front'
    }}
    drawerContent={()=><DrawerList/>}>
      <Drawer.Screen name='Tnav' component={TNav} />
      </Drawer.Navigator>
    
  )
}