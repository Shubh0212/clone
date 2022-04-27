import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import profile from './ProfileStyle'

export default function ProfileHeaderFour() {
  return (
    <View >
          <TouchableOpacity style={profile.FaqStyle}>
            <Text style={profile.FaqTxtStyle}>
              FAQs
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={profile.FaqStyleTwo}>
            <Text style={profile.FaqTxtStyle}>
              ABOUT US
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={profile.FaqStyleTwo}>
            <Text style={profile.FaqTxtStyle}>
              TERMS OF USE
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={profile.FaqStyleTwo}>
            <Text style={profile.FaqTxtStyle}>
              PRIVACY POLICY
            </Text>
          </TouchableOpacity>
        </View>
  )
}