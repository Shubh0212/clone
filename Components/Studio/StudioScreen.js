import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import StudioFirstView from './StudioFirstView';
import StudioSecondView from './StudioSecondView';

export default function StudioScreen() {
  return (
    <View style={styles.StudioMainView}>
      <View style={styles.ExploreScreenStyle}>
        <Text style={styles.ExploreMyntraTextStyle}>Studio</Text>
      </View>
      <ScrollView>
        <StudioFirstView />
        <StudioSecondView/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  StudioMainView: {flex: 1, backgroundColor: '#dddddd'},
  ExploreScreenStyle: {
    flex: 0.12,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  ExploreMyntraTextStyle: {
    bottom: 10,
    flex: 1,
    marginTop: 50,
    marginLeft: 20,
    color: '#717079',
  },
});
