import {View, Text, TouchableOpacity, Image,StyleSheet} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreenPick() {
    const navigation = useNavigation();
  return (
    <View style={styles.mainView}>
      <View style={styles.topPickView}>
        <Text style={styles.topPickTxt}>TOP PICKS</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TopPicks');
          }}>
          <Text
            style={styles.viewAllStyle}>
            View All
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ImgViewStyle}>
        <TouchableOpacity>
          <Image
            source={require('../../src/assets/Images/pickClothing.png')}
            style={styles.ImageStyle}
          />
          <Text
            style={styles.clothingTxt}>
            Men's Clothing
          </Text>
          <Text style={styles.clothingRate}>
            Under 299 $
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../src/assets/Images/pickClothing2.png')}
            style={styles.ImageStyle}
          />
          <Text
            style={styles.clothingTxt}>
            Jewelery
          </Text>
          <Text style={styles.clothingRate}>
            Under 399 $
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ImgViewStyle}>
        <TouchableOpacity>
          <Image
            source={require('../../src/assets/Images/pickClothing3.png')}
            style={styles.ImageStyle}
          />
          <Text
            style={styles.clothingTxt}>
            Women's Clothing
          </Text>
          <Text style={styles.clothingRate}>
            Under 199 $
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../src/assets/Images/pickClothing4.png')}
            style={styles.ImageStyle}
          />
          <Text
            style={styles.clothingTxt}>
            Shoes
          </Text>
          <Text style={styles.clothingRate}>
            Under 499 $
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {marginTop: 20, backgroundColor: 'white'},
  topPickView: {flexDirection: 'row', justifyContent: 'space-between'},
  topPickTxt: {margin: 20, color: '#2c2c3b', fontWeight: '700'},
  viewAllStyle:{
    margin: 15,
    backgroundColor: '#fe3f6d',
    padding: 10,
    color: 'white',
    borderRadius: 10,
  },
  ImgViewStyle:{flexDirection: 'row'},
  clothingTxt:{
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    margin: 5,
    left:2
  },
  ImageStyle:{height: 250, width: 195},
  clothingRate:{color: 'red', fontSize: 13, margin: 5, bottom: 6,left:2},




});
