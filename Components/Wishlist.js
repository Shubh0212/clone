import { View, Text ,SafeAreaView,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import styles from '../src/assets/StyleSheet';
import ItemSlider from './ItemSlider';

export default function Wishlist({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f5f5f5'}}>
    <View style={styles.NotificationScreen}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          source={require('../src/assets/back.png')}
          style={styles.menustyle}
        />
      </TouchableOpacity>
      <View style={{flexDirection: 'column'}}>
        <Text style={{marginLeft: 10,color:'black'}}>ππ’π¬π‘π₯π’π¬π­</Text>
        <Text style={{fontSize: 10, marginLeft: 15, color: 'grey'}}>
          0 items
        </Text>
      </View>
    </View>
    <View style={styles.wishlistText}>
      <Text style={{marginBottom: 10, fontSize: 20}}>
        π¬πΌππΏ ππΆππ΅πΉπΆππ πΆπ π²πΊπ½ππ
      </Text>
      <Text style={styles.notifyText}>
        Save items that you like in your wishlist
      </Text>
      <Text style={styles.notifyText}>
        Review them anytime and easily move
      </Text>
      <Text style={styles.notifyText}>them to the bag.</Text>
      <TouchableOpacity>
        <Text style={styles.wishlistShopNowText}>SHOP NOW</Text>
      </TouchableOpacity>
    </View>

    <View style={{flex: 1}}>
      <ItemSlider/>
    </View>
  </SafeAreaView>
  )
}