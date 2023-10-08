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

export default function Mainscreen({navigation}) {
  const [hasSeenSurvey, setHasSeenSurvey] = useState(false);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false); // Control the visibility of the bottom sheet

  // Use the useEffect hook to check if the user has seen the survey screen before
  useEffect(() => {
    // Check if the user has seen the survey in AsyncStorage
    AsyncStorage.getItem('hasSeenSurvey').then(value => {
      if (value === 'true') {
        setHasSeenSurvey(true);
      }
    });
  }, []);

  // Use the useEffect hook to navigate to the "Survey" screen after 10 seconds
  useEffect(() => {
    if (!hasSeenSurvey) {
      const timer = setTimeout(() => {
        navigation.navigate('Survey'); // Replace 'Survey' with the actual screen name
        setHasSeenSurvey(true);

        // Store in AsyncStorage that the user has seen the survey
        AsyncStorage.setItem('hasSeenSurvey', 'true');
      }, 10000); // 10000 milliseconds (10 seconds)

      // Clear the timer if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [navigation, hasSeenSurvey]);

  const openBottomSheet = () => {
    setIsBottomSheetVisible(true);
  };

  const closeBottomSheet = () => {
    setIsBottomSheetVisible(false);
  };
  const closeBottomSheetOnBackgroundPress = () => {
    // Close the bottom sheet when the black blur background is pressed
    if (isBottomSheetVisible) {
      closeBottomSheet();
    }
  };
  const [Phonenumber, setPhonenumber] = React.useState();
  const [search, setsearch] = React.useState();
  const plantData = [
    {
      id: '1',
      image: require('../../assets/Plant1.png'),
      location: 'Office',
      name: "Bird's Aspleniaceae",
      nextWatering: 'Next: water on Aug 12',
    },
    {
      id: '2',
      image: require('../../assets/Plant2.png'),
      location: 'Balcony',
      name: "Bird's Aspleniaceae",
      OverdueWatering: 'Overdue: water on Aug 1',
    },
    {
      id: '3',
      image: require('../../assets/Plant1.png'),
      location: 'Office',
      name: "Bird's Aspleniaceae",
      nextWatering: 'Next: water on Aug 12',
    },
    // Add more plant data objects as needed
  ];

  const renderPlantItem = ({item}) => {
    const textColor = item.nextWatering ? '#1BBFA0' : '#E74C3C';

    return (
      <TouchableOpacity
      
      onPress={()=>{

        navigation.navigate("PlantDetail")
      }}
      >

      <View
        style={{
          flexDirection: 'row',
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
                fontSize: 14,
                color: '#161C1C',
              }}>
              {item.location}
            </Text>
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
                color: textColor, // Use the textColor variable
              }}>
              {item.nextWatering || item.OverdueWatering}
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
              width: '100%',
              alignSelf: 'center',
              marginTop: 20,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: '100%',
                borderWidth: 1,
                borderColor: '#E0E0E0',
                height: 56,
                backgroundColor: '#fff',
                borderRadius: 16,
                paddingLeft: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/Search.png')}
                style={{
                  width: 18,
                  height: 18,
                }}></Image>
              <TextInput
                style={styles.input}
                onChangeText={text => setsearch(text)}
                placeholderTextColor="#969696"
                value={search}
                placeholder="Search my plants"
                autocorrect={false}
                autoCapitalize="none"
              />
            </View>
          </View>
          <View
            style={{
              height: 10,
            }}
          />

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
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 64, // Adjust the bottom value as needed
            // Adjust the bottom value as needed
            right: '5%',
          }}
          onPress={openBottomSheet}
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

        <Modal
          transparent={true}
          visible={isBottomSheetVisible}
          animationType="slide"
          onRequestClose={closeBottomSheet}>
             <TouchableWithoutFeedback onPress={closeBottomSheetOnBackgroundPress}>

          <View style={styles.modalContainer}>
            {/* Your bottom sheet content goes here */}
            <View style={styles.bottomSheet}>
              <Image
                source={require('../../assets/icon.png')}
                style={{
                  height: 88,
                  width: 88,
                  marginTop: -50,
                }}
              />
              <Text
                style={{
                  fontSize: 20,
                  color: '#161C1C',
                  alignSelf: 'center',
                  fontWeight: '600',
                  // marginTop: 10,
                }}>
                Identify Plant
              </Text>
              <TouchableOpacity onPress={closeBottomSheet}>
                <Text
                style={{
                  color:"#000000"
                }}
                >Close</Text>
              </TouchableOpacity>

              <View
                style={{
                  marginTop: 20,
                  flexDirection: 'row',
                  // justifyContent:"space-between",
                  justifyContent: 'space-around',
                  width: '100%',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    width: '45%',
                    height: 56,
                  }}
                  onPress={() => {
                    navigation.navigate('SearchToAdd');
                    closeBottomSheet();
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      backgroundColor: '#1BBFA0',
                      justifyContent: 'center',
                      // justifyContent:"space-between",
                      alignItems: 'center',
                      width: '100%',
                      height: 56,
                      borderRadius: 16,
                    }}>
                    <Image
                      source={require('../../assets/S.png')}
                      style={{
                        height: 24,
                        width: 24,
                        marginRight: 8,
                      }}
                    />

                    <Text
                      style={{
                        fontSize: 14,
                        color: '#fff',
                        // alignSelf: 'center',
                        // fontWeight:"600"
                        // marginTop: 10,
                      }}>
                      Search to add
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ScanToAdd');
                    closeBottomSheet();
                  }}
                  style={{
                    width: '45%',
                    height: 56,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      backgroundColor: '#1BBFA0',
                      justifyContent: 'center',
                      // justifyContent:"space-between",
                      alignItems: 'center',
                      width: '100%',
                      height: 56,
                      borderRadius: 16,
                    }}>
                    <Image
                      source={require('../../assets/scan.png')}
                      style={{
                        height: 24,
                        width: 24,
                        marginRight: 8,
                      }}
                    />

                    <Text
                      style={{
                        fontSize: 14,
                        color: '#fff',
                        // alignSelf: 'center',
                        // fontWeight:"600"
                        // marginTop: 10,
                      }}>
                      Scan to add
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          </TouchableWithoutFeedback>

        </Modal>
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
