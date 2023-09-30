import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Modal,
  ScrollView,
  Dimensions,
  Image,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LinearGradient from 'react-native-linear-gradient';

export default function Reminder({navigation}) {
  const data5 = [
    {
      id: '1',
      name: 'Watering',

      image: require('../../assets/icon1.png'),
    },
    {
      id: '2',
      name: 'Fertilizer',

      image: require('../../assets/icon4.png'),
    },
    {
      id: '3',
      name: 'Pruneing',

      image: require('../../assets/P.png'),
    },

    // Add more data items as needed
  ];
  const handleRadioSelect4 = index => {
    setSelectedRadio4(index);
  };
  const [selectedRadio4, setSelectedRadio4] = useState(0);

  // Control the visibility of the bottom sheet
  const data4 = [
    {id: '1', title: 'MO', data:"17"},
    {id: '2', title: 'TU', data:"18"},
    {id: '3', title: 'WE', data:"19"},

    {id: '4', title: 'TH',data:"20"},
    {id: '5', title: 'FR',data:"21"},
    {id: '6', title: 'SA', data:"22"},
    {id: '7', title: 'SU',data:"23"},

    // Add more data as needed
  ];
  // Use the useEffect hook to check if the user has seen the survey screen before

  return (
    <View
      style={{
        flex: 1, // Set the flex to 1
        backgroundColor: 'white',
      }}>
      <LinearGradient
        colors={['rgba(222, 242, 237, 0.7)', '#fff']}
        style={{
          height: Dimensions.get('window').height,
        }}>
        <View
          style={{
            height: 10,
          }}
        />
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <View
              style={{
                height: 40,
                width: 40,

                justifyContent: 'center',
              }}>
              <Image
                source={require('../../assets/menu.png')}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            </View>
          </TouchableOpacity>

          <View
            style={{
              height: 20,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/Cloud.png')}
              style={{
                width: 24,
                height: 24,
              }}
            />

            <Text
              style={{
                fontSize: 15,
                color: '#161C1C',
                fontWeight: '700',
                marginLeft: 6,
              }}>
              Toronto, Partly cloudy 26°
            </Text>
          </View>

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
                marginRight: 6,
              }}>
              Good Morning
            </Text>
            <Image
              source={require('../../assets/Leaf.png')}
              style={{
                width: 15,
                height: 25,
              }}
            />
          </View>

          <View
            style={{
              height: 10,
            }}
          />
        </View>
        <View
          style={{
            // height: 80,
            alignSelf: 'center',
            width: '90%',
          }}>
          <FlatList
            data={data4}
            showsHorizontalScrollIndicator={false}
            horizontal={true} // Set horizontal to true
            renderItem={({item, index}) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => handleRadioSelect4(index)}
                style={{
                  // flexDirection: 'row',
                  alignItems: 'center',
                  width: 44,
                  marginLeft: 6,
                  // Adjust the width as needed
                  height: 70,
                  backgroundColor: '#fff',
                  elevation: 5,
                  borderWidth: 1,
                  // borderColor:
                  // selectedRadio4 === index ? '#1BBFA0' : '#DEF2ED',
                  borderRadius: 20,
                  // backgroundColor:
                  // selectedRadio4 === index ? '#DEF2ED' : '#fff',
                  marginRight: 10,
                  borderColor: selectedRadio4 === index ? '#1BBFA0' : '#fff',
                  marginVertical: 5,
                  paddingHorizontal: 10,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: selectedRadio4 === index ? 12 : 12,
                    color: selectedRadio4 === index ? '#1BBFA0' : '#9B9B9B',
                    fontWeight: '600',
                  }}>
                  {item.title}
                </Text>
                <View
                  style={{
                    marginTop: 10,
                    height: 32,
                    width: 32,
                    borderRadius: 32,
                    backgroundColor:
                      selectedRadio4 === index ? '#1BBFA0' : '#DEF2ED',

                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: selectedRadio4 === index ? 12 : 12,
                      color: selectedRadio4 === index ? '#fff' : '#9B9B9B',

                      fontWeight: '600',
                    }}>
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View
          style={{
            height: 20,
          }}
        />
        <FlatList
          data={data5}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View
              style={{
                marginBottom: 10,
                width: '90%',
                alignSelf: 'center',
                paddingLeft: 10,
                alignItems: 'center',
                flexDirection: 'row',
                height: 77,
                borderWidth: 1,
                borderColor: '#EBEBEB',
                backgroundColor: '#fff',
                borderRadius: 16,
              }}>
              <View
                style={{
                  width: '15%',
                }}>
                <Image
                  source={item.image}
                  style={{
                    height: 32,
                    width: 32,
                  }}
                />
              </View>

              <View>
                <View
                  style={{
                    width: '70%',
                    // marginLeft: -10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      // marginLeft: 10,
                      fontSize: 16,
                      fontWeight: '600',
                      color: '#161C1C',
                    }}>
                    {item.name}
                  </Text>

                  <Image
                    source={require('../../assets/right.png')}
                    style={{
                      width: 24,
                      height: 24,
                    }}
                  />
                </View>
              </View>
            </View>
          )}
        />
      </LinearGradient>
    </View>
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
    // marginLeft: 10, // Adjust as needed
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

  input: {
    // borderWidth: 1,
    borderColor: '#FFB800',
    borderRadius: 5,
    // padding: 10,
    //   margin: 10,

    // height: 53,
    height: 44,

    width: '100%',
    marginLeft: 5,
    color: '#000000',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    justifyContent: 'flex-end', // Modal appears at the bottom
  },
  bottomSheet: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    alignItems: 'center',
    height: Dimensions.get('window').height * 0.3, // Adjust the height as needed
  },
});
