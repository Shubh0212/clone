import { View, Text ,Image, Dimensions} from 'react-native'
import React from 'react'
import styles from '../../src/assets/StyleSheet'
const {height: screenHeight,} = Dimensions.get('screen')

export default function CategoryItems() {
  return (
      <View style={{marginBottom: 70,}}>
    <View style={{height: 130}}>
    <Image source={require('../../src/assets/Images/cBg1.jpeg')} style={styles.categoryBgStyle}/>
    <Text style={styles.springTxt}>SPRING SUMMER</Text>
    <Text style={styles.springTxt}>2022</Text>
    <Text style={styles.summerCategoryStyle}>New Styles Getting Added Daily</Text>
    <Image source={require('../../src/assets/Images/mwBg.png')} style={styles.menWImg}/>
    
  </View>

  <View style={{height: 130,borderTopWidth:3,borderTopColor:'white'}}>
    <Image source={require('../../src/assets/Images/cBg2.png')} style={styles.categoryBgStyle}/>
    <Text style={styles.womenTxt}>WOMEN</Text>
    
    <Text style={styles.womenCategoryStyle}>Kurtas & Suits, Tops & Tees, Dresses, Fo...</Text>
      <Image source={require('../../src/assets/Images/women.png')} style={styles.womenImg}/> 
  </View>

  <View style={{height: 130,borderTopWidth:3,borderTopColor:'white'}}>
    <Image source={require('../../src/assets/Images/cBg3.jpeg')} style={styles.categoryBgStyle}/>
    <Text style={styles.womenTxt}>MEN</Text>
    
    <Text style={styles.womenCategoryStyle}>T-SHirts, Shirts, Jeans, Shoes, Accessor...</Text>
      <Image source={require('../../src/assets/Images/men.png')} style={styles.menImg}/>
  </View>

  <View style={{height: 130,borderTopWidth:3,borderTopColor:'white'}}>
    <Image source={require('../../src/assets/Images/cBg4.png')} style={styles.categoryBgStyle}/>
    <Text style={styles.womenTxt}>KIDS</Text>
    
    <Text style={styles.womenCategoryStyle}>Brand, Clothing, Footware, Accessories</Text>
    <View>
      <Image source={require('../../src/assets/Images/kids.png')} style={styles.kidImg}/>
    </View>
  </View>

  <View style={{height: 130,borderTopWidth:3,borderTopColor:'white'}}>
    <Image source={require('../../src/assets/Images/cBg5.png')} style={styles.categoryBgStyle}/>
    <Text style={styles.springTxt}>BEAUTY &</Text>
    <Text style={styles.springTxt}>GROOMING</Text>
    <Text style={styles.summerCategoryStyle}>Skincare, Clothing, Grooming & Ot...</Text>
    <Image source={require('../../src/assets/Images/beauty.png')} style={styles.menWImg}/>
    
  </View>

  <View style={{height: 130,borderTopWidth:3,borderTopColor:'white'}}>
    <Image source={require('../../src/assets/Images/cBg6.png')} style={styles.categoryBgStyle}/>
    <Text style={styles.womenTxt}>HOME & LIVING</Text>
    
    <Text style={styles.womenCategoryStyle}>Bedsheets, Blankets, Towels, Curtains...</Text>
    <View>
      <Image source={require('../../src/assets/Images/home.png')} style={styles.HomeImg}/>
    </View>
  </View>

  <View style={{height: 130,borderTopWidth:3,borderTopColor:'white'}}>
    <Image source={require('../../src/assets/Images/cBg8.png')} style={styles.categoryBgStyle}/>
    <Text style={styles.womenTxt}>ACCESSORIES</Text>
    
    <Text style={styles.womenCategoryStyle}>One Shop Stop to Amp Up</Text>
    <View>
      <Image source={require('../../src/assets/Images/accessories.png')} style={styles.accessoriesImg}/>
    </View>
  </View>

  <View style={{height: 130,borderTopWidth:3,borderTopColor:'white'}}>
    <Image source={require('../../src/assets/Images/cBg9.png')} style={styles.categoryBgStyle}/>
    <Text style={styles.womenTxt}>TEENS</Text>
    
    <Text style={styles.womenCategoryStyle}>Next Level Refresh</Text>
    <View>
      <Image source={require('../../src/assets/Images/teens.png')} style={styles.teensImg}/>
    </View>
  </View>

  <View style={{height: 130,borderTopWidth:3,borderTopColor:'white'}}>
    <Image source={require('../../src/assets/Images/cBg10.png')} style={styles.categoryBgStyle}/>
    <Text style={styles.womenTxt}>PLUS SIZE</Text>
    
    <Text style={styles.womenCategoryStyle}>Top, Tshirts, Kurtas</Text>
    <View>
      <Image source={require('../../src/assets/Images/plusSize.png')} style={styles.plusSizeImg}/>
    </View>
  </View>

  <View style={{height: 130,borderTopWidth:3,borderTopColor:'white'}}>
    <Image source={require('../../src/assets/Images/cBg11.png')} style={styles.categoryBgStyle}/>
    <Text style={styles.womenTxt}>THEME STORES</Text>
    
    <Text style={styles.womenCategoryStyle}>Wedding, Party, Sports, Handloom, ma..</Text>
    <View>
      <Image source={require('../../src/assets/Images/theme.png')} style={styles.themeImg}/>
    </View>
  </View>

  <View style={{height: 130,borderTopWidth:3,borderTopColor:'white'}}>
    <Image source={require('../../src/assets/Images/cBg12.png')} style={styles.categoryBgStyle}/>
    <Text style={styles.womenTxt}>STYLECAST</Text>
    
    <Text style={styles.womenCategoryStyle}>NEW BOLD TRENDING</Text>
    <View>
      <Image source={require('../../src/assets/Images/stylecast.png')} style={styles.menImg}/>
    </View>
  </View>

  <View style={{height: 130,borderTopWidth:3,borderTopColor:'white'}}>
    <Image source={require('../../src/assets/Images/cBg7.png')} style={styles.categoryBgStyle}/>
    <Text style={styles.womenTxt}>MYNTRA MALL</Text>
    
    <Text style={styles.womenCategoryStyle}>H&M, Nike, Smashbox, Max</Text>
    <View>
      <Image source={require('../../src/assets/Images/mall.png')} style={styles.mallImg}/>
    </View>
  </View>

  <View style={{height: 130,borderTopWidth:3,borderTopColor:'white'}}>
    <Image source={require('../../src/assets/Images/cBg13.png')} style={styles.categoryBgStyle}/>
    <Text style={styles.womenTxt}>MYNTRA LUXE</Text>
    
    <Text style={styles.womenCategoryStyle}>Ted Baker, Fred Perry, Tissot, Versace</Text>
    <View>
      <Image source={require('../../src/assets/Images/luxe.png')} style={styles.menImg}/>
    </View>
  </View>

  <View style={{height: 130,borderTopWidth:3,borderTopColor:'white'}}>
    <Image source={require('../../src/assets/Images/cBg14.png')} style={styles.categoryBgStyle}/>
    <Text style={styles.womenTxt}>PET ESSENTIALS</Text>
    
    <Text style={styles.womenCategoryStyle}>Clothing, Accessories & More</Text>
    <View>
      <Image source={require('../../src/assets/Images/pet.png')} style={styles.petImg}/>
    </View>
  </View>

  </View>
  )
}