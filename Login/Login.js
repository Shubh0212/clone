import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import eye from '../src/assets/Images/eye.png';
import hidden from '../src/assets/Images/hidden.png';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [emailValidError, setEmailValidError] = useState('');
  const [checkValid, setcheckvalid] = useState(true);
  const [hidePass, setHidePass] = useState(true);
  const [image, setImage] = useState(false);
  const [password, setPassword] = useState('');
  const [validpass, setvalidPass] = useState('');

  const handleValidEmail = val => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (val.length == 0) {
      setEmailValidError('');
      setcheckvalid(true);
    } else if (reg.test(val) == false) {
      setEmailValidError('enter valid email address');
      setcheckvalid(true);
    } else {
      setEmailValidError('');
      setcheckvalid(false);
    }
  };

  const isValidPass = val => {
    if (val.length == 0) {
      setvalidPass(' ');
      setcheckvalid(true);
    } else if (val.length < 8) {
      setvalidPass('Password must be 8 character');
      setcheckvalid(true);
    } else {
      setvalidPass(' ');
      setcheckvalid(false);
    }
  };

  const goToHome = () => {
    if (email.length == 0 && password.length==0) {
      setcheckvalid(true);
    } else if (email.length > 0 && password.length>0) {
      setcheckvalid(false);
      setEmail('');
      setPassword('');
      navigation.navigate('Drawer');
    }
  };

  const changeimg = () => {
    setHidePass(!hidePass);
    setImage(!image);
  };

  const img = image ? eye : hidden;

  return (
    <SafeAreaView style={styles.main}>
      <Image
        source={require('../src/assets/Images/myntra.png')}
        style={styles.logoImg}
      />
      <Text style={styles.logoTxt}>Log In to Myntra</Text>

      <Text style={styles.txtStyle}>EASILY USING</Text>

      <View style={styles.easyUsingStyle}>
        <TouchableOpacity style={styles.metaView}>
          <Image
            source={require('../src/assets/Images/facebook.png')}
            style={styles.facebookStyle}
          />
          <Text style={styles.metaTxtStyle}>FACEBOOK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.metaView}>
          <Image
            source={require('../src/assets/Images/google.png')}
            style={styles.facebookStyle}
          />
          <Text style={styles.metaTxtStyle}>GOOGLE</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.emailTxt}>-OR USING EMAIL-</Text>

      <View style={styles.EmailStyle}>
        <TextInput
          placeholder="Enter Email"
          value={email}
          onChangeText={value => {
            setEmail(value);
            handleValidEmail(value);
          }}
          autoCapitalize={true}
          style={{fontSize: 12}}
        />
      </View>
      <Text style={styles.errorStyle}>
        {emailValidError ? emailValidError : null}
      </Text>
      <View style={styles.PassStyle}>
        <TextInput
          placeholder="Password"
          secureTextEntry={hidePass ? true : false}
          onChangeText={value => {
            setPassword(value);
            isValidPass(value);
          }}
          style={{fontSize: 12, width: '90%'}}
        />
        <TouchableOpacity onPress={changeimg} style={{alignSelf: 'flex-end'}}>
          <Image source={img} style={{height: 20, width: 20, left: 10}} />
        </TouchableOpacity>
      </View>
      <Text style={styles.errorStyle}>
        {validpass ? validpass : null}
      </Text>
      <TouchableOpacity onPress={goToHome} disabled={checkValid}>
        <View style={styles.LoginViewStyle}>
          <Text style={styles.LoginTxtStyle}>LOG IN</Text>
        </View>
      </TouchableOpacity>
      <Text></Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  logoImg: {
    height: 65,
    width: 65,
    marginTop: 50,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  logoTxt: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#7f848c',
  },
  txtStyle: {
    color: '#bcbfc3',
    alignSelf: 'center',
    marginTop: 35,
    fontSize: 11,
  },
  easyUsingStyle: {
    flexDirection: 'row',
  },
  metaView: {
    borderWidth: 0.5,
    flexDirection: 'row',
    borderColor: '#d7d9db',
    borderRadius: 5,
    marginLeft: 20,
    top: 14,
    width: '40%',
  },
  facebookStyle: {
    height: 30,
    width: 30,
    margin: 10,
  },
  metaTxtStyle: {
    fontSize: 12,
    margin: 10,
    top: 8,
    color: '#757a84',
    fontWeight: '500',
  },
  emailTxt: {
    marginTop: 40,
    fontSize: 10,
    color: '#c2c4c8',
    alignSelf: 'center',
  },
  EmailStyle: {
    padding:12,
    borderWidth: 1,
    marginHorizontal: 12,
    marginTop: 25,
    borderColor: '#dfdfe2',
    borderRadius: 5,
  },
  PassStyle: {
    padding:12,
    borderWidth: 1,
    marginHorizontal: 12,
    marginTop: 15,
    borderColor: '#dfdfe2',
    borderRadius: 5,
    flexDirection: 'row',
  },
  LoginViewStyle: {
    padding: 18,
    borderWidth: 1,
    marginHorizontal: 12,
    marginTop: 15,
    borderColor: '#dfdfe2',
    borderRadius: 5,
    backgroundColor: '#07c6a0',
  },
  LoginTxtStyle: {
    alignSelf: 'center',
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
  },
  errorStyle:{
    color: 'red', marginLeft: 10, height: 20,fontSize:12
  }
});
