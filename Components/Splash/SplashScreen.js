import { StyleSheet, Text, View,Image ,SafeAreaView} from 'react-native'
import React from 'react'

const SplashScreen = ({navigation}) => {
    setTimeout(() => {
         navigation.replace('Login')
    }, 1000);
  return (
    <SafeAreaView style={Splash.main}>
      <Image source={require('../../src/assets/Images/myntra.png')} style={Splash.Img}/>
    </SafeAreaView>
  )
}

export default SplashScreen

const Splash = StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    },
    Img:{
        height:'30%',
        width:'30%',
        resizeMode:'contain'
    },

})