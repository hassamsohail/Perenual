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

export default function MyPlants({navigation}) {
  const plantData = [
    {
      id: '1',
      image: require('../../assets/Plant1.png'),
      location: 'Asplenium nidus',
      name: "Bird's Aspleniaceae",
      nextWatering: 'Next: water on Aug 12',
    },
    {
      id: '2',
      image: require('../../assets/Plant2.png'),
      location: 'Asplenium nidus',
      name: "Bird's Aspleniaceae",
      OverdueWatering: 'Overdue: water on Aug 1',
    },
 
    // Add more plant data objects as needed
  ];

  const renderPlantItem = ({item}) => {
    const textColor = item.nextWatering ? '#1BBFA0' : '#E74C3C';

    return (
      <TouchableOpacity
      onPress={()=>{
        navigation.navigate("Plantsdetail2")
      }}
      
      >

      <View
        style={{
          flexDirection: 'row',
          marginTop:20,
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16, // Add margin between items
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={item.image}
            style={{
              width: 80,
              height: 80,
            }}
          />

          <View
            style={{
              marginLeft: 10,
            }}>
           
            <Text
              style={{
                fontSize: 16,
                color: '#161C1C',
                fontWeight: '500',
              }}>
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#9B9B9B',
              }}>
              {item.location}
            </Text>
          </View>
        </View>
        <Image
          source={require('../../assets/menu1.png')} // You can replace this with the correct source
          style={{
            width: 24,
            height: 24,
          }}
        />
      </View>
      </TouchableOpacity>

    );
  };
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
            onPress={()=>{
              navigation.navigate("Profile")
          }}
          >
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

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('');
            }}>
               <Image
                source={require('../../assets/plus.png')}
                style={{
                  width: 24,
                  height: 24,
                  marginRight:10
                }}
              />
            <Text style={styles.buttonText}>Create Space</Text>
          </TouchableOpacity>
          <View
              style={{
                width: '100%',
                marginTop: 20,
                height: 108,
                alignSelf: 'center',
                borderWidth: 1,
                borderColor: '#DEF2ED',
                borderRadius: 16,
                flexDirection: 'row',
                // justifyContent:"center",
                backgroundColor:"#FFFFFF",
                paddingHorizontal: 10,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 92,
                  // marginTop:20,
                  // backgroundColor:"#DEF2ED",
                  height: 92,
                  alignSelf: 'center',
                  borderWidth: 1,
                  borderColor: '#DEF2ED',
                  borderRadius: 16,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: 40,
                    width: '90%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={require('../../assets/A.png')}
                    style={{
                      height: 38,
                      width: 38,
                      borderRadius: 8,
                    }}></Image>
                  <Image
                    source={require('../../assets/A.png')}
                    style={{
                      height: 38,
                      width: 38,
                      borderRadius: 8,
                    }}></Image>
                </View>
                <View
                  style={{
                    height: 40,
                    width: '94%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={require('../../assets/A.png')}
                    style={{
                      height: 38,
                      width: 38,
                      borderRadius: 8,
                    }}></Image>
                  <Image
                    source={require('../../assets/A.png')}
                    style={{
                      height: 38,
                      width: 38,
                      borderRadius: 8,
                    }}></Image>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 16,
                    color: '#161C1C',
                    // alignSelf: 'center',
                    fontWeight: '600',
                    // textAlign:"center"
                    // marginTop: 10,
                  }}>
                  Dining room
                </Text>
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 12,
                    color: '#9B9B9B',
                    // alignSelf: 'center',
                    fontWeight: '600',
                    // textAlign:"center"
                    // marginTop: 10,
                  }}>
                  4 plant (1 need care)
                </Text>
              </View>
            </View>
            <Text
                  style={{
                    // marginLeft: 10,
                    fontSize: 16,
                    color: '#161C1C',
                    // alignSelf: 'center',
                    fontWeight: '600',
                    // textAlign:"center"
                    marginTop: 10,
                  }}>
                  All Plants
                </Text>
                {plantData.length > 0 ? (
            <FlatList
              data={plantData}
              keyExtractor={item => item.id}
              renderItem={renderPlantItem}
            />
          ) : (
            <View
              style={{
                alignSelf: 'center',
              }}>
              <Image
                source={require('../../assets/NotFounded.png')}
                style={{
                  width: 335,
                  height: 311,
                }}></Image>
              <Text
                style={{
                  fontSize: 16,
                  color: '#161C1C',
                  alignSelf: 'center',
                  textAlign: 'center',
                  marginTop: 20,
                }}>
                You have no plant to care. Add your first plant to start follow
                its care and grow.
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#1BBFA0',
                  alignSelf: 'center',
                  marginTop: 10,
                }}>
                Tap + to add your plants
              </Text>
            </View>
          )}
        </View>
        {/* Floating button  */}
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: "13%", // Adjust the bottom value as needed
            // Adjust the bottom value as needed
            right: '5%',
          }}
          // onPress={}
          
          >
          <View
            style={{
              height: 48,
              width: 48,
              borderRadius: 48,
              backgroundColor: '#1BBFA0',
              justifyContent: 'center',
              alignItems: 'center',
              // Adjust the right value as needed
              elevation: 1, // Add elevation for shadow (Android)
              shadowColor: '#1BBFA0', // Add shadow (iOS)
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.8,

              shadowRadius: 2,
            }}>
            <Image
              source={require('../../assets/Add.png')}
              style={{
                width: 18,
                height: 18,
              }}
            />
          </View>
        </TouchableOpacity>

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
    width: '100%',
    height: 56,
    borderRadius: 16,
    flexDirection:"row",
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
