import { View, Text ,SafeAreaView,FlatList,Image} from 'react-native'
import React, { useEffect ,useState} from 'react'
import axios from 'axios';

export default function Drawer() {
  const [data, setdata] = useState([]);

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then(
      response =>{
        console.log('hrdjfcjgfjffffff',response.data);
          setdata(response.data)
      }
    );

  },[]);

  const onrender=({item})=>{
    return(
      <View style={{marginTop:20,justifyContent:'space-between'}}>
        <Image source={{uri:item.image}} style={{height:220,width:195}}/>
        <Text>{`Under ${item.price} $`}</Text>
      </View>
    )

  }

  return (
    <SafeAreaView>
      <View>
      <Text>Drawer</Text>
      </View>
      <FlatList
      numColumns={2}
      data={data}
      renderItem={onrender}
      />
    </SafeAreaView>
    
  )
}