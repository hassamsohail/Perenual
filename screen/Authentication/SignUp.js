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
import FormInput from "../../Components/FormInput";

export default function SignUp({navigation}) {
    const [username, setuserName] = React.useState();
    const [FullName, setFullName] = React.useState();

    const [password, setPassword] = React.useState();
  const data = [
    {
      id: '1',
      text: 'Sign up with Google',
      imageSource: require('../../assets/GoogleS.png'),
      backgroundColor: '#fff',
      borderColor: '#313638',
      color: '#161C1C',
    },
    {
      id: '2',
      text: 'Sign up with Apple account',
      imageSource: require('../../assets/AppleS.png'),
      backgroundColor: '#fff',
      borderColor: '#313638',
      color: '#161C1C',
    },
    {
      id: '3',
      text: 'Sign up with Facebook',
      imageSource: require('../../assets/FacebookS.png'),
      backgroundColor: '#fff',
      borderColor: '#313638',
      color: '#161C1C',
    },
    {
      id: '4',
      text: 'Sign up with mobile phone number',
      imageSource: require('../../assets/MessageS.png'),
      backgroundColor: '#fff',
      borderColor: '#313638',
      color: '#161C1C',
    },
    {
      id: '5',
      text: 'Sign up with email',
      imageSource: require('../../assets/MailS.png'),
      backgroundColor: '#1BBFA0',
      borderColor: '#1BBFA0',
      color: '#fff',
    },
  ];
  const data1 = [
    {
      id: '1',
      image: require('../../assets/Facebook.png'),
    },
    {
      id: '2',
      image: require('../../assets/Apple.png'),
    },
    {
      id: '3',
      image: require('../../assets/google.png'),
    },
    {
      id: '4',
      image: require('../../assets/message.png'),
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
        }}
      />

      <View
      style={{
        width:"90%"
        , alignSelf:"center",
        alignItems:"center"
      }}
      >

       <FormInput
          // style={styles.input}
          onChangeText={(username) => setuserName(username)}
          // value={text}
          labelValue={username}
          // secureTextEntry={true}
          // keyboardType="email-address"
          placeholder="Full Name"
          autoCapitalize="none"
          autocorrect={false}
        />
        
       <FormInput
          // style={styles.input}
          onChangeText={(FullName) => setFullName(FullName)}
          // value={text}
          labelValue={FullName}
          // secureTextEntry={true}
          // keyboardType="email-address"
          placeholder="Email"
          autoCapitalize="none"
          autocorrect={false}
        />
         <FormInput
          // style={styles.input}
          onChangeText={(userPassword) => setPassword(userPassword)}
          // value={text}
          labelValue={password}
          secureTextEntry={true}
          placeholder="Password"
        />
      </View>
      <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Tab');
          }}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View
        style={{
          height: 20,
        }}
      />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width:"90%",
            alignSelf:"center"
          }}>
          <View
            style={{
              height: 1,
              width: '30%',
              backgroundColor: '#D9D6DF',
            }}
          />
          <View
            style={{
              width: '7%',
            }}
          />
          <Text style={styles.loginDescription}>Or sign up with</Text>
          <View
            style={{
              width: '7%',
            }}
          />
          <View
            style={{
              height: 1,
              width: '30%',
              backgroundColor: '#D9D6DF',
            }}
          />
        </View>
        <View style={{height: 20}} />

<View
  style={{
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf:"center"
  }}>
  <FlatList
    data={data1}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    horizontal={true} // Set horizontal to true
  />
</View>
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
