import { View, Text, ScrollView, Dimensions, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

export default function LoginSignUp() {
  return (
    <ScrollView>
      <View
        style={{
          height: Dimensions.get('window').height,
          backgroundColor: 'white',
          alignItems: 'center', // Center align content vertically
        }}>
        <Image
          source={require('../assets/LoginSignUp.png')}
          style={{
            width: '100%',
            height: '47.5%',
            marginBottom: 20,
          }}
          resizeMode="cover"
        />

        <View style={{ height: 5 }} />
        <Text style={styles.title}>Welcome</Text>

        <View style={{ height: 5 }} />
        <Text style={styles.description}>Create an account and Start growing your favorite plants</Text>
        <View style={{ height: 5 }} />

        <TouchableOpacity style={styles.button} onPress={() => console.log('Button pressed')}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={() => console.log('Button pressed')}>
          <Text style={styles.buttonText1}>Sign Up</Text>
        </TouchableOpacity>
        <View style={{height: 20}} />

<View
  style={{
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: 'center',
  }}>
  <View
    style={{
      height: 1,
      width: '25%',
      backgroundColor: '#D9D6DF',
    }}
  />
  <View
  style={{
    width:"7%"
  }}
  />
  <Text style={styles.loginDescription}>Or sign in with</Text>
  <View
  style={{
    width:"7%"
  }}
  />
  <View
    style={{
      height: 1,
      width: '25%',
      backgroundColor: '#D9D6DF',
    }}
  />
</View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#1BBFA0',
    marginBottom: 10,
    paddingHorizontal: 30,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: '#161C1C',
    textAlign: 'center',
    paddingHorizontal: 50,
  },
  button: {
    width: '90%',
    height: 56,
    borderRadius: 16,
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
  button1: {
    width: '90%',
    height: 56,
    borderRadius: 16,
    // backgroundColor: '#1BBFA0',
    borderWidth:1, borderColor:"#1BBFA0",
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center', // Center content vertically
    marginTop: 20, // Adjust the margin as needed
  },
  buttonText1: {
    color: '#1BBFA0',
    fontSize: 16, // Adjust the font size as needed
    fontWeight: '600',
  },
  loginDescription: {
    fontSize: 13,
    color: '#827F8A',
    fontWeight: '600',
  },
});
