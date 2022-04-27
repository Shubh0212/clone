import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import profile from './ProfileStyle';
import {useNavigation} from '@react-navigation/native';
import styles from '../../src/assets/StyleSheet';

export default function ProfileHeaderOne() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={{marginTop: 67}}>
        <Image
          source={require('../../src/assets/Images/background.png')}
          style={profile.backgroundImg}
        />
      </View>
      <View style={profile.insiderView}>
        <Image
          source={require('../../src/assets/Images/profile.png')}
          style={profile.profileImg}
        />
        <View>
          <Text style={profile.profileTxt}>Shubhankar</Text>
          <View style={profile.insiderTxt}>
            <Image
              source={require('../../src/assets/Images/crown.png')}
              style={profile.crownImg}
            />
            <Text style={profile.crownTxt}>Become an Insider!</Text>
          </View>
        </View>
      </View>
      <View style={profile.secondView}>
        <TouchableOpacity style={profile.profileMainView}>
          <Image
            style={profile.orderImg}
            source={require('../../src/assets/Images/box.png')}
          />
          <View style={profile.profileTxtImgView}>
            <View style={profile.swipeView}>
              <Text style={profile.OrderTxt}>Orders</Text>
              <Text style={profile.OrderStatusTxt}>
                Check your order status
              </Text>
            </View>
            <Image
              source={require('../../src/assets/Images/swipe.png')}
              style={profile.swipeImg}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={profile.profileMainView}>
          <Image
            style={profile.orderImg}
            source={require('../../src/assets/Images/call.png')}
          />
          <View style={profile.profileTxtImgView}>
            <View style={profile.swipeView}>
              <Text style={profile.OrderTxt}>Help Center</Text>
              <Text style={profile.OrderStatusTxt}>
                Help regarding your recent purchases
              </Text>
            </View>
            <Image
              source={require('../../src/assets/Images/swipe.png')}
              style={profile.swipeImg}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={profile.profilesecondLastMainView}>
          <Image
            style={profile.orderImg}
            source={require('../../src/assets/Images/minsider.png')}
          />
          <View style={profile.profileTxtImgView}>
            <View style={profile.swipeView}>
              <Text style={profile.OrderTxt}>Myntra Insider</Text>
              <Text style={profile.OrderStatusTxt}>
                Coupons, offers & rewards await you
              </Text>
            </View>
            <Image
              source={require('../../src/assets/Images/swipe.png')}
              style={profile.swipeImg}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={profile.profileMainView} onPress={()=>{navigation.navigate('Wish')}}>
          <Image
            style={profile.orderImg}
            source={require('../../src/assets/heart.png')}
          />
          <View style={profile.profileTxtImgView}>
            <View style={profile.swipeView}>
              <Text style={profile.OrderTxt}>Wishlist</Text>
              <Text style={profile.OrderStatusTxt}>
                Your most loved styles
              </Text>
            </View>
            <Image
              source={require('../../src/assets/Images/swipe.png')}
              style={profile.swipeImg}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={profile.profileLastMainView}>
          <Image
            style={profile.orderImg}
            source={require('../../src/assets/Images/mrefer.png')}
          />
          <View style={profile.profileTxtImgView}>
            <View style={profile.swipeView}>
              <Text style={profile.OrderTxt}>Refer & Earn</Text>
              <Text style={profile.OrderStatusTxt}>
                Invite friends and earn rewards
              </Text>
            </View>
            <Image
              source={require('../../src/assets/Images/swipe.png')}
              style={profile.swipeImg}
            />
          </View>
        </TouchableOpacity>



      </View>
    </View>
  );
}
