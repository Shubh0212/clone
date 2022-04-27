import {StyleSheet} from 'react-native';

const profile = StyleSheet.create({
  backgroundImg: {
    width: '100%',
  },
  insiderView: {
    // flex: 0.19,
    backgroundColor: 'white',
    flexDirection: 'row',
    height:90
    
  },
  profileImg: {
    height: 120,
    width: 120,
    left: 20,
    bottom: 60,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 5,
  },
  profileTxt: {
    left: 30,
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    color:'black',
    fontWeight:'600'
  },
  crownImg: {
    height: 22,
    width: 22,
    left: 30,
    top: 8,
  },
  insiderTxt: {
    flexDirection: 'row',
  },
  crownTxt: {
    top: 14,
    left: 35,
    fontSize: 12,
    color: 'grey',
  },
  secondView: {
    marginTop: 18,
  },
  profileOrder: {
    flex: 0.22,
    borderBottomWidth: 0.4,
    borderBottomColor: 'grey',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderImg: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    tintColor: '#98999e',
  },
  orderTxt: {
    color: 'black',
    fontWeight: '500',
    bottom: 9,
  },
  statusTxt: {
    color: 'grey',
    fontSize: 11,
    bottom: 2,
  },
  txtStyle: {
    alignSelf: 'center',
    borderWidth: 2,
    // marginTop: 7,
  },
  swipeImg: {
    height: 8,
    width: 8,
    alignSelf: 'center',
    tintColor: 'grey',
  },
  callImg: {
    height: 25,
    width: 25,
    marginLeft: 15,
  },
  profileMainView: {
    flexDirection: 'row',
    paddingHorizontal: 14,
    borderBottomWidth: 0.4,
    backgroundColor:'white',
    borderBottomColor:'grey'
  },
  profileTxtImgView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  OrderTxt: {paddingHorizontal: 5, color: '#282828'},
  OrderStatusTxt:{paddingHorizontal: 5,fontSize:10,top:4,color:'grey'},
  swipeView:{padding: 18},
  profileLastMainView:{flexDirection: 'row',
  paddingHorizontal: 14,
  backgroundColor:'white',
  },
  profilesecondLastMainView:{
    flexDirection: 'row',
    paddingHorizontal: 14,
    borderBottomWidth: 0.5,
    backgroundColor:'white',
    borderBottomColor:'grey'

  },
  FaqStyle:{marginTop:10,padding:14,marginTop:20,backgroundColor:'white'},
  FaqTxtStyle:{
    fontSize:11,
    color:'#606060',
    left:48,
    fontWeight:'500'
  },
  FaqStyleTwo:{
    padding:10,backgroundColor:'white'
  }
});

export default profile;
