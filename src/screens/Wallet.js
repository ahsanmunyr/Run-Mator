import React from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import HistoryModal from '../components/HistoryModal';
import Heading from '../components/Heading';
import IconComp from '../components/IconComp';
import colors from '../assets/colors';

const {width, height} = Dimensions.get('window');

const HistoryScreen = props => {
  let amount = '1000.00';

  return (
    <>
      <View style={styles.container}>
        <Header
          showBack={true}
          navigation={props.navigation}
          iconName="arrow-back"
        />
        <View style={{flexDirection: 'row'}}>
          <Heading
            title="Wallet"
            passedStyle={styles.heading}
            fontType="bold"
          />
        </View>
        <Heading
          passedStyle={styles.totalAmountInAcc}
          title="Total amount in account"
          fontType="medium"
        />
        <Heading
          passedStyle={styles.amount}
          title={`$${amount}`}
          fontType="bold"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    marginLeft: width * 0.08,
    marginTop: height * 0.04,
  },
  totalAmountInAcc: {
    marginLeft: width * 0.08,
    marginTop: height * 0.03,
    color: 'rgba(0,0,0,0.7)',
    fontSize: width * 0.05,
  },
  amount: {
    color: colors.themeBlue,
    fontSize: height * 0.05,
    marginLeft: width * 0.08,
  },
});
export default HistoryScreen;
