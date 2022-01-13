import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import Heading from '../components/Heading';
import car from '../assets/Car.png';
import battery from '../assets/Battery.png';
import wheel from '../assets/Wheel.png';
import construction from '../assets/Construction.png';
import fuel_Out from '../assets/FuelOut.png';
import malfunction from '../assets/Malfunction.png';
import Header from '../components/Header';
import IconComp from '../components/IconComp';
import OptionsMapper from '../components/OptionsMapper';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function AllServices(props) {
  const [options, setOptions] = useState(dummyOptions);

  // Options Handler
  const _onPressOptions = (item, index) => {
    props.navigation.navigate('Map');
  };

  return (
    <View style={styles.container}>
      <Header
        showBack={true}
        navigation={props.navigation}
        iconName="arrow-back"
      />
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      {/* <View style={styles.centerView}>
          <Heading title="All Services" passedStyle={styles.heading} />
        </View> */}
      {/* <View style={styles.container}>
          {boxes_data.map((item, i) => {
            return (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  _onPress();
                }}>
                <View style={styles.boxContainer}>
                  <Image source={item.image} />
                </View>
                <View style={styles.texticonhandler}>
                  <Text style={styles.text}>{item.title}</Text>
                  <IconComp
                    iconName="arrow-with-circle-right"
                    type={'Entypo'}
                    passedStyle={styles.icon}
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </View> */}
      <FlatList
        nestedScrollEnabled={true}
        vertical
        numColumns={2}
        contentContainerStyle={styles.flatListContentContainerStyle}
        data={options}
        keyExtractor={item => item?._id.toString()}
        ListHeaderComponentStyle={styles.flatlistHeaderStyle}
        ListHeaderComponent={() => (
          <Heading
            title="All Services"
            passedStyle={styles.heading}
            fontType="bold"
          />
        )}
        renderItem={({item, index}) => (
          <OptionsMapper item={item} index={index} onPress={_onPressOptions} />
        )}
      />
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  flatlistHeaderStyle: {
    alignSelf:'flex-start',
    marginHorizontal: width * 0.05,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    // marginHorizontal: width * 0.06,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyContent: 'space-between',
  },
  centerView: {
    marginHorizontal: width * 0.05,
  },
  heading: {
    fontSize: width * 0.1,
  },
  boxContainer: {
    borderRadius: width * 0.02,
    height: height * 0.2,
    width: width * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.02,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'white',
    // paddingHorizontal: width * 0.2,
    // paddingVertical: height * 0.005,
  },

  text: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: width * 0.02,
  },
  texticonhandler: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  flatListContentContainerStyle: {
    alignItems: 'center',
    paddingBottom: 100,
  },
  icon: {
    // marginRight: width * 0.8,
  },
});

export default AllServices;

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
  {
    _id: 5,
    text: 'fuel out',
    image: require('../assets/Images/services/fuelout.png'),
  },
  {
    _id: 6,
    text: 'malfunction',
    image: require('../assets/Images/services/malfunction.png'),
  },
];
