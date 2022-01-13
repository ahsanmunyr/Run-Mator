import React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
  View,
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Inputbox = ({
  value,
  setTextValue,
  placeholderTilte,
  isSecure,
  keyboardType,
  placeholderTextColor,
  passedStyle,
}) => {
  return (
    <>
      <TextInput
        style={[styles.input, passedStyle && passedStyle]}
        onChangeText={setTextValue}
        value={value}
        placeholder={placeholderTilte}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={isSecure || false}
        keyboardType={keyboardType || 'default'}
      />
    </>
  );
};
const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    width: width * 0.8,
    alignItems: 'center',
    borderRadius: 50,
    justifyContent: 'center',
    paddingVertical: height * 0.018,
    paddingLeft: 30,
    margin: 10,
  },
});

export default Inputbox;
