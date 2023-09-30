import React, {useState, useEffect} from 'react';
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

export default function Subscription({navigation}) {
  const data = [
    {
      id: '1',
      text: 'No ads',
      text1: 'Caring with no interruptions',
      imageSource: require('../../assets/Noads.png'),
      backgroundColor: '#fff',
      borderbottomwidth: '#E0E0E0',
    },
    {
      id: '2',
      text: 'Unlimited Plants',
      text1: 'Never worry about too much plants ',

      imageSource: require('../../assets/Unlimited.png'),
      borderbottomwidth: '#E0E0E0',
    },
    {
      id: '3',
      text: 'Auto Routines',
      imageSource: require('../../assets/Route.png'),
      text1:
        'Scheduling and estimate nutritions automatically based on plants’ development   ',

      borderbottomwidth: '#E0E0E0',
    },
    {
      id: '4',
      text: 'Cancel Anytime',
      imageSource: require('../../assets/Cancel.png'),
      borderbottomwidth: '#E0E0E0',
      text1: 'Cancel your subscription anytime - no penalties or fee',
    },
  ];

  const renderItem = ({item}) => (
    <View
      style={{
        width: '100%',
        height: 56,
        backgroundColor: '#fff',

        borderBottomWidth: 1,
        borderBottomColor: item.borderbottomwidth,
        borderRadius: 16,
        alignSelf: 'center',
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center',
        // marginBottom: 10,
      }}
      onPress={() => handleItemPress(item)}>
      <Image source={item.imageSource} style={styles.imageStyle} />
      <View>
        <Text
          style={{
            color: '#161C1C',
            fontSize: 16,
            fontWeight: '500',
            marginLeft: 10,
          }}>
          {item.text}
        </Text>
        <Text
          style={{
            color: '#555555',
            fontSize: 11,

            marginLeft: 10,
          }}>
          {item.text1}
        </Text>
      </View>
    </View>
  );
  return (
    <ScrollView
    contentContainerStyle={{
      flexGrow: 1,
     
    }}>
    <LinearGradient
      colors={['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 1)']}
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
          onPress={() => {
            navigation.goBack();
          }}>
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
      </View>
      <View style={{height: 20}} />
      <Image
        source={require('../../assets/Subscription.png')}
        style={{
          width: '100%',
          height: 260,
          marginTop: -50,
        }}
      />

      <Text
        style={{
          fontSize: 18,
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: -30,
          color: '#1BBFA0',
        }}>
        GET UNLIMITED ACCESS
      </Text>
      <Text
        style={{
          fontSize: 15,
          textAlign: 'center',
          marginTop: 10,

          color: '#161C1C',
        }}>
        More productivities on your caring routines
      </Text>

      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          marginTop: 20,
        }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        // onPress={() => navigation.navigate("Tab")}
      >
        <Text style={styles.buttonText}>Try Pro For Free</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button1}
        // onPress={() => navigation.navigate("")}
        onPress={() => navigation.navigate('Tab')}>
        <Text style={styles.buttonText1}>Skip</Text>
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
    width: 32,
    height: 32,
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
    alignSelf: 'center',
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
  button1: {
    width: '90%',
    height: 56,
    borderRadius: 16,
    alignSelf: 'center',
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
});
