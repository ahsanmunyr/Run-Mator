import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';
import colors from '../assets/colors';
import Map_img from '../assets/Map.png';
import Button from '../components/Button';
import userimg from '../assets/user_image.png';
import IconComp from '../components/IconComp';
import Header from '../components/Header';
import Heading from '../components/Heading';
import BottomSheet from '../components/BottomSheet';
import MapView, {Circle, Geojson, Marker, Polyline} from 'react-native-maps';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Map = ({navigation}) => {
  const [modalData, setModalData] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('030322221112');
  const sheetRef = useRef();

  // Option Press Handler
  const onItemPress = (item, index) => {
    setModalData(item);
    // setIsModalVisible(true);
    sheetRef.current.open();
  };

  const _onPressStartTracking = () => {
    console.log('start tracking');
    sheetRef.current.close();
  };

  const _onPressCallNow = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  // Current Location
  const _onPressCurrentLoc = () => {
    console.log('Curr location');
  };
  return (
    <View style={styles.container}>
      {/* <Image source={Map_img} style={StyleSheet.absoluteFillObject} /> */}
      {/* <MapView
            style={{flex:1}}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            /> */}

      <Header showBack={true} navigation={navigation} iconName="arrow-back" />
      <MapView
            style={{width: '100%', height: '100%', position: 'absolute', top: 60}}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
      <View style={styles.contentContainer}>
        {/* Rider Search & Selected Rider View  */}
        <View>
          {/* Rider Search Component  */}
          <GooglePlacesAutocomplete
            placeholder="Enter Your Location"
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
            }}
            query={{
              key: 'YOUR API KEY',
              language: 'en',
            }}
            renderLeftButton={() => (
              <IconComp
                iconName="location-pin"
                type="Entypo"
                passedStyle={styles.locationIcon}
              />
            )}
            styles={{
              textInputContainer: {
                // marginTop: height * 0.02,
                width: width * 0.9,
                backgroundColor: 'white',
                borderRadius: width * 0.025,
                height: height * 0.084,
              },
              textInput: {
                borderRadius: width * 0.025,
                height: height * 0.084,
                color: '#5d5d5d',
                fontSize: width * 0.04,
              },
            }}
          />
          {/* Selected Rider Popup  */}
          <TouchableOpacity style={styles.boxContainer} activeOpacity={0.8}>
            <View style={styles.rowView}>
              <Image source={userimg} />
              <View>
                <Heading
                  passedStyle={styles.text}
                  title={'Michael Reimer'}
                  fontType="bold"
                />
                <Heading
                  passedStyle={styles.textMechanic}
                  title={'Mechanic'}
                  fontType="medium"
                />
              </View>
            </View>

            <IconComp
              iconName="chevron-with-circle-right"
              type={'Entypo'}
              passedStyle={styles.icon_style}
            />
          </TouchableOpacity>
        </View>

        {/* Current Location & Confirm Button Container  */}
        <View>
          {/* Current Location  */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => _onPressCurrentLoc}
            style={styles.boxContainer2}>
            <IconComp
              iconName="my-location"
              type={'MaterialIcons'}
              passedStyle={{fontSize: width * 0.07}}
            />
          </TouchableOpacity>

          {/* Confirm Button  */}
          <Button
            title="CONFIRM"
            onBtnPress={() => onItemPress()}
            isBgColor={true}
            btnStyle={styles.btnStyle}
            btnTextStyle={styles.btnTextStyle}
          />
        </View>
      </View>

      {/* Bottom Sheet Component  */}
      <BottomSheet
        sheetRef={sheetRef}
        onPress={_onPressStartTracking}
        onPressCallNow={_onPressCallNow}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  locationIcon: {
    color: 'gray',
    alignSelf: 'center',
    fontSize: width * 0.052,
    paddingLeft: width * 0.03,
    // backgroundColor:'red'
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: width * 0.05,
    justifyContent: 'space-between',
    marginVertical: height * 0.03,
  },
  btnStyle: {
    backgroundColor: colors.themeBlue,
    borderRadius: width * 0.02,
    width: width * 0.9,
    margin: 0,
    marginTop: height * 0.03,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnTextStyle: {
    color: 'white',
    fontSize: width * 0.04,
    fontFamily: 'Montserrat-Bold',
  },
  image: {
    width: width,
    height: height * 0.92,
    alignItems: 'center',
  },

  boxContainer: {
    flexDirection: 'row',
    paddingHorizontal: width * 0.05,
    justifyContent: 'space-between',
    borderRadius: width * 0.02,
    height: height * 0.13,
    width: width * 0.9,
    marginTop: height * 0.12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      height: 9,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: '#fff',
  },

  boxContainer2: {
    borderRadius: width * 0.02,
    height: height * 0.07,
    width: width * 0.15,
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    // marginLeft: width * 0.6,
    shadowColor: '#000',
    shadowOffset: {
      height: 9,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: '#fff',
  },

  text: {
    fontSize: height * 0.025,
    color: 'black',
    marginLeft: width * 0.03,
  },

  textMechanic: {
    fontSize: height * 0.017,
    color: 'gray',
    marginLeft: width * 0.03,
  },

  icon_style: {
    marginLeft: width * 0.14,
  },

  header: {
    backgroundColor: 'white',
  },
});

export default Map;

{
  /* <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: width * 0.05,
        }}>
        <GooglePlacesInput />
        <IconComp
          iconName="location-pin"
          type={'MaterialIcons'}
          passedStyle={{
            marginRight: width * 0.87,
            marginTop: height * 0.04,
            color: 'grey',
          }}
        />
      </View> */
}
