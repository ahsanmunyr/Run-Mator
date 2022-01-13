import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
} from 'react-native';
import Heading from './Heading';
import IconComp from './IconComp';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const OptionsMapper = ({item, index, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      key={index}
      activeOpacity={0.9}
      onPress={() => {
        onPress(item, index);
      }}>
      <View style={styles.boxContainer}>
        <Image
          source={item.image}
          style={styles.imageStyle}
          resizeMode="contain"
        />
      </View>
      <View style={styles.texticonhandler}>
        <Heading
          passedStyle={styles.text}
          title={
            item.text.length > 9 ? `${item.text.substring(0, 9)}...` : item.text
          }
          fontType="bold"
        />
        <IconComp
          iconName="arrow-right-bold-circle"
          type="MaterialCommunityIcons"
        />
      </View>
    </TouchableOpacity>
  );
};

export default OptionsMapper;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: width * 0.025,
  },
  text: {
    fontSize: width * 0.04,
    textTransform: 'capitalize',
    color: '#000',
    marginLeft: width * 0.02,
  },
  imageStyle: {
    width: width * 0.32,
    // height: height * 0.07,
  },
  texticonhandler: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  heading: {
    marginLeft: width * 0.12,
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
});
