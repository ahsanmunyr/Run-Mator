// import React, {useState} from 'react';
// import {
//   CardField,
//   CardFieldInput,
//   useStripe,
//   useConfirmSetupIntent,
//   createSetupIntentOnBackend,
// } from '@stripe/stripe-react-native';
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   Dimensions,
//   ImageBackground,
//   ScrollView,
// } from 'react-native';

// export default StripeCardComp = () => {
//   const [card, setCard] = useState(CardFieldInput.Details | null);


  
//   return (
//     <>
//       <CardField
//         postalCodeEnabled={true}
//         placeholder={{
//           number: '4242 4242 4242 4242',
//         }}
//         cardStyle={{
//           backgroundColor: '#FFFFFF',
//           textColor: '#000000',
//         }}
//         style={{
//           width: '100%',
//           height: 50,
//           marginVertical: 30,
//         }}
//         onCardChange={cardDetails => {
//           // setCard(cardDetails);
//           console.log(cardDetails);
//           if (cardDetails.complete) {
           
//           }
//         }}
//         onFocus={focusedField => {
//           console.log('focusField', focusedField);
//         }}
//       />
//       <TouchableOpacity
//         onPress={() => handlePayPress()}
//         style={{backgroundColor: 'red'}}>
//         <Text>Test</Text>
//       </TouchableOpacity>
//     </>
//   );
// };

import React from 'react';
import {connect} from 'react-redux';
import {CardField, useStripe} from '@stripe/stripe-react-native';
import colors from '../assets/colors';

export const StripeCardComp = ({setId}) => {
  const {createToken} = useStripe();
  return (
    <>
      <CardField
        postalCodeEnabled={false}
        placeholder={{
          number: '**** **** **** ****',
        }}
        cardStyle={{
          backgroundColor: 'white',
          textColor: colors.themeBlue,
          borderWidth: 1,
          borderColor: colors.themeBlue,
          borderRadius: 5,
        }}
        style={{
          width: '90%',
          height: 50,
        //   marginBottom: 10,
        //   alignSelf: 'center',
        //   backgroundColor:'red'
        }}
        onCardChange={cardDetails => {
          console.log(cardDetails);
          if (cardDetails.complete) {
            createToken(cardDetails).then(res => {
              console.log(res);
              setId(res.token.id)
            });
          }
        }}
      />
    </>
  );
};

export default StripeCardComp;
