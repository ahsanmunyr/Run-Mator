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
import background_img from '../assets/backgroung-image.png';
import Heading from '../components/Heading';
import colors from '../assets/colors';
import {StripeProvider} from '@stripe/stripe-react-native';
import StripeCardComp from '../components/StripeCardComp';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const BankCardDetails = ({navigation, route}) => {
  
  const PUB_KEY_STRIPE =
    'pk_test_51JVChuLcwRj59Ifbt31dML7GTICUq0WRuxkSvFr9cbrNEzJgLHt8GuDRpCldBdJ8uS8O4OFuXRbcfqEKNnTYHK5u007FIvTgKu';
  // const [bankName, setBankName] = useState('');
  // const [branchCode, setBranchCode] = useState('');
  // const [accTitle, setAccTitle] = useState('');
  // const [accNum, setAccNum] = useState('');
  const [stripeGeneratedKey, setStripeGeneratedKey] = useState('');
  const _onPressSignUp = () => {
    if (stripeGeneratedKey === '') {
      alert('Card number is required');
    } else {
      console.log(stripeGeneratedKey)
      navigation.navigate('Otp',route.params);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground source={background_img} style={styles.image}>
        {/* <Text style={styles.text}>BANK ACCOUNT DETAILS</Text> */}

        <Heading
          title="BANK ACCOUNT DETAILS"
          fontType="extra-bold"
          passedStyle={styles.heading}
        />

        <View style={{flexDirection: 'row',marginHorizontal:10,marginTop:height *0.04}}>
          <StripeProvider publishableKey={PUB_KEY_STRIPE}>
            <StripeCardComp setId={setStripeGeneratedKey} />
          </StripeProvider>
        </View>
        {/* <View style={styles.inputBoxes}> */}
          {/* <StripeProvider publishableKey={PUB_KEY_STRIPE}>
            <StripeCardComp />
          </StripeProvider> */}
          {/* <Inputbox
            value={cardNumber}
            setTextValue={setCardNumber}
            placeholderTilte="Card Number"
            isSecure={true}
          />
          <Inputbox
            value={bankName}
            setTextValue={setBankName}
            placeholderTilte="Bank Name"
            isSecure={true}
          />
          <Inputbox
            value={branchCode}
            setTextValue={setBranchCode}
            placeholderTilte="Branch Code"
            isSecure={true}
          />
          <Inputbox
            value={accTitle}
            setTextValue={setAccTitle}
            placeholderTilte="Account Title"
            isSecure={true}
          />
          <Inputbox
            value={accNum}
            setTextValue={setAccNum}
            placeholderTilte="Account Number"
            isSecure={true}
          /> */}
        {/* </View> */}
        <Button
          title="Sign Up"
          onBtnPress={() => _onPressSignUp()}
          isBgColor={true}
          btnStyle={styles.btnStyle}
          btnTextStyle={styles.btnTextStyle}
        />
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: colors.themeBlue,
    textAlign: 'center',
    fontSize: width * 0.09,
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

export default BankCardDetails;
