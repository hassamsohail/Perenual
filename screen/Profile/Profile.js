import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Switch,
  StyleSheet,
  Dimensions,
  Modal,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';

export default function Profile({navigation}) {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const toggleSwitch = () => {
    setIsSwitchOn(previousState => !previousState);
  };
  const [text, setText] = useState('Nguyen Perenual');
  const [text1, setText1] = useState('Northern Toronto');
  const [text2, setText2] = useState('Nguyen@gmail.com');

  const handleChangeText = inputText => {
    setText(inputText);
  };
  const handleChangeText1 = inputText => {
    setText1(inputText);
  };
  const handleChangeText2 = inputText => {
    setText2(inputText);
  };
  const [isSwitchOn1, setIsSwitchOn1] = useState(false);

  const toggleSwitch1 = () => {
    setIsSwitchOn1(previousState => !previousState);
  };
  const [imageUri, setImageUri] = useState('');
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false); // Control the visibility of the bottom sheet

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
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
      }}>
      <View
        style={{
          height: 20,
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
        <TouchableOpacity
          style={{
            position: 'absolute',
            zIndex: 10,
            right: 20,
          }}
          onPress={openBottomSheet}>
          <View
            style={{
              height: 40,
              width: 40,
              // borderWidth: 1,
              elevation: 3,
              borderColor: '#E0E0E0',
              backgroundColor: '#fff',
              borderRadius: 12,
              justifyContent: 'center',

              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/editt.png')}
              style={{
                width: 24,
                height: 24,
              }}
            />
          </View>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 16,
            color: '#161C1C',
            fontWeight: '500',
            textAlign: 'center',
            marginTop: 10,
          }}>
          Setting
        </Text>
        <TouchableOpacity
        // onPress={openBottomSheet}
        >
          <Image
            style={{
              height: 80,
              width: 80,
              alignSelf: 'center',
              marginTop: 10,
            }}
            source={require('../../assets/user.png')}></Image>
        </TouchableOpacity>
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
                    My account
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
                    height: 20,
                  }}
                />
                <TouchableOpacity
                  onPress={openImagePicker}
                  style={{
                    height: 80,
                    width: 80,
                    alignSelf: 'center',
                    backgroundColor: '#DEF2ED',
                    justifyContent: 'center',
                    borderRadius: 80,
                  }}>
                  {imageUri ? (
                    <Image
                      source={{uri: imageUri}}
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: 80,
                      }}
                    />
                  ) : (
                    <View
                      style={{
                        backgroundColor: '#DEF2ED',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 80,
                        // borderRadius: 88,

                        height: 80,
                        borderRadius: 80,
                      }}>
                      <Image
                        source={require('../../assets/user.png')}
                        style={{
                          width: 80,
                          // marginTop: 70,
                          borderRadius: 80,
                          height: 80,
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
                  style={styles.textInput1}
                  placeholder="Question *"
                  placeholderTextColor="#A5A5A5"
                  value={text}
                  onChangeText={handleChangeText}
                />

                <TextInput
                  style={styles.textInput1}
                  placeholder="Question *"
                  placeholderTextColor="#A5A5A5"
                  value={text2}
                  onChangeText={handleChangeText2}
                />
              </View>
            </View>
          </View>
        </Modal>
        <Text
          style={{
            fontSize: 14,
            color: '#161C1C',
            fontWeight: '700',
            alignSelf: 'center',
            // marginLeft: 6,
          }}>
          Nguyen Perenual
        </Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ProfileSubscription');
          }}>
          <Image
            style={{
              height: 75,
              width: '90%',
              borderRadius: 16,
              alignSelf: 'center',
              marginTop: 10,
            }}
            source={require('../../assets/subscribe.png')}></Image>
        </TouchableOpacity>

        <View
          style={{
            width: '90%',

            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#161C1C',
              fontWeight: '700',
              // alignSelf:"center"
              marginTop: 6,
            }}>
            General Info
          </Text>
          <View
            style={{
              height: 10,
            }}
          />
          <View
            style={{
              width: '100%',
              height: 96,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
              paddingHorizontal: 20,

              backgroundColor: '#fff',
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                width: '100%',
                height: 47,
                // borderRadius:20,
                // justifyContent:"center",
                alignItems: 'center',
                // justifyContent:"space-between",
                backgroundColor: '#fff',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  height: 47,
                  // borderRadius:20,
                  // justifyContent:"center",
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#fff',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    // width:"100%",
                    // height:47,
                    // borderRadius:20,
                    // justifyContent:"space-between",
                    // backgroundColor:"#fff"
                  }}>
                  <Image
                    style={{
                      height: 24,
                      width: 24,
                    }}
                    source={require('../../assets/location.png')}></Image>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#000000',
                      // fontWeight: '700',
                      // alignSelf:"center"
                      marginLeft: 9,
                    }}>
                    Location
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#9B9B9B',
                    // fontWeight: '700',
                    // alignSelf:"center"
                    marginTop: 10,
                  }}>
                  Northern Toronto
                </Text>
              </View>
            </TouchableOpacity>

            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: '#ECECEC',
              }}
            />
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                width: '100%',
                height: 47,
                // borderRadius:20,
                // justifyContent:"center",
                alignItems: 'center',
                // justifyContent:"space-between",
                backgroundColor: '#fff',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  height: 47,
                  // borderRadius:20,
                  // justifyContent:"center",
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#fff',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    // width:"100%",
                    // height:47,
                    // borderRadius:20,
                    // justifyContent:"space-between",
                    // backgroundColor:"#fff"
                  }}>
                  <Image
                    style={{
                      height: 24,
                      width: 24,
                    }}
                    source={require('../../assets/earth.png')}></Image>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#000000',
                      // fontWeight: '700',
                      // alignSelf:"center"
                      marginLeft: 9,
                    }}>
                    Climate
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#9B9B9B',
                    // fontWeight: '700',
                    // alignSelf:"center"
                    marginTop: 10,
                  }}>
                  Customization
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 16,
              color: '#161C1C',
              fontWeight: '700',
              // alignSelf:"center"
              marginTop: 6,
            }}>
            Notification
          </Text>
          <View
            style={{
              height: 10,
            }}
          />
          <View
            style={{
              width: '100%',
              height: 96,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
              paddingHorizontal: 20,

              backgroundColor: '#fff',
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                height: 47,
                // borderRadius:20,
                // justifyContent:"center",
                alignItems: 'center',
                // justifyContent:"space-between",
                backgroundColor: '#fff',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  height: 47,
                  // borderRadius:20,
                  // justifyContent:"center",
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#fff',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    // width:"100%",
                    // height:47,
                    // borderRadius:20,
                    // justifyContent:"space-between",
                    // backgroundColor:"#fff"
                  }}>
                  <Image
                    style={{
                      height: 24,
                      width: 24,
                    }}
                    source={require('../../assets/Paint.png')}></Image>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#000000',
                      // fontWeight: '700',
                      // alignSelf:"center"
                      marginLeft: 9,
                    }}>
                    Care reminder
                  </Text>
                </View>
                <Switch
                  trackColor={{false: '#767577', true: '#1BBFA0'}}
                  thumbColor={isSwitchOn1 ? '#ffffff' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch1}
                  value={isSwitchOn1}
                />
              </View>
            </View>

            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: '#ECECEC',
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                height: 47,
                // borderRadius:20,
                // justifyContent:"center",
                alignItems: 'center',
                // justifyContent:"space-between",
                backgroundColor: '#fff',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  height: 47,
                  // borderRadius:20,
                  // justifyContent:"center",
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#fff',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    // width:"100%",
                    // height:47,
                    // borderRadius:20,
                    // justifyContent:"space-between",
                    // backgroundColor:"#fff"
                  }}>
                  <Image
                    style={{
                      height: 24,
                      width: 24,
                    }}
                    source={require('../../assets/Weather.png')}></Image>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#000000',
                      // fontWeight: '700',
                      // alignSelf:"center"
                      marginLeft: 9,
                    }}>
                    Weather alerts
                  </Text>
                </View>
                <Switch
                  trackColor={{false: '#767577', true: '#1BBFA0'}}
                  thumbColor={isSwitchOn ? '#ffffff' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isSwitchOn}
                />
              </View>
            </View>
          </View>

          <Text
            style={{
              fontSize: 16,
              color: '#161C1C',
              fontWeight: '700',
              // alignSelf:"center"
              marginTop: 6,
            }}>
            Help
          </Text>
          <View
            style={{
              height: 10,
            }}
          />
          <View
            style={{
              width: '100%',
              height: 144,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
              paddingHorizontal: 20,

              backgroundColor: '#fff',
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                height: 47,
                // borderRadius:20,
                // justifyContent:"center",
                alignItems: 'center',
                // justifyContent:"space-between",
                backgroundColor: '#fff',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  height: 47,
                  // borderRadius:20,
                  // justifyContent:"center",
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#fff',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    // width:"100%",
                    // height:47,
                    // borderRadius:20,
                    // justifyContent:"space-between",
                    // backgroundColor:"#fff"
                  }}>
                  <Image
                    style={{
                      height: 24,
                      width: 24,
                    }}
                    source={require('../../assets/FA.png')}></Image>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#000000',
                      // fontWeight: '700',
                      // alignSelf:"center"
                      marginLeft: 9,
                    }}>
                    FAQ
                  </Text>
                </View>
                <Image
                  style={{
                    height: 24,
                    width: 24,
                  }}
                  source={require('../../assets/Outline.png')}></Image>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                height: 47,
                // borderRadius:20,
                // justifyContent:"center",
                alignItems: 'center',
                // justifyContent:"space-between",
                backgroundColor: '#fff',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  height: 47,
                  // borderRadius:20,
                  // justifyContent:"center",
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#fff',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    // width:"100%",
                    // height:47,
                    // borderRadius:20,
                    // justifyContent:"space-between",
                    // backgroundColor:"#fff"
                  }}>
                  <Image
                    style={{
                      height: 24,
                      width: 24,
                    }}
                    source={require('../../assets/SA.png')}></Image>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#000000',
                      // fontWeight: '700',
                      // alignSelf:"center"
                      marginLeft: 9,
                    }}>
                    Share app
                  </Text>
                </View>
                <Image
                  style={{
                    height: 24,
                    width: 24,
                  }}
                  source={require('../../assets/Outline.png')}></Image>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: '#ECECEC',
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                height: 47,
                // borderRadius:20,
                // justifyContent:"center",
                alignItems: 'center',
                // justifyContent:"space-between",
                backgroundColor: '#fff',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  height: 47,
                  // borderRadius:20,
                  // justifyContent:"center",
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#fff',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    // width:"100%",
                    // height:47,
                    // borderRadius:20,
                    // justifyContent:"space-between",
                    // backgroundColor:"#fff"
                  }}>
                  <Image
                    style={{
                      height: 24,
                      width: 24,
                    }}
                    source={require('../../assets/Weather.png')}></Image>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#000000',
                      // fontWeight: '700',
                      // alignSelf:"center"
                      marginLeft: 9,
                    }}>
                    Rate us
                  </Text>
                </View>
                <Image
                  style={{
                    height: 24,
                    width: 24,
                  }}
                  source={require('../../assets/Outline.png')}></Image>
              </View>
            </View>
          </View>
        </View>
      </View>
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
    marginTop: 20,
    // flex: 1,
    height: 130,
    width: '100%',
    padding: 10,
    borderRadius: 16,
    color: 'black',
    backgroundColor: '#fff',
  },
  textInput1: {
    backgroundColor: '#fff',
    marginTop: 20,
    // flex: 1,
    height: 56,
    width: '100%',
    padding: 10,
    borderRadius: 16,
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
