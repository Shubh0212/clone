import * as React from 'react';
import {Text, View, ScrollView, SafeAreaView, Image} from 'react-native';
import styles from '../../src/assets/StyleSheet';
import CategoryItems from './CategoryItems';

export function CategoryScreen({navigation}) {
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
    <View style={styles.CategoryScreenStyle}>
      <Text style={styles.ExploreMyntraTextStyle}>Category</Text>
    </View>

    <ScrollView contentContainerStyle={{marginTop: 80,}} bounces={false} showsVerticalScrollIndicator={false}>
      <CategoryItems/>
      </ScrollView>
    </View>
  );
}
