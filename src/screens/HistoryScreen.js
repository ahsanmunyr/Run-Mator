import React, {useEffect, useState} from 'react';

import {
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import Header from '../components/Header';
import HistoryModal from '../components/HistoryModal';
import Heading from '../components/Heading';
import IconComp from '../components/IconComp';
const {width, height} = Dimensions.get('window');

const HistoryScreen = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState(null);

  const onItemPress = (item, index) => {
    setModalData(item);
    setIsModalVisible(true);
  };

  // useEffect(() => {
  //   console.log({isModalVisible});
  // }, [isModalVisible]);
  return (
    <>
      <View style={styles.container}>
        {/* Header  */}
        <Header
          showBack={true}
          navigation={props.navigation}
          iconName="arrow-back"
        />

        {/* Screen Heading  */}
        <View style={{flexDirection: 'row'}}>
          <Heading
            title="History"
            passedStyle={styles.heading}
            fontType="bold"
          />
        </View>

        {/* Table Headings  */}
        <View style={[styles.tableHeadings]}>
          <Heading
            passedStyle={styles.heading1}
            title="Last Service"
            fontType="bold"
          />
          <Heading passedStyle={styles.heading1} title="Paid" fontType="bold" />
        </View>

        <FlatList
          data={dummyData}
          vertical
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item._id.toString()}
          contentContainerStyle={styles.flatListContentContainerStyle}
          renderItem={({item, index}) => (
            <TouchableOpacity
              key={index}
              style={styles.rowView}
              onPress={() => onItemPress(item, index)}>
              <Heading
                passedStyle={styles.textStyle}
                title={`${index + 1}. `.concat(
                  item.text.length > 20
                    ? `${item.text.substring(0, 20)}...`
                    : item.text,
                )}
                fontType="medium"
              />
              <Heading
                passedStyle={styles.textStyle}
                title={`$${item.price.toFixed(2)}`}
                fontType="medium"
              />
            </TouchableOpacity>
          )}
        />
      </View>
      {isModalVisible && (
        <HistoryModal
          data={modalData}
          showModal={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      )}
    </>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    color: 'black',
    marginLeft: width * 0.08,
    fontSize: width * 0.1,
    marginTop: height * 0.04,
  },
  heading1: {
    marginTop: height * 0.05,
    // marginLeft: width * 0.04,
    // marginRight: width * 0.09,
    fontSize: width * 0.06,
    color: 'black',
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: height * 0.013,
  },
  flatListContentContainerStyle: {
    marginHorizontal: width * 0.1,
  },
  tableHeadings: {
    marginHorizontal: width * 0.1,
    marginVertical: height * 0.01,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: height * 0.009,
  },
  textStyle: {
    color: 'rgba(0,0,0,0.7)',
    textTransform: 'capitalize',
    fontSize: width * 0.045,
  },
});

const dummyData = [
  {
    _id: 1,
    text: 'flat tire',
    price: 5,
    location:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
  },
  {
    _id: 2,
    text: 'battery',
    price: 20,
    location:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
  },
  {
    _id: 3,
    text: 'accident',
    price: 200,
    location:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
  },
  {
    _id: 4,
    text: 'fuel out',
    location:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',

    price: 10,
  },
  {
    _id: 5,
    text: 'towing',
    location:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',

    price: 30,
  },
  {
    _id: 6,
    text: 'malfunction',
    location:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',

    price: 5,
  },
];
