import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function LoginSignUp({navigation}) {
  const data = [
    {
      id: '1',
      image: require('../assets/Facebook.png'),
    },
    {
      id: '2',
      image: require('../assets/Apple.png'),
    },
    {
      id: '3',
      image: require('../assets/google.png'),
    },
    {
      id: '4',
      image: require('../assets/message.png'),
    },
    // Add more data items as needed
  ];
  const renderItem = ({item}) => (
    <View
      style={{
        marginLeft: 20,
      }}>
      <TouchableOpacity>
        <Image
          source={item.image}
          style={{
            width: 48,
            height: 48,
          }}
        />
      </TouchableOpacity>
    </View>
  );
  return (
    <ScrollView>
      <View
        style={{
          height: windowHeight, // Set the height to the window height
          backgroundColor: '#F8F8F8',
          alignItems: 'center', // Center align content vertically
        }}>
        <Image
          source={require('../assets/LoginSignUp.png')}
          style={{
            width: '100%',
            height: (windowHeight * 47.5) / 100, // Make the height responsive
            marginBottom: 8,
          }}
          resizeMode="cover"
        />

        <View style={{height: 5}} />
        <Text style={styles.title}>Welcome</Text>

        <View style={{height: 5}} />
        <Text style={styles.description}>
          Create an account and Start growing your favorite plants
        </Text>
        <View style={{height: 5}} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('Button pressed')}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.navigate("SignUpOptions")}>
          <Text style={styles.buttonText1}>Sign Up</Text>
        </TouchableOpacity>
        <View style={{height: 15}} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
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
              width: '7%',
            }}
          />
          <Text style={styles.loginDescription}>Or sign in with</Text>
          <View
            style={{
              width: '7%',
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
        <View style={{height: 15}} />

        <View
          style={{
            width: '80%',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true} // Set horizontal to true
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
    textAlign: 'center',
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
    borderWidth: 1,
    borderColor: '#1BBFA0',
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
