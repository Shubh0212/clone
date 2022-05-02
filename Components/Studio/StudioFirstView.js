import { View, Text,TouchableOpacity,Image,StyleSheet ,ScrollView} from 'react-native'
import React from 'react'

export default function StudioFirstView() {
  return (
      <>
    <View style={styles.firstMainView}>
          <View style={styles.dealsView}>
            <Image
              source={require('../../src/assets/Images/Stv.png')}
              style={styles.dealsImg}
            />
            <Text style={styles.dealsTxt}>
              Steal Deals In Every Show. Up To 75% Off!
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.dealsViewAllTxt}>View All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.picsScrollStyle}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <TouchableOpacity>
            <Image
              source={require('../../src/assets/Images/SImg1.png')}
              style={styles.ImageStyle}
            />
            <Image
              source={require('../../src/assets/Images/live.gif')}
              style={styles.liveGifStyle}
            />
            <Text
              style={
                styles.firstTxtImg
              }>{`Extre 30-50% Off | \nSunscreens, Facial-kits & ...`}</Text>
            <Text style={styles.secondImgTxt}>Gayatri Wandhare</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('../../src/assets/Images/Simg2.png')}
              style={styles.ImageStyle}
            />
            <Image
              source={require('../../src/assets/Images/live.gif')}
              style={styles.liveGifStyle}
            />
            <Text
              style={
                styles.firstTxtImg
              }>{`Extre 30-40% Off | \nLipsticks, Concealers & M...`}</Text>
            <Text style={styles.secondImgTxt}>Fatima Soomar</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('../../src/assets/Images/Simg3.png')}
              style={styles.ImageStyle}
            />

            <Text style={styles.liveStyle}>Live Soon</Text>

            <Text
              style={
                styles.firstTxtImg
              }>{`Extre 30-40% Off | \nPalettes, Sprays & More`}</Text>
            <Text style={styles.secondImgTxt}>Simran Sadh</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('../../src/assets/Images/Simg4.png')}
              style={styles.ImageStyle}
            />
            <Text style={styles.liveStyle}>Live Soon</Text>
            <Text
              style={
                styles.firstTxtImg
              }>{`Extre 30-40% Off | \nPrimers, Blushes & More`}</Text>
            <Text style={styles.secondImgTxt}>Krutika Nasit</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('../../src/assets/Images/Simg5.png.jpg')}
              style={styles.ImageStyle}
            />
            <Text style={styles.liveStyle}>Live Soon</Text>
            <Text
              style={
                styles.firstTxtImg
              }>{`Extre 30-50% Off | \nMascaras, Concealers &...`}</Text>
            <Text style={styles.secondImgTxt}>Riya Bardhan</Text>
          </TouchableOpacity>
        </ScrollView>
        </>
  )
}

const styles = StyleSheet.create({
    
  scrollViewStyle: {borderWidth: 1},
  firstMainView: {
    height: 50,
    backgroundColor: 'white',
    marginTop: 70,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  dealsView: {flexDirection: 'row'},
  dealsImg: {height: 20, width: 20, margin: 15},
  dealsTxt: {
    marginTop: 18,
    right: 7,
    fontSize: 12,
    fontWeight: '500',
    color: 'black',
  },
  dealsViewAllTxt: {
    fontSize: 11,
    color: 'red',
    fontWeight: '500',
    marginTop: 17,
    marginRight: 10,
  },
  picsScrollStyle: {backgroundColor: 'white', height: 280},
  ImageStyle: {
    height: 250,
    width: 180,
    marginTop: 10,
    marginLeft: 15,
    borderRadius: 10,
  },
  liveGifStyle: {height: 30, width: 60, left: 20, bottom: 230},
  firstTxtImg: {
    color: 'black',
    fontSize: 12,
    left: 25,
    bottom: 90,
    color: 'white',
    fontWeight: '500',
  },
  secondImgTxt: {
    fontSize: 11,
    fontWeight: '700',
    bottom: 82,
    left: 25,
    color: 'white',
  },
  ExploreScreenStyle: {
    flex: 0.12,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  ExploreMyntraTextStyle: {
    bottom: 10,
    flex: 1,
    marginTop: 50,
    marginLeft: 20,
    color: '#717079',
  },
  liveStyle: {
    height: 30,
    width: 70,
    left: 25,
    bottom: 230,
    color: 'white',
    fontSize: 13,
    backgroundColor: '#272c3d',
    padding: 5,
    borderRadius: 5,
    fontWeight: '600',
  },
})