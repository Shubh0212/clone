import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from '../Components/Home/HomeScreen';
import { CategoryScreen } from '../Components/Category/Category';
import ExploreScreen from '../Components/Explore/ExploreScreen'
import { ProfileScreen } from '../Components/Profile/Profile';
import Notification from '../Components/Notification';
import Wishlist from '../Components/Wishlist';
import ShoppingBag from '../Components/ShoppingBag';
import StudioScreen from '../Components/Studio/StudioScreen';
import TopPicks from '../Components/Home/TopPicks';
import ItemView from '../Components/Home/ItemView';




const HomeStack = createNativeStackNavigator();

export function HomeStackScreen({navigation}) {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="Notification" component={Notification} />
      <HomeStack.Screen name="Wish" component={Wishlist} />
      <HomeStack.Screen name="Bag" component={ShoppingBag} />
      <HomeStack.Screen name="TopPicks" component={TopPicks} />
      <HomeStack.Screen name="ItemView" component={ItemView} />
    </HomeStack.Navigator>
  );
}

const CategoryStack = createNativeStackNavigator();

export function CategoryStackScreen() {
  return (
    <CategoryStack.Navigator>
      <CategoryStack.Screen
        name="Category"
        component={CategoryScreen}
        options={{headerShown: false}}
      />
    </CategoryStack.Navigator>
  );
}

export function ExploreStackScreen() {
  return (
    <CategoryStack.Navigator>
      <CategoryStack.Screen
        name="Explore"
        component={ExploreScreen}
        options={{headerShown: false}}
      />
    </CategoryStack.Navigator>
  );
}
export function ProfileStackScreen() {
  return (
    <CategoryStack.Navigator screenOptions={{headerShown:false}}>
      <CategoryStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen name="Wish" component={Wishlist} />
    </CategoryStack.Navigator>
  );
}

const StudioStack = createNativeStackNavigator();

export function StudioStackScreen() {
  return (
    <StudioStack.Navigator>
      <StudioStack.Screen
        name="Studio"
        component={StudioScreen}
        options={{headerShown: false}}
      />
    </StudioStack.Navigator>
  );
}