import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  LogBox,
  FlatList,
} from 'react-native';
import Heading from '../components/Heading';
import car from '../assets/Car.png';
import battery from '../assets/Battery.png';
import wave from '../assets/Wave.png';
import wheel from '../assets/Wheel.png';
import construction from '../assets/Construction.png';
import colors from '../assets/colors';
import BoxComp from '../components/BoxComp';
import Button from '../components/Button';
import Header from '../components/Header';
import OptionsMapper from '../components/OptionsMapper';
import * as actions from '../store/Actions/index';
import {connect} from 'react-redux';
LogBox.ignoreLogs(['new NativeEventEmitter']);

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function Home({navigation, UserReducer}) {
  console.log(UserReducer)
  const [options, setOptions] = useState(dummyOptions);
  let name = UserReducer?.userData?.username?.split(' ')[0];
  // Options Handler
  const _onPressOptions = (item, index) => {
    navigation.navigate('Map');
  };

  const _onPressSignUp = () => {
    navigation.navigate('AllServices');
  };

  return (
    <View style={styles.container}>
      <Header title="Menu" navigation={navigation} />

      {/* Features FlatList  */}
      <FlatList
        vertical
        numColumns={2}
        nestedScrollEnabled={true}
        contentContainerStyle={styles.flatListContentContainerStyle}
        data={options}
        keyExtractor={item => item?._id.toString()}
        ListHeaderComponent={() => (
          <>
            <Image source={wave} style={styles.img_wave} />

            <View
              style={{
                flexDirection: name?.length > 7 ? 'column' : 'row',
                width: width * 0.8,
              }}>
              <Heading
                title="Hello,"
                passedStyle={styles.heading}
                fontType="bold"
              />
              <Heading
                title={name}
                passedStyle={styles.heading_username}
                fontType="bold-italic"
              />
            </View>
          </>
        )}
        ListHeaderComponentStyle={{
          // backgroundColor: 'red',
          marginTop: height * -0.05,
        }}
        renderItem={({item, index}) => (
          <OptionsMapper item={item} index={index} onPress={_onPressOptions} />
        )}
      />
      {/* 
        Ahmed Code Here:::--
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <TouchableOpacity
            style={styles.boxContainer}
            onPress={() => {
              console.log('pressed');
            }}>
            <Image source={construction} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.boxContainer}
            onPress={() => {
              console.log('pressed');
            }}>
            <Image source={battery} />
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>Towing</Text>
            <Text style={styles.text}>Battery</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <TouchableOpacity
            style={styles.boxContainer}
            onPress={() => {
              console.log('pressed');
            }}>
            <Image source={car} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.boxContainer}
            onPress={() => {
              console.log('pressed');
            }}>
            <Image source={wheel} />
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>Accident</Text>
            <Text style={styles.text}>Wheel</Text>
          </View>
        </View> */}

      {/* All Services  */}
      <View style={styles.allServicesStyle}>
        <Button
          title="View All Services"
          onBtnPress={() => _onPressSignUp()}
          isBgColor={true}
          btnStyle={styles.btnStyle}
          btnTextStyle={styles.btnTextStyle}
        />
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: colors.themeBlue,
    borderRadius: width * 0.08,
    width: width * 0.6,
  },
  btnTextStyle: {
    color: 'white',
    fontSize: width * 0.04,
  },
  flatListContentContainerStyle: {
    alignItems: 'center',
  },
  allServicesStyle: {
    // marginVertical: height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  img_wave: {
    marginTop: height * 0.08,
  },
  heading: {
    color: 'black',
    fontSize: width * 0.11,
  },
  heading_username: {
    color: colors.themeBlue,
    fontSize: width * 0.11,
    paddingLeft: width * 0.02,
  },
  boxContainer: {
    borderRadius: width * 0.02,
    height: height * 0.2,
    width: width * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.02,
    marginLeft: width * 0.065,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: 'white',
    paddingHorizontal: width * 0.2,
    paddingVertical: height * 0.005,
  },

  text: {
    fontSize: width * 0.05,
    color: '#000',
    marginLeft: width * 0.08,
    marginRight: width * 0.22,
    marginTop: height * 0.01,
  },
});
const mapStateToProps = ({UserReducer}) => {
  return {UserReducer};
};
export default connect(mapStateToProps, actions)(Home);

const dummyOptions = [
  {
    _id: 1,
    text: 'towing',
    image: require('../assets/Images/services/towing.png'),
  },
  {
    _id: 2,
    text: 'battery',
    image: require('../assets/Images/services/battery.png'),
  },
  {
    _id: 3,
    text: 'accident',
    image: require('../assets/Images/services/accident.png'),
  },
  {
    _id: 4,
    text: 'flat tyre',
    image: require('../assets/Images/services/flattyre.png'),
  },
];
