import React,{useState} from 'react';
import Heading from '../components/Heading';
import Button from '../components/Button';
import background_img from '../assets/backgroung-image.png';
import Inputbox from '../components/Inputbox';

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
import colors from '../assets/colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');

  const _onPress = () => {
    if (email === '') {
      alert('Empty Field');
    } else {
      navigation.navigate('ConfirmPassword');
    }
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground source={background_img} style={styles.image}>
        <Heading title="FORGOT PASSWORD" fontType='extra-bold' passedStyle={styles.heading}/>

        <View style={styles.inputBoxes}>
        <Inputbox
            value={email}
            setTextValue={setEmail}
            placeholderTilte="Email"
          />
        </View>

        <Button title="Submit" onBtnPress={() => _onPress()} />
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: colors.themeBlue,
    fontSize:width * 0.1,
    paddingHorizontal:width * 0.1,
    textAlign:'center',
    lineHeight: height * 0.07,
  },
  horizontalLinePosition: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: width * 0.5,
  },
  image: {
    justifyContent: 'center',
    width: width,
    height: height,
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

export default ForgotPassword;
