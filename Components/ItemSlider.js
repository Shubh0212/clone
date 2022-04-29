import { View, Text, ScrollView, StyleSheet, Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import styles from '../src/assets/StyleSheet';

export default function ItemSlider() {
  return (
   
        <View style={styles.thirdMainView}>
          <Text style={styles.itemViewed}>ITEMS YOU HAVE VIEWED</Text>

          <View style={{flexDirection: 'row'}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <TouchableOpacity style={styles.viewedItem}>
                <Image
                  source={require('../src/assets/shoe.jpg')}
                  style={styles.shoeStyle}
                />
                <View style={{margin: 10, marginTop: 20}}>
                  <Text style={{color:'black'}}>Furo by Red Chief</Text>
                  <Text style={{fontSize: 12, color: 'grey', marginTop: 4}}>
                    Sports Shoes
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <Text style={{marginLeft: -10,color:'black'}}>₹1005</Text>
                    <Text style={{color: 'red', fontSize: 12}}>52% off</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.viewedItem}>
                <Image
                  source={require('../src/assets/watch.jpeg')}
                  style={styles.shoeStyle}
                />
                <View style={{margin: 10, marginTop: 20}}>
                  <Text style={{color:'black'}}>Daniel Klien</Text>
                  <Text style={{fontSize: 12, color: 'grey', marginTop: 4}}>
                    Watches
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <Text style={{marginLeft: -10,color:'black'}}>₹2040</Text>
                    <Text style={{color: 'red', fontSize: 12}}>60% off</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.viewedItem}>
                <Image
                  source={require('../src/assets/pant.jpeg')}
                  style={styles.shoeStyle}
                />
                <View style={{margin: 10, marginTop: 20}}>
                  <Text style={{color:'black'}}>Roadster</Text>
                  <Text style={{fontSize: 12, color: 'grey', marginTop: 4}}>
                    Trousers
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <Text style={{marginLeft: -10,color:'black'}}>₹1154</Text>
                    <Text style={{color: 'red', fontSize: 12}}>45% off</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.viewedItem}>
                <Image
                  source={require('../src/assets/woodland.jpeg')}
                  style={styles.shoeStyle}
                />
                <View style={{margin: 10, marginTop: 20}}>
                  <Text style={{color:'black'}}>Woodland</Text>
                  <Text style={{fontSize: 12, color: 'grey', marginTop: 4}}>
                    Casual Shoes
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <Text style={{marginLeft: -10,color:'black'}}>₹3395</Text>
                    <Text style={{color: 'red', fontSize: 12}}>15% off</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.viewedItem}>
                <Image
                  source={require('../src/assets/wrogn.jpeg')}
                  style={styles.shoeStyle}
                />
                <View style={{margin: 10, marginTop: 20}}>
                  <Text style={{color:'black'}}>WROGN</Text>
                  <Text style={{fontSize: 12, color: 'grey', marginTop: 4}}>
                    Shirts
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <Text style={{marginLeft: -10,color:'black'}}>₹1319</Text>
                    <Text style={{color: 'red', fontSize: 12}}>40% off</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
  )
}


  