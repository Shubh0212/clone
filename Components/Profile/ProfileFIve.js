import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import profile from './ProfileStyle'
import { useNavigation } from '@react-navigation/native'

export default function ProfileFIve() {
    const navigation = useNavigation();
    const logout=()=>{

        navigation.navigate('Login');
    }
  return (
      <>
    <TouchableOpacity style={{padding:10,borderWidth:1,margin:25,justifyContent:'center',alignItems:'center',borderColor:'red'}}
    onPress={logout}
    >

          <Text style={{color:'red'}}>LOG OUT</Text>

        </TouchableOpacity>

        <View style={{padding:30,margin:25,justifyContent:'center',alignItems:'center'}}>

          <Text style={{color:'grey',fontSize:12,bottom:30}}>APP VERSION 4.2202.2</Text>

        </View>
        </>
  )
}