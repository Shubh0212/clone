import { View, Text ,TouchableOpacity,Image,StyleSheet} from 'react-native'
import React from 'react'

export default function StudioSecondView() {
  return (
    <View style={styles.secondMainView}>
          <View
            style={styles.ImageViewStyle}>
            <TouchableOpacity>
            <Image
              source={require('../../src/assets/Images/Smyntra.gif')}
              style={styles.ImageStyle}
            />
            </TouchableOpacity>
            <Text style={styles.textStyle}>
              40-70% OFF
            </Text>
          </View>

          <View
            style={styles.ImageViewStyle}>
            <TouchableOpacity>
            <Image
              source={require('../../src/assets/Images/Smyntra1.png')}
              style={styles.ImageStyle}
            />
            </TouchableOpacity>
            <Text style={styles.textStyle}>
              BOLLYWOOD
            </Text>
          </View>

          <View
            style={styles.ImageViewStyle}>
            <TouchableOpacity>
            <Image
              source={require('../../src/assets/Images/Smyntra2.png')}
              style={styles.ImageStyle}
            />
            </TouchableOpacity>
            <Text style={styles.textStyle}>
              NEW ARRIVALS
            </Text>
          </View>

          <View
            style={styles.ImageViewStyle}>
            <TouchableOpacity>
            <Image
              source={require('../../src/assets/Images/Smyntra4.png.jpg')}
              style={styles.ImageStyle}
            />
            </TouchableOpacity>
            <Text style={styles.textStyle}>
              SHOWS
            </Text>
          </View>

          <View
            style={styles.ImageViewStyle}>
            <TouchableOpacity>
            <Image
              source={require('../../src/assets/Images/Smyntra5.png')}
              style={styles.ImageStyle}
            />
            </TouchableOpacity>
            <Text style={styles.textStyle}>
              MOST VIRAL
            </Text>
          </View>
        </View>
  )
}

const styles = StyleSheet.create({
    secondMainView: {
        height: 100,
        marginTop: 20,
        backgroundColor: 'white',
        flexDirection: 'row',
      },
      ImageViewStyle:{width: 78, justifyContent: 'center', alignItems: 'center'},
      ImageStyle:{height: 65, width: 65, borderRadius: 90, margin: 5},
      textStyle:{fontSize: 9, fontWeight: '700', color: 'black',top:2}
})