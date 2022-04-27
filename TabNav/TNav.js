import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackScreen} from '../Stack/StackScreen';
import {CategoryStackScreen} from '../Stack/StackScreen';
import {ExploreStackScreen} from '../Stack/StackScreen';
import {ProfileStackScreen} from '../Stack/StackScreen';
import {StudioStackScreen} from '../Stack/StackScreen';

const Tab = createBottomTabNavigator();
export default function TNav() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarHideOnKeyboard: true}}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarColor: 'red',
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  style={{height: 20, width: 20}}
                  source={
                    focused
                      ? require('../src/assets/Images/mR.png')
                      : require('../src/assets/Images/m.png')
                  }
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Categories"
        component={CategoryStackScreen}
        options={{
          tabBarColor: 'black',
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  style={{height: 20, width: 20}}
                  source={
                    focused
                      ? require('../src/assets/Images/categoryR.png')
                      : require('../src/assets/Images/category.png')
                  }
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Studio"
        component={StudioStackScreen}
        options={{
          tabBarColor: 'black',
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  style={{height: 20, width: 20}}
                  source={
                    focused
                      ? require('../src/assets/Images/tvR.png')
                      : require('../src/assets/Images/tv.png')
                  }
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Explore"
        component={ExploreStackScreen}
        options={{
          tabBarColor: 'black',
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  style={{height: 22, width: 22}}
                  source={
                    focused
                      ? require('../src/assets/Images/exploreR.png')
                      : require('../src/assets/Images/explore.png')
                  }
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarColor: 'black',
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  style={{height: 20, width: 20}}
                  source={
                    focused
                      ? require('../src/assets/Images/pR.png')
                      : require('../src/assets/Images/p.png')
                  }
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
