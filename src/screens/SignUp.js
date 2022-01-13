import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Button from '../components/Button';
import Inputbox from '../components/Inputbox';
import logo from '../assets/run-matter-logo.png';
import background_img from '../assets/backgroung-image.png';
import Heading from '../components/Heading';
import colors from '../assets/colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const SignUp = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone_no, setPhone_no] = useState('');
  const [password, setPassword] = useState('');
  const [c_password, setC_Password] = useState('');

  const _onPressSignUp = () => {
    if (
      email === '' ||
      password === '' ||
      c_password === '' ||
      username === '' ||
      phone_no === ''
    ) {
      alert('All fields required');
    } else if (password != c_password) {
      alert('Password does not match ');
    } else {
      navigation.navigate('BankCardDetails', {
        username,
        email,
        phone_no,
        password,
        c_password,
      });
    }
  };
  const _onPresslogin = () => {
    navigation.navigate('LogIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground source={background_img} style={styles.image}>
        <Image source={logo} style={styles.logo} />

        <View style={styles.inputBoxes}>
          <Inputbox
            value={username}
            setTextValue={setUsername}
            placeholderTilte="UserName"
          />
          <Inputbox
            value={email}
            setTextValue={setEmail}
            placeholderTilte="Email"
          />
          <Inputbox
            value={phone_no}
            setTextValue={setPhone_no}
            placeholderTilte="Phone #"
            keyboardType={'numeric'}
          />
          <Inputbox
            value={password}
            setTextValue={setPassword}
            placeholderTilte="Password"
            isSecure={true}
          />
          <Inputbox
            value={c_password}
            setTextValue={setC_Password}
            placeholderTilte="Confirm Password"
            isSecure={true}
          />
        </View>
        <Button
          title="Next >"
          onBtnPress={() => _onPressSignUp()}
          isBgColor={true}
          btnStyle={styles.btnStyle}
          btnTextStyle={styles.btnTextStyle}
        />
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10,
            justifyContent: 'center',
          }}>
          <Heading
            title="Already have an Account?"
            fontType="medium"
            passedStyle={styles.alreadyLabel}
          />
          <TouchableOpacity onPress={() => _onPresslogin()}>
            <Heading
              title="Login"
              fontType="bold"
              passedStyle={styles.loginLabel}
            />
          </TouchableOpacity>
        </View>

        {/* <View style={styles.horizontalLinePosi  tion}>
          <View style={styles.horizontalLine} />
          <View>
            <Text style={{width: 30, textAlign: 'center'}}>Or</Text>
          </View>
          <View style={styles.horizontalLine} />
        </View> */}
        {/* <View style={{position: 'relative'}}>
          <Button
            title="Sign Up Now"
            onBtnPress={() => _onPressSignUp()}
            isBgColor={false}
          />
        </View> */}
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  alreadyLabel: {
    fontSize: width * 0.034,
    color: 'rgba(0,0,0,.8)',
  },
  btnStyle: {
    backgroundColor: colors.themeBlue,
    borderRadius: width * 0.8,
    width: width * 0.8,
  },
  btnTextStyle: {
    color: 'white',
    fontFamily: 'Montserrat-SemiBold',
  },
  loginLabel: {
    fontSize: width * 0.034,
    color: colors.themeBlue,
    paddingLeft: width * 0.015,
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalLinePosition: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: width * 0.5,
  },

  logo: {
    margin: 15,
    width: width * 0.5,
    height: height * 0.16,
    marginTop: height * 0.1,
  },

  image: {
    // flex: 1,
    // resizeMode: 'stretch',
    justifyContent: 'center',
    width: width,
    height: height,
    // backgroundColor:'red',
    alignSelf: 'center',
    alignItems: 'center',
  },
  scrollview: {
    height: height,
  },
  inputBoxes: {
    marginTop: height * 0.02,
  },
});

export default SignUp;
