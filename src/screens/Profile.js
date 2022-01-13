import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import Header from '../components/Header';

import Heading from '../components/Heading';
import IconComp from '../components/IconComp';
import colors from '../assets/colors';
import Button from '../components/Button';
import Inputbox from '../components/Inputbox';
// import ImagePicker from 'react-native-image-crop-picker';
// test
import {launchImageLibrary} from 'react-native-image-picker';
import DisplayNameChangeModal from '../components/DisplayNameChangeModal';
import {connect} from 'react-redux';
import * as actions from '../store/Actions/index';

const {width, height} = Dimensions.get('window');

const Profile = ({UserReducer, navigation, updateUserData}) => {
  // image state
  const [userImage, setUserImage] = useState(null);
  const [image, setImage] = useState(UserReducer?.userData?.photo);
  // display name state
  const [displayName, setDisplayName] = useState(
    UserReducer?.userData?.username,
  );
  // modal state
  const [isModalVisible, setIsModalVisible] = useState(false);

  var matches = displayName?.match(/\b(\w)/g);
  var acronym = matches?.join('');

  const _onPressSave =async () => {
    let userData = {
      photo: userImage
        ? `data:${userImage.assets[0].type};base64,${userImage.assets[0].base64}`
        : image,
      username: displayName,
    };
    await updateUserData(userData);
    Alert.alert("Success!",'Changes Saved!');
  };

  // Change Display Name
  const _onPressEditName = () => {
    setIsModalVisible(true);
  };

  // Upload Photo
  const uploadPhoto = async () => {
    console.log('Upload photo');
    var options = {
      title: 'Select Image',
      allowsEditing: true,
      quality: 0.9,
      maxWidth: 1200,
      maxHeight: 1200,
      mediaType: 'photo',
      includeBase64: true,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, response => {
      // var ArraySingleImage = []
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        // SelectMultipleImage()
      } else {
        // const source = {
        // for showing image
        //   uri: 'data:image/jpeg;base64,' + response.data
        // };
        setImage(response);
        // console.log(source)
        // ArraySingleImage.push(source)
      }
    });
  };

  return (
    <View style={styles.container}>
      {/* Header  */}
      <Header
        showBack={true}
        navigation={navigation}
        iconName="arrow-back"
        iconSize={25}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Page Heading */}
        <Heading
          title="Profile Settings"
          passedStyle={styles.heading}
          fontType="bold"
        />

        {/* Image Container  */}
        <View style={styles.boxContainer}>
          {image ? (
            <Image
              source={{
                uri: `data:${image.assets[0].type};base64,${image.assets[0].base64}`,
              }}
              style={[StyleSheet.absoluteFill, {borderRadius: 100}]}
              // style={styles.imageStyle}
            />
          ) : (
            <Heading
              passedStyle={styles.usernameWordsStyle}
              title={acronym}
              fontType="bold"
            />
          )}
          <TouchableOpacity
            style={styles.iconTouchable}
            onPress={() => uploadPhoto()}>
            <IconComp
              iconName="camera-alt"
              type={'MaterialIcons'}
              passedStyle={styles.icon}
            />
          </TouchableOpacity>
        </View>

        {/* Username Container  & Password */}
        <View style={styles.usernameViewStyle}>
          <Heading
            title={displayName}
            passedStyle={styles.usernameStyle}
            fontType="medium"
          />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => _onPressEditName()}>
            <IconComp
              iconName="pencil"
              type="MaterialCommunityIcons"
              passedStyle={styles.pencilIcon}
            />
          </TouchableOpacity>
        </View>
        <Inputbox
          passedStyle={styles.border_line}
          isSecure={true}
          placeholderTilte="Change Password"
          placeholderTextColor="rgba(0,0,0,0.7)"
        />
        <Inputbox
          passedStyle={styles.border_line}
          isSecure={true}
          placeholderTilte="Confirm Password"
          placeholderTextColor="rgba(0,0,0,0.7)"
        />
        {/* Save Button  */}
        <View style={styles.btnContainer}>
          <Button
            title="SAVE"
            btnStyle={styles.btnStyle}
            onBtnPress={() => _onPressSave()}
            btnTextStyle={styles.btnTextColor}
            isBgColor={true}
          />
        </View>
      </ScrollView>
      {isModalVisible && (
        <DisplayNameChangeModal
          value={displayName}
          setValue={setDisplayName}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  pencilIcon: {
    color: 'black',
    fontSize: width * 0.045,
    paddingLeft: width * 0.02,
  },
  usernameWordsStyle: {
    fontSize: width * 0.12,
    color: colors.themeBlue,
  },
  btnStyle: {
    borderRadius: width * 0.02,
    backgroundColor: colors.themeBlue,
  },
  btnTextColor: {
    color: 'white',
    fontSize: width * 0.045,
  },
  btnContainer: {
    alignItems: 'center',
    marginTop: height * 0.05,
    // paddingBottom: 100,
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#707070',
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalLinePosition: {
    flexDirection: 'row',
    marginLeft: width * 0.1,
    marginRight: width * 0.1,
  },
  heading: {
    color: 'black',
    marginLeft: width * 0.08,
    fontSize: width * 0.08,
    marginTop: height * 0.04,
  },
  boxContainer: {
    borderRadius: width * 0.8,
    height: width * 0.5,
    width: width * 0.48,
    alignItems: 'center',
    marginHorizontal: width * 0.22,
    marginTop: width * 0.06,
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'rgba(0,0,0,0.008)',
    // paddingHorizontal: width * 0.2,
    // paddingVertical: height * 0.005,
  },
  usernameStyle: {
    fontSize: height * 0.031,
    marginRight: width * 0.01,
  },
  icon: {
    backgroundColor: colors.themeBlue,
    color: '#ffffff',
    padding: height * 0.01,
    borderRadius: width,
  },
  iconTouchable: {
    position: 'absolute',
    top: height * 0.18,
    right: width * 0.02,
    backgroundColor: 'blue',
    borderRadius: width,
  },
  border_line: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.12)',
    width: width * 0.95,
    fontFamily: 'Montserrat-Regular',
    fontSize:width * 0.04,
  },
  imageStyle: {
    width: width * 0.5,
    height: height * 0.28,
    borderRadius: width * 0.8,
  },
  usernameViewStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: height * 0.03,
  },
});

const mapStateToProps = ({UserReducer}) => {
  return {UserReducer};
};
export default connect(mapStateToProps, actions)(Profile);
