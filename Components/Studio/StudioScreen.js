import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../src/assets/StyleSheet'

export default function StudioScreen() {
  return (
    <View style={{flex: 1, backgroundColor: '#dddddd'}}>
      <View style={styles.ExploreScreenStyle}>
        <Text style={styles.ExploreMyntraTextStyle}>Studio</Text>
      </View>
    </View>
  )
}