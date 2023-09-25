import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import OTPTextView from "react-native-otp-textinput";

export default function Verify({navigation, route}) {
  
    const { Phonenumber } = route.params;
 
    const [otp, setOtp] = useState('');
  return (
    <ScrollView>
    <LinearGradient
      colors={['rgba(222, 242, 237, 0.7)', 'rgba(248, 248, 248, 1)']}
      style={{
        height: Dimensions.get('window').height,
      }}>
      <View
        style={{
          height: '3%',
        }}
      />
      <View
        style={{
          marginLeft: '5%',
        }}>
        <TouchableOpacity
        onPress={()=>{
            navigation.goBack()
        }}
        >
          <View
            style={{
              height: 40,
              width: 40,
              borderWidth: 1,
              borderColor: '#E0E0E0',
              backgroundColor: '#fff',
              borderRadius: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/ArrowLeft.png')}
              style={{
                width: 8,
                height: 15,
              }}
            />
          </View>
        </TouchableOpacity>

        <View
          style={{
            height: '10%',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              color: '#161C1C',
              fontWeight: 'bold',
            }}>
        Verify it’s you
          </Text>
       
        </View>
        <Text
          style={{
            fontSize: 13,
            color: '#9B9B9B',
            fontWeight: 'normal',
          }}>
        We send a code to  {Phonenumber}
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: '#9B9B9B',
            fontWeight: 'normal',
          }}>
       Enter it here to verify your identity
        </Text>
      </View>

      <Image
        source={require('../../assets/Tree.png')}
        style={{
          position: 'absolute',
          right: 0,
          width: 180,
          height: 180,
          marginTop: 20,
        }}
      />
      <View
        style={{
          height: 10,
        }}
      />

      <View
      style={{
        width:"100%"
        , alignSelf:"center",
        alignItems:"center"
      }}
      >

<OTPTextView
  containerStyle={styles.textInputContainer}
  handleTextChange={(text) => setOtp(text)} // Update the OTP state
  inputCount={5}
  keyboardType="numeric"
  tintColor="#1BBFA0" // Set your custom color here
/>

        
      
      </View>
      <View
      style={{
        height:"4%"
      }}
      />
      <Text
      style={{
        fontSize:16, fontWeight:"bold", color:"#1BBFA0", textAlign:"center"
      }}
      >
Resend Code
      </Text>
      <View
      style={{
        height:"10%"
      }}
      />
      <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Access the OTP in the state (otp) and do something with it
            console.log('OTP entered:', otp);
          }}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View
        style={{
          height: 20,
        }}
      />
      


    </LinearGradient>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  flatListItem: {},
  imageStyle: {
    width: 24,
    height: 24,
  },
  textStyle: {
    color: '#161C1C',
    fontSize: 14,
    marginLeft: 10, // Adjust as needed
  },
  button: {
    width: '90%',
    height: 56,
    borderRadius: 16,
    alignSelf:"center",
    backgroundColor: '#1BBFA0',
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center', // Center content vertically
    marginTop: 20, // Adjust the margin as needed
  },
  buttonText: {
    color: 'white',
    fontSize: 16, // Adjust the font size as needed
    fontWeight: '600',
  },
  loginDescription: {
    fontSize: 13,
    color: '#1BBFA0',
    fontWeight: '600',
  },
});
