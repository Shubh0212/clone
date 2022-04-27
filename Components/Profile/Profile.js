import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from '../../src/assets/StyleSheet';
import ProfileHeaderOne from './ProfileHeaderOne';
import profile from './ProfileStyle';
import ProfileHeaderTwo from './ProfileHeaderTwo';
import ProfileHeaderThree from './ProfileHeaderThree';
import ProfileHeaderFour from './ProfileHeaderFour';

export function ProfileScreen({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      <View style={styles.ExploreScreenStyle}>
        <Text style={styles.ExploreMyntraTextStyle}>Profile</Text>
      </View>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <ProfileHeaderOne/>
        <ProfileHeaderTwo/>
        <ProfileHeaderThree/>
        <ProfileHeaderFour/>
        <TouchableOpacity style={{padding:10,borderWidth:1,margin:25,justifyContent:'center',alignItems:'center',borderColor:'red'}}>

          <Text style={{color:'red'}}>LOG OUT</Text>

        </TouchableOpacity>

        <View style={{padding:30,margin:25,justifyContent:'center',alignItems:'center'}}>

          <Text style={{color:'grey',fontSize:12,bottom:30}}>APP VERSION 4.2202.2</Text>

        </View>
      </ScrollView>
    </View>
  );
}


