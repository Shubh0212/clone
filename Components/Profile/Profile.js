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
import ProfileFIve from './ProfileFIve';

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
        <ProfileFIve/>
      </ScrollView>
    </View>
  );
}


