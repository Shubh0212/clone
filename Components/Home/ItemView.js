import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';

export default function ItemView({navigation, route}) {
  return (
    <View>
      <View style={styles.headerView}>
        <View style={{flexDirection: 'row', top: 30}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../src/assets/back.png')}
              style={styles.backstyle}
            />
          </TouchableOpacity>
          <Text style={styles.categoryHeaderView}>{route.params.category}</Text>
        </View>
        <View style={styles.rightHeaderView}>
          <TouchableOpacity>
            <Image
              source={require('../../src/assets/share.png')}
              style={styles.fontStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Wish');
            }}>
            <Image
              source={require('../../src/assets/heart.png')}
              style={styles.fontStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Bag');
            }}>
            <Image
              source={require('../../src/assets/bag.png')}
              style={styles.fontStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        style={{height: '83%'}}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={{backgroundColor: 'white'}}>
          <Image
            source={{uri: route.params.image}}
            style={styles.ProductImgView}
          />
        </View>
        <View style={styles.RatingView}>
          <View style={styles.RatingViewStyle}>
            <Text style={styles.rateView}>{route.params.rating.rate}</Text>
            <Image
              source={require('../../src/assets/star.png')}
              style={styles.rateImgStyle}
            />
            <Text>{'  |'}</Text>
            <Text style={styles.countStyle}>{route.params.rating.count}</Text>
          </View>
        </View>

        <View style={styles.TitleView}>
          <Text style={styles.titleViewStyle}>{route.params.title}</Text>
          <Text style={styles.priceView}>{route.params.price} $</Text>
          <Text style={styles.taxesView}>Inclusive of all taxes</Text>
        </View>
        <View style={styles.EmiMainView}>
          <View style={{alignSelf: 'center'}}>
            <Text style={styles.EmiOptionStyle}>EMI option available</Text>
            <Text style={styles.EmiMonthView}>EMI starting from 12$/month</Text>
          </View>
          <TouchableOpacity style={styles.viewTouchable}>
            <Text style={styles.viewPlanStyle}>View Plan</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.descriptionView}>
          <Text style={styles.productView}>Product Details</Text>
          <Text style={styles.ApiDescriptionView}>
            {route.params.description}
          </Text>
        </View>

        <View style={styles.ProductMainView}>
          <View style={styles.genuineMainView}>
            <Image
              source={require('../../src/assets/Images/original.png')}
              style={styles.genuineImgStyle}
            />
            <Text style={styles.genuineTxt}>Genuine Products</Text>
          </View>

          <Text style={styles.midLineStyle}>{'|'}</Text>

          <View style={styles.qualityView}>
            <Image
              source={require('../../src/assets/Images/quality.png')}
              style={styles.qualityImgView}
            />
            <Text style={styles.qualityTxt}>Quality Checked</Text>
          </View>
        </View>

        <View style={styles.returnMainView}>
          <Text
            style={styles.returnView}>
            Easy 30 days returns and exchanges
          </Text>
          <Text
            style={styles.changeTxt}>
            Choose to return or excahnge for a different size (if available)
            within 30 days.
          </Text>
        </View>
      </ScrollView>

      <View
        style={styles.checkoutMainView}>
        <TouchableOpacity
          style={styles.wishlistViewStyle}>
          <Image
            source={require('../../src/assets/heart.png')}
            style={styles.heartImg}
          />
          <Text
            style={styles.wishlistTxt}>
            Wishlist
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bagMainView}>
          <Image
            source={require('../../src/assets/bag.png')}
            style={styles.bagImg}
          />
          <Text
            style={styles.bagTxtView}>
            ADD TO BAG
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerView: {
    height: 75,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#e8e8e8',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  backstyle: {
    height: 20,
    width: 20,
    margin: 10,
  },
  fontStyle: {
    height: 22,
    width: 22,
    margin: 10,
  },
  ProductImgView: {height: 450, width: '100%', resizeMode: 'contain'},
  RatingView: {height: 25, backgroundColor: 'white'},
  RatingViewStyle: {
    flexDirection: 'row',
    borderWidth: 1,
    width: 75,
    alignItems: 'center',
    borderRadius: 15,
    padding: 2,
    alignSelf: 'flex-end',
    right: 10,
  },
  rateView: {fontSize: 10, color: 'black', fontWeight: '500'},
  rateImgStyle: {height: 10, width: 10, tintColor: 'grey', left: 4},
  countStyle: {fontSize: 10, left: 4, color: 'black'},
  categoryHeaderView: {
    top: 10,
    left: 10,
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
  },
  rightHeaderView: {flexDirection: 'row', top: 30, right: 15},
  TitleView: {height: 90, backgroundColor: 'white', marginTop: 10},
  titleViewStyle: {padding: 10, fontWeight: '500', color: 'black'},
  priceView: {marginLeft: 10, letterSpacing: -0.5, color: 'black'},
  taxesView: {marginLeft: 10, fontSize: 11, color: 'grey', top: 4},
  EmiMainView: {
    height: 60,
    marginTop: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  EmiOptionStyle: {
    fontSize: 12,
    fontWeight: '500',
    bottom: 5,
    left: 14,
    color: 'black',
  },
  EmiMonthView: {fontSize: 11, color: 'grey', left: 14},
  viewTouchable: {alignSelf: 'center'},
  viewPlanStyle: {color: '#b90301', right: 15},
  descriptionView: {marginTop: 10, backgroundColor: 'white', marginRight: 5},
  productView: {
    fontSize: 12,
    color: 'black',
    fontWeight: '600',
    left: 14,
    marginTop: 5,
  },
  ApiDescriptionView: {
    fontSize: 11,
    color: '#525252',
    left: 14,
    marginTop: 10,
    marginRight: 8,
  },
  genuineMainView: {alignSelf: 'center', left: 25},
  ProductMainView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 60,
    marginTop: 10,
    backgroundColor: 'white',
  },
  genuineImgStyle: {height: 20, width: 20, alignSelf: 'center'},
  genuineTxt: {fontSize: 11, color: 'red'},
  midLineStyle: {fontSize: 30, alignSelf: 'center', color: 'grey'},
  qualityView: {alignSelf: 'center', right: 25},
  qualityImgView: {height: 20, width: 20, alignSelf: 'center'},
  qualityTxt: {fontSize: 11, color: 'red'},
  returnMainView: {marginTop: 10, backgroundColor: 'white'},
  returnView:{
    margin: 15,
    fontSize: 13,
    fontWeight: '600',
    color: 'black',
  },
  changeTxt:{
    marginLeft: 15,
    fontSize: 12,
    color: '#313131',
    bottom: 8,
    marginRight: 25,
  },
  checkoutMainView:{
    backgroundColor: 'white',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  wishlistViewStyle:{
    flexDirection: 'row',
    width: 150,
    borderWidth: 0.5,
    justifyContent: 'space-around',
    padding: 10,
    top: 10,
    height: 40,
  },
  heartImg:{height: 20, width: 20, tintColor: 'black'},
  wishlistTxt:{
    right: 20,
    fontSize: 13,
    fontWeight: '600',
    color: 'black',
  },
  bagMainView:{
    flexDirection: 'row',
    width: 170,
    borderWidth: 0.5,
    justifyContent: 'space-around',
    padding: 10,
    top: 10,
    height: 40,
    backgroundColor: '#f26161',
  },
  bagImg:{height: 18, width: 18, tintColor: 'white'},
  bagTxtView:{
    right: 10,
    color: 'white',
    fontSize: 12,
    fontWeight: '700',
    alignSelf: 'center',
  }


});
