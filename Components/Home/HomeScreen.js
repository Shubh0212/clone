import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import HomeScreenUpperView from '../HomeScreenUpperView';
import ItemSlider from '../ItemSlider';
import HomeScreenSecondadView from '../HomeScreenSecondadView';
import IntrestedItemfile from '../IntrestedItemfile';
import styles from '../../src/assets/StyleSheet';
import HomeScreenPick from './HomeScreenPick';
import { useSelector } from 'react-redux';
import store from '../../src/Reducer/store';
export function HomeScreen({navigation}) {

  const data = useSelector( store => store.loginReducer)
  // console.log(data)
    return (
      <SafeAreaView style={styles.homeScreenSafeAreaView}>
        <HomeScreenUpperView navigation={navigation}/>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false} bounces={false}>
          <HomeScreenSecondadView/>
          <ItemSlider />
          <View style={{flex:1}}>
          <IntrestedItemfile/>
          </View>
          <HomeScreenPick/>
        </ScrollView>
      </SafeAreaView>
    );
  }