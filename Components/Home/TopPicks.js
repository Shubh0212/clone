import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function TopPicks({navigation}) {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(response => {
      console.log('hrdjfcjgfjffffff', response.data);
      setdata(response.data);
    });
  }, []);

  const onrender = ({item}) => {
    return (
      <View style={styles.listMainView}>
        <TouchableOpacity onPress={()=>{
          let index = data.findIndex(x => x == item);
          navigation.navigate("ItemView", {...data[index]})
          console.log("Index", index)
        }} style={styles.listImgView}>
          <Image source={{uri: item.image}} style={styles.listImg} />
        </TouchableOpacity>
        <Text style={styles.listCategory}>{item.category}</Text>
        <Text style={styles.listprice}>{`Under ${item.price} $`}</Text>
      </View>
    );
  };

  return (
    <View style={{height: '100%'}}>
      <View style={styles.headerView}>
        <View style={{flexDirection: 'row', top: 30}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../src/assets/back.png')}
              style={styles.backstyle}
            />
          </TouchableOpacity>
          <Text style={{top: 10, left: 10,color:'black'}}>Myntra</Text>
        </View>
        <View style={{flexDirection: 'row', top: 30, right: 15}}>
          <TouchableOpacity>
            <Image
              source={require('../../src/assets/search.png')}
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
      <FlatList
        bounces={false}
        numColumns={2}
        data={data}
        renderItem={onrender}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fontStyle: {
    height: 22,
    width: 22,
    margin: 10,
  },
  backstyle: {
    height: 20,
    width: 20,
    margin: 10,
  },
  headerView: {
    height: 75,
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    position: 'relative',
    zIndex: 1,
    flexDirection: 'row',
  },
  listCategory: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    margin: 5,
    borderRadius: 5,
  },
  listprice: {color: 'red', fontSize: 13, margin: 5, bottom: 6},
  listImg: {height: 250, width: 195, resizeMode: 'contain'},
  listMainView: {justifyContent: 'center', marginTop: 5},
  listImgView: {backgroundColor: 'white'},
});
