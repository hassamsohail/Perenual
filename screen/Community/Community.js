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
import ImagePicker from 'react-native-image-crop-picker';

import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';
export default function Community({navigation}) {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false); // Control the visibility of the bottom sheet
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [text, setText] = useState('');
  const [text1, setText1] = useState('');

  const handleChangeText = inputText => {
    setText(inputText);
  };
  const handleChangeText1 = inputText => {
    setText1(inputText);
  };
  const [imageUri, setImageUri] = useState('');

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dateOfBirth;
    setShowDatePicker(Platform.OS === 'ios'); // Show the date picker on iOS; on Android, it's automatic
    setDateOfBirth(currentDate);
  };
  const openBottomSheet = () => {
    setIsBottomSheetVisible(true);
  };
  const openImagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    })
      .then(image => {
        // The selected image is available in image.path
        setImageUri(image.path);
        setSelectedImageUri(image.path);
      })
      .catch(error => {
        console.log('ImagePicker Error: ', error);
      });
  };
  const closeBottomSheet = () => {
    setIsBottomSheetVisible(false);
  };
  const [indexofData, setindexofData] = useState(0);
  const data1 = [
    {
      key: '1',
      imageSource: require('../../assets/b1.png'),
      text: 'Transplanting plants in new pots',
    },
    {
      key: '2',
      imageSource: require('../../assets/b1.png'),
      text: 'Transplanting plants in new pots',
    },
    {
      key: '3',
      imageSource: require('../../assets/b1.png'),
      text: 'Transplanting plants in new pots',
    },
    // Add more items as needed
  ];

  const renderItem = ({item}) => (
    <View
      style={{
        height: 182,
        width: 180, // Adjust the width of each item as needed
        borderRadius: 16,
        elevation: 5,
        backgroundColor: '#fff',
        marginRight: 10,
        // marginHorizontal: 10, // Add margin between items
      }}>
      <Image
        source={item.imageSource}
        style={{
          width: '100%',
          height: 122,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
      />

      <Text
        style={{
          fontSize: 14,
          color: '#161C1C',
          padding: 10,
        }}>
        {item.text}
      </Text>
    </View>
  );
  const data = [
    {id: '1', label: 'Explore'},
    {id: '2', label: 'Ask a Question'},
  ];

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
              height: 20,
            }}
          />
          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              height: 43,
              backgroundColor: '#DEF2ED',
              borderRadius: 20,
              // flexDirection: 'row',
              alignItems: 'center',
              // paddingHorizontal: 5,
              // justifyContent: 'space-between',
            }}>
            <FlatList
              data={data}
              keyExtractor={item => item.id}
              horizontal={true}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() => setindexofData(index)}
                  style={{
                    justifyContent: 'center',
                    //   width: '40%',
                  }}>
                  <View
                    style={{
                      width: 150,
                      // marginLeft: 5,
                      height: 33,
                      backgroundColor: indexofData == index ? '#fff' : null,
                      borderRadius: 20,
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 14,

                        color: '#161C1C',
                        // fontWeight: 'bold',
                        alignSelf: 'center',

                        // marginLeft: 6,
                      }}>
                      {item.label}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          {indexofData == 0 ? (
            <View
              style={{
                width: '100%',
                height: '71%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#161C1C',
                    //   alignSelf: 'center',
                    fontWeight: '700',
                    marginTop: 10,
                  }}>
                  Watch & Learn
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#1BBFA0',
                    //   alignSelf: 'center',
                    fontWeight: '500',
                    marginTop: 10,
                  }}>
                  See All
                </Text>
              </View>

              <Video
                source={require('../../assets/vedio.mp4')} // Replace with the actual path to your local video file
                style={{
                  height: 200,
                  width: '100%',
                  borderRadius: 20,
                  marginTop: 20,
                }}
                resizeMode="cover"
                controls={true}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  alignItems: 'center',
                  marginBottom: 10,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#161C1C',
                    //   alignSelf: 'center',
                    fontWeight: '700',
                    marginTop: 10,
                  }}>
                  Plant Care
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#1BBFA0',
                    //   alignSelf: 'center',
                    fontWeight: '500',
                    marginTop: 10,
                  }}>
                  See All
                </Text>
              </View>

              <FlatList
                data={data1}
                renderItem={renderItem}
                keyExtractor={item => item.key}
                horizontal={true}
              />
            </View>
          ) : indexofData == 1 ? (
            <View
              style={{
                width: '100%',
                height: '71%',
              }}>
              <View
                style={{
                  width: '100%',
                  alignSelf: 'center',
                }}>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      // width:"100%",
                      flexDirection: 'row',
                      //  justifyContent:"space-between"
                    }}>
                    <Image
                      source={require('../../assets/user.png')}
                      style={{
                        width: 40,
                        height: 40,
                      }}
                    />

                    <View>
                      <Text
                        style={{
                          fontSize: 16,

                          color: '#161C1C',
                          fontWeight: 'bold',
                          // alignSelf: 'center',

                          marginLeft: 8,
                        }}>
                        Nguyen Perenual
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,

                          color: '#161C1C',
                          // fontWeight: 'bold',
                          // alignSelf: 'center',

                          marginLeft: 8,
                        }}>
                        4 hours ago
                      </Text>
                    </View>
                  </View>
                  <Image
                    source={require('../../assets/menu1.png')}
                    style={{
                      width: 15,
                      height: 25,
                    }}
                  />
                </View>
                <Image
                  source={require('../../assets/Ha.png')}
                  style={{
                    width: '100%',
                    alignSelf: 'center',
                    height: 200,
                    borderRadius: 16,
                    marginTop: 10,
                  }}
                />

                <View
                  style={{
                    flexDirection: 'row',
                    // justifyContent:"center",
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../../assets/Comment.png')}
                    style={{
                      width: 24,
                      // alignSelf:"center",
                      height: 24,
                      // borderRadius:16
                      marginTop: 10,
                    }}
                  />

                  <Text
                    style={{
                      fontSize: 14,

                      color: '#9B9B9B',
                      // fontWeight: 'bold',
                      // alignSelf: 'center',

                      marginLeft: 6,
                    }}>
                    2
                  </Text>
                  <Image
                    source={require('../../assets/Heart.png')}
                    style={{
                      width: 24,
                      // alignSelf:"center",
                      height: 24,
                      // borderRadius:16
                      marginTop: 10,
                      marginLeft: 9,
                    }}
                  />

                  <Text
                    style={{
                      fontSize: 14,

                      color: '#9B9B9B',

                      marginLeft: 6,
                    }}>
                    2
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 14,

                    color: '#161C1C',
                    fontWeight: 'bold',
                    // alignSelf: 'center',

                    // marginLeft: 6,
                    marginTop: 10,

                  }}>
                  Why my Silver Pothos leaves are dropping down
                </Text>
                <Text
                  style={{
                    fontSize: 12,

                    color: '#9B9B9B',
                    // fontWeight: 'bold',
                    // alignSelf: 'center',
                    marginTop: 10,

                    // marginLeft: 6,
                  }}>
                  These plants like to be mostly dry between waterings due to
                  their thick leaves. Water when 75% of the soil volume is dry.
                  Always water through and discard any excess water in the
                  saucer to discourage root rot. Your Silver Satin Pothos does
                  well in average household humidity.
                </Text>
              </View>
            </View>
          ) : null}
          <Modal
                transparent={true}
                visible={isBottomSheetVisible}
                animationType="slide"
                onRequestClose={closeBottomSheet}>
                <View style={styles.modalContainer}>
                  {/* Your bottom sheet content goes here */}
                  <View style={styles.bottomSheet}>
                    <View
                      style={{
                        width: '90%',
                        alignSelf: 'center',
                      }}>
                      <View
                        style={{
                          width: '100%',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          flexDirection: 'row',
                        }}>
                        <TouchableOpacity onPress={closeBottomSheet}>
                          <Text
                            style={{
                              color: '#9B9B9B',
                              fontSize: 16, // Adjust the font size as needed
                              fontWeight: '600',
                            }}>
                            Cancel
                          </Text>
                        </TouchableOpacity>

                        <Text
                          style={{
                            color: '#161C1C',
                            fontSize: 16, // Adjust the font size as needed
                            fontWeight: '600',
                          }}>
                           Ask Question
                        </Text>
                        <TouchableOpacity onPress={closeBottomSheet}>
                          <Text
                            style={{
                              color: '#1BBFA0',
                              fontSize: 16, // Adjust the font size as needed
                              fontWeight: '600',
                            }}>
                            Save
                          </Text>
                        </TouchableOpacity>
                      </View>

                      <View
                      style={{
                        height:20
                      }}
                      />
                      <TouchableOpacity
            onPress={openImagePicker}
            style={{
              height: 103,
              width: '100%',
              alignSelf: 'center',
              backgroundColor: '#DEF2ED',
              justifyContent: 'center',
              borderRadius:20,
              

            }}>
            {imageUri ? (
              <Image
                source={{uri: imageUri}}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius:20,


                }}
              />
            ) : (
              <View
                style={{
                  backgroundColor: '#DEF2ED',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  // borderRadius: 88,
                 
                  height: 103,
                  borderRadius:20,

                }}>
                <Image
                  source={require('../../assets/element.png')}
                  style={{
                    width: '90%',
                    // marginTop: 70,
                    borderRadius:20,
                    height: 90,
                  }}
                />
              </View>
            )}
          </TouchableOpacity>
                  

                      <TextInput
                        style={styles.textInput1}
                        placeholder="Question *"
                        placeholderTextColor="#A5A5A5"
                        value={text1}
                        onChangeText={handleChangeText1}
                      />


  <TextInput
                        style={styles.textInput}
                        placeholder="Tell us more"
                        placeholderTextColor="#A5A5A5"
                        value={text}
                        onChangeText={handleChangeText}
                      />

                    </View>
                  </View>
                </View>
              </Modal>
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: "13%", // Adjust the bottom value as needed
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
    width: '100%',
    height: 56,
    borderRadius: 16,
    alignSelf: 'center',
    backgroundColor: '#1BBFA0',
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center', // Center content vertically
    marginTop: 20, // Adjust the margin as needed
  },
  button1: {
    width: '100%',
    height: 56,
    borderRadius: 16,
    alignSelf: 'center',
    backgroundColor: '#DEF2ED',
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center', // Center content vertically
    marginTop: 20, // Adjust the margin as needed
  },
  buttonText: {
    color: 'white',
    fontSize: 16, // Adjust the font size as needed
    fontWeight: '600',
  },
  buttonText1: {
    color: '#1BBFA0',
    fontSize: 16, // Adjust the font size as needed
    fontWeight: '600',
  },
  loginDescription: {
    fontSize: 13,
    color: '#1BBFA0',
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    justifyContent: 'flex-end', // Modal appears at the bottom
  },
  bottomSheet: {
    backgroundColor: '#F8F8F8',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    alignItems: 'center',
    height: Dimensions.get('window').height * 0.9, // Adjust the height as needed
  },
  imagelogo: {
    alignSelf: 'center',
    width: 129,
    height: 36,
  },
  loginText: {
    fontSize: 24,
    color: '#312651',
    fontWeight: '600',
    marginBottom: 10,
  },
  loginDescription: {
    fontSize: 13,
    color: '#827F8A',
    fontWeight: '600',
  },
  loginDescription1: {
    fontSize: 15,
    color: '#312651',
    fontWeight: '600',
    marginTop: 20,
  },
  loginDescription2: {
    fontSize: 15,
    color: '#827F8A',
    fontWeight: 'normal',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#003399',
    marginRight: 10,
  },
  container: {
    height: 200,
    width: '90%',
    borderColor: '#76D9C6',
    borderWidth: 1,
  },
  textInput: {
    // borderColor: '#76D9C6',
    // borderWidth: 1,
    marginTop:20,
    // flex: 1,
    height: 130,
    width: '100%',
    padding: 10,
    borderRadius:16,
    color: 'black',
    backgroundColor:"#fff",

  },
  textInput1: {
 
    backgroundColor:"#fff",
    marginTop:20,
    // flex: 1,
    height: 56,
    width: '100%',
    padding: 10,
    borderRadius:16,
    color: 'black',
  },
  checkedCheckbox: {
    backgroundColor: '#003399',
  },
  loginButton: {
    backgroundColor: '#003399',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  nextButton: {
    alignItems: 'center',
    height: 55,
  },
  gradient: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});
