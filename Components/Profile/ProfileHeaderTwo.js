import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import profile from './ProfileStyle'

export default function ProfileHeaderTwo() {
  return (
    <View style={profile.secondView}>
    <TouchableOpacity style={profile.profileMainView}>
      <Image
        style={profile.orderImg}
        source={require('../../src/assets/Images/credit.png')}
      />
      <View style={profile.profileTxtImgView}>
        <View style={profile.swipeView}>
          <Text style={profile.OrderTxt}>Myntra Credit</Text>
          <Text style={profile.OrderStatusTxt}>
            Manage all your refunds & gift cards
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
        source={require('../../src/assets/Images/prize.png')}
      />
      <View style={profile.profileTxtImgView}>
        <View style={profile.swipeView}>
          <Text style={profile.OrderTxt}>MynCash</Text>
          <Text style={profile.OrderStatusTxt}>
            Earn MynCash as you shop and use them in checkout
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
        source={require('../../src/assets/Images/card.png')}
      />
      <View style={profile.profileTxtImgView}>
        <View style={profile.swipeView}>
          <Text style={profile.OrderTxt}>Saved Cards</Text>
          <Text style={profile.OrderStatusTxt}>
            Save your cards for faster checkout
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
        source={require('../../src/assets/Images/address.png')}
      />
      <View style={profile.profileTxtImgView}>
        <View style={profile.swipeView}>
          <Text style={profile.OrderTxt}>Address</Text>
          <Text style={profile.OrderStatusTxt}>
            Save addresses for a hassle-free checkout
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
        source={require('../../src/assets/Images/coupon.png')}
      />
      <View style={profile.profileTxtImgView}>
        <View style={profile.swipeView}>
          <Text style={profile.OrderTxt}>Coupons</Text>
          <Text style={profile.OrderStatusTxt}>
            Manage coupons for additional discounts
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