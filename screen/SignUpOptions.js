import React from 'react';
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

export default function SignUpOptions({navigation}) {
  const data = [
    {
      id: '1',
      text: 'Sign up with Google',
      imageSource: require('../assets/GoogleS.png'),
      backgroundColor: '#fff',
      borderColor: '#313638',
      color: '#161C1C',
    },
    {
      id: '2',
      text: 'Sign up with Apple account',
      imageSource: require('../assets/AppleS.png'),
      backgroundColor: '#fff',
      borderColor: '#313638',
      color: '#161C1C',
    },
    {
      id: '3',
      text: 'Sign up with Facebook',
      imageSource: require('../assets/FacebookS.png'),
      backgroundColor: '#fff',
      borderColor: '#313638',
      color: '#161C1C',
    },
    {
      id: '4',
      text: 'Sign up with mobile phone number',
      imageSource: require('../assets/MessageS.png'),
      backgroundColor: '#fff',
      borderColor: '#313638',
      color: '#161C1C',
    },
    {
      id: '5',
      text: 'Sign up with email',
      imageSource: require('../assets/MailS.png'),
      backgroundColor: '#1BBFA0',
      borderColor: '#1BBFA0',
      color: '#fff',
    },
  ];
    const handleItemPress = (item) => {
    // Handle item press based on item's id or other unique identifier
    if (item.id === '1') {
      // Navigate to the Google sign-up screen
    //   navigation.navigate('GoogleSignUp');
    } else if (item.id === '2') {
      // Navigate to the Apple sign-up screen
    //   navigation.navigate('AppleSignUp');
    }
    else if (item.id === '3') {
        // Navigate to the Apple sign-up screen
        // navigation.navigate('AppleSignUp');
      }
      else if (item.id === '4') {
        // Navigate to the Apple sign-up screen
        navigation.navigate('SignUpPhone');
      }
      else if (item.id === '5') {
        // Navigate to the Apple sign-up screen
        navigation.navigate('SignUp');
      }
    // Add more navigation logic for other items
  };
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{
        width: '90%',
        height: 56,
        backgroundColor: item.backgroundColor,
        borderWidth: 1,
        borderColor: item.borderColor,
        borderRadius: 16,
        alignSelf: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        marginBottom: 10,
      }}
      onPress={() => handleItemPress(item)}
      >
      <Image source={item.imageSource} style={styles.imageStyle} />
      <Text
        style={{
          color: item.color,
          fontSize: 14,
          marginLeft: 10,
        }}>
        {item.text}
      </Text>
    </TouchableOpacity>
  );
  return (
    // <ScrollView>
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
              source={require('../assets/ArrowLeft.png')}
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
            Create a
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: '#1BBFA0',
              fontWeight: 'bold',
              marginLeft: 10,
            }}>
            Perenual
          </Text>
        </View>
        <Text
          style={{
            fontSize: 20,
            color: '#161C1C',
            fontWeight: 'bold',
          }}>
          account
        </Text>
      </View>

      <Image
        source={require('../assets/Tree.png')}
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
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View
      style={{
        position:"absolute",
        bottom:50, 
        alignSelf:"center"
      }}
      >

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <View
          style={{
            flexDirection: 'row',
            // alignItems:"center",
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontSize: 15,
              color: '#827F8A',
              fontWeight: 'normal',
              textAlign: 'center',
            }}>
           Already have an account?
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: '#1BBFA0',
              marginLeft: 5,
              fontWeight: '700',
              textAlign: 'center',
            }}>
           Sign in
          </Text>
        </View>
      </TouchableOpacity>
      </View>

    </LinearGradient>
    // </ScrollView>
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
});
