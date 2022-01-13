import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';
import AuthRootStackScreens from './AuthRootStackScreens';
import MainAppScreens from './MainAppScreens';
import PushNotification from "react-native-push-notification";
import messaging from '@react-native-firebase/messaging';


const MainNavigator = ({UserReducer}) => {
  const [token, setToken] = useState(UserReducer?.accessToken);
  const [loading, setLoading] = useState(false);

  console.log(UserReducer?.isUserLogin)
  useEffect(() => {
    if (UserReducer?.isUserLogin) {
      // setToken('123');
      try {
        messaging()
          .getToken()
          .then(token => {
            // setFCMToken(token);
            console.log(token, 'FCM TOKEN');
          });
        messaging().onNotificationOpenedApp(remoteMessage => {
          console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
          );
        });
        messaging()
          .getInitialNotification()
          .then(remoteMessage => {
            if (remoteMessage) {
              console.log(
                'Notification caused app to open from quit/kill state:',
                remoteMessage,
              );
            }
          });
        const unsubscribe = messaging().onMessage(async remoteMessage => {
          console.log(remoteMessage, 'AHSAN');
          if(remoteMessage.data.type == "student"){

          }

          // notificationFunction(remoteMessage, onChangeMessageData);
          // setValidation(true);
          PushNotification.localNotification({
            channelId: 'channel-id',
            channelName: 'My channel',
            message: remoteMessage.notification.body,
            playSound: true,
            title: remoteMessage.notification.title,
            priority: 'high',
            soundName: 'default',
          });
        });
        return unsubscribe;
      } catch (e) {
        console.log(e);
      }
    } else {
      setToken(null);
    }
  }, [UserReducer]);

  if (loading) {
    return <Text>Loading</Text>;
  } else {
    return (
      <NavigationContainer>
        {UserReducer?.isUserLogin ? (
          // token != null || token != undefined
          <MainAppScreens />
        ) : (
          <AuthRootStackScreens />
        )}
      </NavigationContainer>
    );
  }
};

// export default MainNavigator;
const mapStateToProps = ({UserReducer}) => {
  return {UserReducer};
};

export default connect(mapStateToProps, null)(MainNavigator);
