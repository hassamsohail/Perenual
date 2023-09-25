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
} from 'react-native';

import {Picker} from '@react-native-picker/picker';
export default function Humidity({navigation}) {
  const [selectedRadio4, setSelectedRadio4] = useState(2);

  const handleRadioSelect4 = index => {
    setSelectedRadio4(index);
  };

  const data4 = [
    {id: '1', title: '10 % - 20 %'},
    {id: '2', title: '20% - 40 %'},
    {id: '3', title: '40% - 60%'},
    {id: '4', title: 'More than 60%'},

  ];

  return (
    <View
      style={{
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
      }}>
      <View
        style={{
          height: 10,
        }}
      />
      <View
        style={{
          width: '100%',
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            zIndex: 10,
            left: 20,
          }}
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
        <View
          style={{
            height: 20,
          }}
        />
        <Text
          style={{
            fontSize: 16,
            color: '#161C1C',
            fontWeight: '500',
            textAlign: 'center',
          }}>
          Humidity
        </Text>

        <View
          style={{
            height: 20,
          }}
        />
        <View
          style={{
            width: '90%',
            height: 8,
            backgroundColor: '#E4E5E5',
            borderRadius: 100,
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: '75%',
              height: 8,
              backgroundColor: '#1BBFA0',
              borderRadius: 100,
            }}></View>
        </View>
        <View
          style={{
            height: 20,
          }}
        />
        <View
          style={{
            height: 262,
            width: '90%',
            alignSelf: 'center',
            borderWidth: 1,
            borderRadius: 12,
            borderColor: '#DEF2ED',
          }}>
          <View
            style={{
              height: 56,
              width: '100%',
              alignSelf: 'center',
              // borderWidth:1,
              borderTopLeftRadius: 12,

              borderTopRightRadius: 12,
              backgroundColor: '#DEF2ED',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/Haze.png')}
              style={{
                width: 24,
                marginLeft: 10,

                height: 24,
              }}
            />

            <Text
              style={{
                fontSize: 16,
                marginLeft: 10,
                color: '#161C1C',
                fontWeight: '500',
                textAlign: 'center',
              }}>
              Ideal Humidity
            </Text>
          </View>
          <View
            style={
              {
                //   height: 10,
              }
            }
          />
          <View
            style={{
              padding: 10,
            }}>
            <Text
              style={{
                fontSize: 12,
                //   marginLeft:10,
                color: '#9B9B9B',
                //   fontWeight: '500',
                //   textAlign: 'center',
              }}>
              60% - 40%: in summer, the air humidity in most homes is around
              this level, in which most indoor plants thrive. Some plants still
              need some help, for example by misting.
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  //   marginLeft:10,
                  color: '#555555',
                  fontWeight: '500',
                  //   textAlign: 'center',
                }}>
                Ideal Humidity : 60%
              </Text>
              <Image
                source={require('../../assets/Rain.png')}
                style={{
                  width: 150,
                  height: 118,
                  marginLeft: 20,
                }}
              />
            </View>
          </View>
        </View>
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
          <FlatList
            data={data4}
            style={{
              alignSelf: 'center',
            }}
            renderItem={({item, index}) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => handleRadioSelect4(index)}
                style={{
                  alignItems: 'center',
                  height: 38,
                  borderWidth: 1,
                  borderColor: selectedRadio4 === index ? '#1BBFA0' : '#F8F8F8',
                  borderRadius: 8,
                  backgroundColor: selectedRadio4 === index ? '#DEF2ED' : null,
                  marginRight: 10,
                  marginVertical: 5,
                  paddingHorizontal: 10,
                  borderStyle: 'dotted', // Add this line for a dotted border
                  justifyContent: 'center',
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: selectedRadio4 === index ? '#1BBFA0' : '#9B9B9B',
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

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Task');
          }}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 20,
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
