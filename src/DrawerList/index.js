import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Pressable
} from 'react-native';
import React from 'react';
import {Link} from '@react-navigation/native';


export default function DrawerList({navigation}) {
  return (
    <SafeAreaView style={styles.drawerMain}>
      <View style={styles.drawerImgView}>
        <Image
          source={require('../../src/assets/Images/background.png')}
          style={styles.drawerImg}
        />
        <Image
          source={require('../../src/assets/Images/profile.png')}
          style={styles.profileImg}
        />
        <Text style={styles.nameTxt}>Shubhankar</Text>
        <Link to={{screen:'Profile'}} style={{bottom:120,alignSelf:'flex-end',right:30,height:12,width:20,right:30}}>
        <Image
          source={require('../../src/assets/Images/next.png')}
          style={styles.nextImg}
        />
        </Link>
      </View>

      <View style={styles.categoryView}>
        <Image
          source={require('../../src/assets/Images/categories.png')}
          style={styles.categoryImg}
        />
        <Link to={{screen: 'Category'}} style={styles.categoryStyle}>
          Shop by Categories
        </Link>
      </View>
      <TouchableOpacity style={styles.drawerOrder}>
          
         <Image
          source={require('../../src/assets/Images/box.png')}
          style={styles.orderImg}
        /> 
        <Text style={styles.orderTxt}>Orders</Text>
      </TouchableOpacity>
      <View style={styles.drawerFAQ}>
        <Text style={styles.lastView}>FAQs</Text>
        <Text style={styles.lastView}>CONTACT US</Text>
        <Text style={styles.lastView}>LEGAL</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  drawerMain: {
    flex: 1,
    bottom:6
  },
  drawerImgView: {flex: 0.2, borderWidth: 1},
  drawerImg: {height: '100%', width: '100%'},

  categoryStyle: {
    color: '#281d29',
    left: 15,
  },
  drawerOrder: {
    flex: 0.09,
    borderBottomWidth: 0.4,
    borderBottomColor: 'grey',
    alignItems: 'center',
    flexDirection: 'row',
  },
  drawerFAQ: {
    flex: 0.2,
  },
  profileImg: {
    height: 75,
    width: 70,
    bottom: 120,
    left: 18,
    borderRadius: 6,
    borderWidth:1.5,
    borderColor:'white'
  },
  categoryImg: {height: 20, width: 20, marginLeft: 20},
  orderImg: {height: 20, width: 20, marginLeft: 20},
  orderTxt: {marginLeft: 15, color: 'grey'},
  lastView: {marginLeft: 57, color: 'grey', marginTop: 25, fontSize: 13},
  nameTxt: {
    color: 'white',
    bottom: 110,
    left: 18,
    fontWeight: '700',
    fontSize: 14,
    letterSpacing:-0.5
  },
  nextImg:{
    height:15,
    width:15,
    resizeMode:'cover'
    
  },
  categoryView: {
    flex: 0.08,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.4,
    borderBottomColor: 'grey',
  },
});
