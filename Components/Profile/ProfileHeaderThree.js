import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import profile from './ProfileStyle'

export default function ProfileHeaderThree() {
  return (
    <View style={profile.secondView}>
    <TouchableOpacity style={profile.profileMainView}>
      <Image
        style={profile.orderImg}
        source={require('../../src/assets/Images/note.png')}
      />
      <View style={profile.profileTxtImgView}>
        <View style={profile.swipeView}>
          <Text style={profile.OrderTxt}>Profile Details</Text>
          <Text style={profile.OrderStatusTxt}>
            Change your profile details & password
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
        source={require('../../src/assets/Images/setting.png')}
      />
      <View style={profile.profileTxtImgView}>
        <View style={profile.swipeView}>
          <Text style={profile.OrderTxt}>Settings</Text>
          <Text style={profile.OrderStatusTxt}>
            Manage notification & app settings
          </Text>
        </View>
        <Image
          source={require('../../src/assets/Images/swipe.png')}
          style={profile.swipeImg}
        />
      </View>
    </TouchableOpacity>
    </View>
  )
}