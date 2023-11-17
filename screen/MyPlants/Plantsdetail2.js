import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TextInput,
  FlatList,
  Modal,
  ImageBackground,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker'; // Import DateTimePicker
import ImagePicker from 'react-native-image-crop-picker';
import {SwipeListView} from 'react-native-swipe-list-view';

export default function Plantsdetail2({navigation}) {
  const [text, setText] = useState('');

  const handleChangeText = inputText => {
    setText(inputText);
  };
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);

  const [indexofData, setindexofData] = useState(0);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [isBottomSheetVisible1, setIsBottomSheetVisible1] = useState(false);
  // Control the visibility of the bottom sheet
  const [selectedRadio4, setSelectedRadio4] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const renderPlantItem = ({item}) => {
    const textColor = item.nextWatering ? '#1BBFA0' : '#E74C3C';

    return (
      <View style={{}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PlantDetail');
          }}>
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
          </View>

          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: '#E5E5E5',
              marginBottom: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };
  const plantData = [
    {
      id: '1',
      image: require('../../assets/Plant1.png'),
      location: 'Asplenium nidus',
      name: 'Bird’s Aspleniaceae',
      //   nextWatering: 'Next: water on Aug 12',
    },
    {
      id: '2',
      image: require('../../assets/Plant2.png'),
      location: 'Sansevieria trifasciata',
      name: 'Snake Plant',
      //   OverdueWatering: 'Overdue: water on Aug 1',
    },

    // Add more plant data objects as needed
  ];
  const data3 = [
    {
      id: '1',
      title: 'Watering',
      frequency: 'Bright Direct',
      imageSource: require('../../assets/icon1.png'),
    },
    {
      id: '2',
      title: 'Lighting',
      frequency: 'Frequent',
      imageSource: require('../../assets/icon5.png'),
    },
    {
      id: '3',
      title: 'Pruning',
      frequency: 'Every 1 year',
      imageSource: require('../../assets/P.png'),
    },
    {
      id: '4',
      title: 'Growth Rate',
      frequency: 'High',
      imageSource: require('../../assets/icon4.png'),
    },
    {
      id: '5',
      title: 'Repotting',
      frequency: 'Every 1 year',
      imageSource: require('../../assets/R.png'),
    },
    {
      id: '6',
      title: 'Temperature',
      frequency: 'From 20°F to 55°F',
      imageSource: require('../../assets/icon3.png'),
    },
    {
      id: '7',
      title: 'Leaf',
      frequency: 'Yes',
      imageSource: require('../../assets/icon2.png'),
    },

    // Add more items to your data array as needed
  ];
  function renderItem({item, index}) {
    const backgroundColor = index % 2 === 0 ? '#fff' : '#F8F8F8';

    return (
      <View
        style={{
          width: '100%',
          paddingHorizontal: 20,
          backgroundColor: backgroundColor,
          alignItems: 'center',
          flexDirection: 'row',
          height: 64,
        }}>
        <Image
          source={item.imageSource}
          style={{
            height: 32,
            width: 32,
          }}
        />
        <Text
          style={{
            marginLeft: 10,
            fontSize: 16,
            color: '#161C1C',
            fontWeight: '500',
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: '#9B9B9B',
            fontWeight: '500',
            position: 'absolute',
            right: 20,
          }}>
          {item.frequency}
        </Text>
      </View>
    );
  }
  const handleTimeChange = (event, selectedTime) => {
    if (selectedTime) {
      setSelectedTime(selectedTime);
    }
    setShowTimePicker(false); // Hide the time picker
  };

  const toggleTimePicker = () => {
    setShowTimePicker(!showTimePicker);
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dateOfBirth;
    setShowDatePicker(Platform.OS === 'ios'); // Show the date picker on iOS; on Android, it's automatic
    setDateOfBirth(currentDate);
  };
  const handleRadioSelect4 = index => {
    setSelectedRadio4(index);
  };
  const closeBottomSheet = () => {
    setIsBottomSheetVisible(false);
    // setIsBottomSheetVisible1(true);
  };
  const openBottomSheet = () => {
    setIsBottomSheetVisible(true);
  };
  const closeBottomSheet1 = () => {
    setIsBottomSheetVisible1(false);
    // setIsBottomSheetVisible1(true);
  };
  const openBottomSheet1 = () => {
    setIsBottomSheetVisible1(true);
  };
  const data4 = [
    {id: '1', title: 'Water'},
    {id: '2', title: 'Fertilize'},
    {id: '3', title: 'Prune'},
    {id: '4', title: 'Clean'},
    {id: '5', title: 'Repot'},
    // Add more data as needed
  ];
  const data1 = [
    {
      id: '1',
      name: 'Fertilizing',
      date: '1 Des',
      time: '20:30',
      schedule: 'Every 6 month',
      image: require('../../assets/icon2.png'),
    },
    {
      id: '2',
      name: 'Watering',
      date: '1 Des',
      time: '20:30',
      schedule: 'Every 6 month',
      image: require('../../assets/icon1.png'),
    },
    {
      id: '3',
      name: 'Pruning',
      date: '1 Des',
      time: '20:30',
      schedule: 'Every 6 month',
      image: require('../../assets/P.png'),
    },

    // Add more data items as needed
  ];
  const [imageUri, setImageUri] = useState('');
  const [SelectedImageUri, setSelectedImageUri] = useState('');

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

  const data5 = [
    {
      id: '1',
      name: 'Watering',
      date: '1 Des',
      time: '20:30',
      status: 'Done',
      schedule: 'Every 1 week',
      image: require('../../assets/icon1.png'),
      Icon: require('../../assets/Fille.png')
    },

    // {
    //   id: '2',
    //   name: 'Note',
    //   date: '1 Des',
    //   time: '20:30',
    //   // status:"Done",

    //   schedule: 'These plants like to be...',
    //   image: require('../../assets/note.png'),
    // },

    // Add more data items as needed
  ];
  const data = [
    {id: '1', label: 'Reminder'},
    {id: '2', label: 'Plant Info'},
    {id: '3', label: 'History'},
    // Add more data items as needed
  ];
  const renderItem1 = ({item}) => (
    <View
      style={{
        marginBottom: 10,
        width: '100%',
        paddingLeft: 10,
        alignItems: 'center',
        flexDirection: 'row',
        height: 72,
        borderWidth: 1,
        borderColor: '#EBEBEB',
        backgroundColor: '#fff',
        borderRadius: 16,
      }}>
      <View style={{width: '15%'}}>
        <Image source={item.image} style={{height: 32, width: 32}} />
      </View>
      <View>
        <View
          style={{
            width: '77%',
            marginLeft: -10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{marginLeft: 10, fontSize: 12, color: '#161C1C'}}>
              {item.name}
            </Text>
            <Text style={{marginLeft: 10, fontSize: 12, color: '#9B9B9B'}}>
              {item.schedule}
            </Text>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={{marginLeft: 10, fontSize: 12, color: '#161C1C'}}>
              {item.date}
            </Text>
            <Text style={{marginLeft: 10, fontSize: 12, color: '#9B9B9B'}}>
              {item.time}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
  const SwipeableRow = ({item, closeRow}) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 72,
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: '#F8DB73',
          justifyContent: 'center',
          alignItems: 'center',
          width: 58,
          height: 58,
          borderRadius: 8,
        }}
        onPress={() => {
          // Handle delete action here
          Alert.alert('Edit', 'Are you sure you want to edit this item?', [
            {text: 'Cancel', style: 'cancel'},
            {text: 'Edit', onPress: closeRow},
          ]);
        }}>
        <Image
          source={require('../../assets/Edit.png')}
          style={{
            height: 24,
            width: 24,
          }}></Image>
        <Text style={{color: 'white', fontSize: 12}}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#F1655E',
          justifyContent: 'center',
          alignItems: 'center',
          width: 58,
          height: 58,
          borderRadius: 8,
          marginLeft: 10,
        }}
        onPress={() => {
          // Handle delete action here
          Alert.alert('Delete', 'Are you sure you want to delete this item?', [
            {text: 'Cancel', style: 'cancel'},
            {text: 'Delete', onPress: closeRow},
          ]);
        }}>
        <Image
          source={require('../../assets/DeleteP.png')}
          style={{
            height: 24,
            width: 24,
          }}></Image>
        <Text style={{color: 'white', fontSize: 12}}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,

        alignItems: 'center',
        backgroundColor: '#F8F8F8',
      }}>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          //   position: 'absolute',
          justifyContent: 'space-between',
          zIndex: 2,
          flexDirection: 'row',
          top: 10,
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('EditPlant');
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
              source={require('../../assets/Settings.png')}
              style={{
                width: 24,
                height: 24,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>

      <ImageBackground
        source={require('../../assets/Bg.png')}
        style={{
          width: '100%',
          marginTop: -80,
          height: 340,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: '#FFFFFF',
            fontWeight: 'bold',
            position: 'absolute',
            alignSelf: 'center',
            bottom: 80,
            // marginLeft: 6,
          }}>
          Silver Pothos
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#FFFFFF',
            // fontWeight: 'bold',
            position: 'absolute',
            alignSelf: 'center',
            bottom: 60,
            // marginLeft: 6,
          }}>
          Scindapsus silvery anne
        </Text>
      </ImageBackground>
      <View
        style={{
          width: '100%',
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          backgroundColor: '#F8F8F8',
          marginTop: -40,
          height: '70%',
        }}>
        <View
          style={{
            marginTop: 20,
          }}
        />
        <View
          style={{
            alignSelf: 'center',
            width: '90%',
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
                    width: 105,
                    // marginLeft:-10,
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
              width: '90%',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,

                color: '#161C1C',
                fontWeight: 'bold',
                alignSelf: 'center',

                marginTop: 10,
              }}>
              Reminders
            </Text>

            <View
              style={{
                // backgroundColor: 'pink',
                width: '100%',
                height: '78%',
                marginTop: 10,
              }}>
              <SwipeListView
                data={data1}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => renderItem1({item})}
                renderHiddenItem={({item}) => (
                  <SwipeableRow item={item} closeRow={() => {}} />
                )}
                rightOpenValue={-132}
              />
              <View
                style={{
                  height: 20,
                }}
              />
              <TouchableOpacity
                style={{
                  width: '100%',
                  // position: 'absolute',
                  // bottom: 40,
                  height: 56,
                  borderRadius: 16,
                  alignSelf: 'center',
                  backgroundColor: '#1BBFA0',
                  justifyContent: 'center', // Center content horizontally
                  alignItems: 'center', // Center content vertically
                  // marginTop: 20,
                }}
                onPress={openBottomSheet}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16, // Adjust the font size as needed
                    fontWeight: '600',
                  }}>
                  Add reminder
                </Text>
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
                          New Reminders
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
                          flexDirection: 'row',
                          marginTop: 20,
                        }}>
                        <Image
                          source={require('../../assets/Grass.png')}
                          style={{
                            width: 24,
                            height: 24,
                          }}
                        />
                        <Text
                          style={{
                            color: '#161C1C',
                            marginLeft: 10,
                            fontSize: 16, // Adjust the font size as needed
                            fontWeight: '600',
                          }}>
                          Silver Pothos
                        </Text>
                      </View>
                      <View
                        style={{
                          width: '100%',
                          height: 1,
                          marginTop: 10,
                          backgroundColor: '#E5E5E5',
                        }}></View>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginTop: 20,
                        }}>
                        <Image
                          source={require('../../assets/No.png')}
                          style={{
                            width: 24,
                            height: 24,
                          }}
                        />
                        <Text
                          style={{
                            color: '#161C1C',
                            marginLeft: 10,
                            fontSize: 16, // Adjust the font size as needed
                            fontWeight: '600',
                          }}>
                          Remind me to:
                        </Text>
                      </View>

                      <View
                        style={{
                          height: 55,
                          width: '100%',
                        }}>
                        <FlatList
                          data={data4}
                          horizontal={true} // Set horizontal to true
                          renderItem={({item, index}) => (
                            <TouchableOpacity
                              key={item.id}
                              onPress={() => handleRadioSelect4(index)}
                              style={{
                                // flexDirection: 'row',
                                alignItems: 'center',
                                // width: 1,
                                // padding:5, // Adjust the width as needed
                                height: 37,
                                borderWidth: 1,
                                borderColor:
                                  selectedRadio4 === index
                                    ? '#489BDF'
                                    : '#DEF2ED',
                                borderRadius: 8,
                                backgroundColor:
                                  selectedRadio4 === index ? '#489BDF' : '#fff',
                                marginRight: 2,
                                marginVertical: 5,
                                paddingHorizontal: 8,
                                justifyContent: 'center',
                              }}>
                              <View>
                                <Text
                                  style={{
                                    fontSize: 14,
                                    color:
                                      selectedRadio4 === index
                                        ? '#fff'
                                        : '#9B9B9B',
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
                        onPress={() => setShowDatePicker(true)} // Show date picker when the text is pressed
                        style={{
                          height: 40,
                          borderBottomWidth: 1,
                          borderColor: '#D9D6DF',
                          // justifyContent: 'center',
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={require('../../assets/Filled.png')}
                          style={{
                            width: 24,

                            height: 24,
                          }}
                        />
                        <Text
                          style={{
                            color: '#000000',
                            marginLeft: 10,
                          }}>
                          {dateOfBirth.toDateString()}
                        </Text>
                      </TouchableOpacity>
                      {showDatePicker && (
                        <DateTimePicker
                          testID="dateTimePicker"
                          value={dateOfBirth}
                          mode="date"
                          is24Hour={true}
                          display="default"
                          onChange={handleDateChange}
                        />
                      )}

                      <TouchableOpacity
                        onPress={toggleTimePicker} // Show date picker when the text is pressed
                        style={{
                          height: 40,
                          borderBottomWidth: 1,
                          borderColor: '#D9D6DF',
                          marginTop: 20,
                          // justifyContent: 'center',
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={require('../../assets/time.png')}
                          style={{
                            width: 24,

                            height: 24,
                          }}
                        />
                        <Text
                          style={{
                            color: '#000000',
                            marginLeft: 10,
                          }}>
                          {selectedTime.toTimeString()}
                        </Text>
                      </TouchableOpacity>
                      {showTimePicker && (
                        <DateTimePicker
                          value={selectedTime}
                          mode="time"
                          is24Hour={true}
                          display="default"
                          onChange={handleTimeChange}
                        />
                      )}
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        ) : indexofData == 1 ? (
          <View
            style={{
              width: '90%',
              alignSelf: 'center',

              marginTop: 10,
            }}>
            <View
              style={{
                width: '100%',
                marginTop: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: '47%',
                  // justifyContent:"center",
                  paddingLeft: 10,

                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 56,
                  elevation: 5,
                  backgroundColor: '#fff',
                  borderRadius: 16,
                }}>
                <Image
                  source={require('../../assets/icon1.png')}
                  style={{
                    height: 32,
                    width: 32,
                  }}></Image>
                <View>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 12,
                      color: '#161C1C',
                      // alignSelf: 'center',
                      // fontWeight:"600",
                      // textAlign:"center"
                      // marginTop: 10,
                    }}>
                    Water
                  </Text>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 12,
                      color: '#9B9B9B',
                      // alignSelf: 'center',
                      // fontWeight:"600",
                      // textAlign:"center"
                      // marginTop: 10,
                    }}>
                    Every 7-10 days
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '47%',
                  // justifyContent:"center",
                  paddingLeft: 10,

                  alignItems: 'center',
                  height: 56,
                  elevation: 5,
                  backgroundColor: '#fff',
                  borderRadius: 16,
                  flexDirection: 'row',
                }}>
                <Image
                  source={require('../../assets/icon5.png')}
                  style={{
                    height: 32,
                    width: 32,
                  }}></Image>
                <View>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 12,
                      color: '#161C1C',
                      // alignSelf: 'center',
                      // fontWeight:"600",
                      // textAlign:"center"
                      // marginTop: 10,
                    }}>
                    Light
                  </Text>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 12,
                      color: '#9B9B9B',
                      // alignSelf: 'center',
                      // fontWeight:"600",
                      // textAlign:"center"
                      // marginTop: 10,
                    }}>
                    Bright Direct
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                marginTop: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: '47%',
                  // justifyContent:"center",
                  paddingLeft: 10,
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 56,
                  elevation: 5,
                  backgroundColor: '#fff',
                  borderRadius: 16,
                }}>
                <Image
                  source={require('../../assets/icon2.png')}
                  style={{
                    height: 32,
                    width: 32,
                  }}></Image>
                <View>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 12,
                      color: '#161C1C',
                      // alignSelf: 'center',
                      // fontWeight:"600",
                      // textAlign:"center"
                      // marginTop: 10,
                    }}>
                    Care
                  </Text>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 12,
                      color: '#9B9B9B',
                      // alignSelf: 'center',
                      // fontWeight:"600",
                      // textAlign:"center"
                      // marginTop: 10,
                    }}>
                    Medium
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '47%',
                  // justifyContent:"center",
                  paddingLeft: 10,

                  alignItems: 'center',
                  height: 56,
                  elevation: 5,
                  backgroundColor: '#fff',
                  borderRadius: 16,
                  flexDirection: 'row',
                }}>
                <Image
                  source={require('../../assets/icon7.png')}
                  style={{
                    height: 32,
                    width: 32,
                  }}></Image>
                <View>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 12,
                      color: '#161C1C',
                      // alignSelf: 'center',
                      // fontWeight:"600",
                      // textAlign:"center"
                      // marginTop: 10,
                    }}>
                    Toxic
                  </Text>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 12,
                      color: '#9B9B9B',
                      // alignSelf: 'center',
                      // fontWeight:"600",
                      // textAlign:"center"
                      // marginTop: 10,
                    }}>
                    Non-Toxic to pets
                  </Text>
                </View>
              </View>
            </View>

            <Text
              style={{
                // marginLeft:10,
                fontSize: 16,
                color: '#161C1C',
                // alignSelf: 'center',
                fontWeight: 'bold',
                // textAlign:"center"
                marginTop: 10,
              }}>
              General Information
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#9B9B9B',
                marginTop: 10,
              }}>
              Pothos (Epipremnum aureum) is one of the easiest houseplants to
              grow and is a beautiful addition to any home or office. Best of
              all, pothos plants grow well in almost any situation!. Pothos
              (Epipremnum aureum) is one of the easiest houseplants to grow and
              is a beautiful addition to any home or office. Best of all, pothos
              plants grow well in almost any situation!
            </Text>
            <View
              style={{
                width: '100%',
                marginTop: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                marginBottom:20
              }}>
              <Image
                source={require('../../assets/A.png')}
                style={{
                  height: 70,
                  width: 100,
                }}></Image>
              <Image
                source={require('../../assets/A.png')}
                style={{
                  height: 70,
                  width: 100,
                }}></Image>
              <Image
                source={require('../../assets/A.png')}
                style={{
                  height: 70,
                  width: 100,
                }}></Image>
            </View>
            <View
              style={{
                width: '100%',
                marginBottom:20

              }}>
              <FlatList
                data={data3}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
              <View
              style={
                {
                marginBottom:20

                }
              }
              />
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
                  Plants with same needs
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#1BBFA0',
                    //   alignSelf: 'center',
                    fontWeight: '500',
                    marginTop: 10,
                  }}>
                  View all
                </Text>
              </View>
              <View
                style={{
                  height: 20,
                }}></View>

              {plantData.length > 0 ? (
                <View
                  style={
                    {
                      // height:20
                    }
                  }>
                  <FlatList
                    data={plantData}
                    keyExtractor={item => item.id}
                    renderItem={renderPlantItem}
                  />
                </View>
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
                    You have no plant to care. Add your first plant to start
                    follow its care and grow.
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
          </View>
        ) : indexofData == 2 ? (
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,

                color: '#161C1C',
                fontWeight: 'bold',
                // alignSelf: 'center',

                marginTop: 20,
              }}>
              History
            </Text>

            <View
              style={{
                // backgroundColor: 'pink',
                width: '100%',
                height: '78%',
                marginTop: 10,
              }}>
              <FlatList
                data={data5}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                      <View>

                    <Text
                      style={{
                        fontSize: 16,

                        color: '#161C1C',
                        fontWeight: 'bold',
                        // alignSelf: 'center',

                        // marginTop: 6,
                      }}>
                      5 Aug
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,

                        color: '#9B9B9B',
                        // fontWeight: 'bold',
                        // alignSelf: 'center',

                        // marginTop: 6,
                      }}>
                     20:30
                    </Text>
                    </View>
                    

                    <View
                      style={{
                        height: 24,
                        width: 24,
                        borderWidth: 1,
                        borderColor: '#C7C7C7',
                        borderRadius: 24,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          height: 12,
                          width: 12,
                          backgroundColor: '#9B9B9B',
                          borderRadius: 12,
                        }}></View>
                    </View>
                    <View
                      style={{
                        marginBottom: 10,
                        width: '70%',
                        paddingLeft: 10,
                        alignItems: 'center',
                        flexDirection: 'row',
                        height: 58,
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
                            width: '77%',
                            // marginLeft: -10,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}>
                          <View
                            style={
                              {
                                // width:"100%"
                              }
                            }>
                            <Text
                              style={{
                                marginLeft: 10,
                                fontSize: 12,
                                color: '#161C1C',
                              }}>
                              {item.name}
                            </Text>
                            <Text
                              style={{
                                marginLeft: 10,
                                fontSize: 12,
                                color: '#9B9B9B',
                              }}>
                              {item.schedule}
                            </Text>
                          </View>
                          <View
                            style={{
                              // alignItems: 'flex-end',
                              alignItems:"center",
                              justifyContent: 'center',
                              flexDirection:"row",
                              // marginTop:-10
                            }}>
                              
                              <Image
                          source={item.Icon}

                          
                          style={{
                            height: 20,
                            width: 20,
                          }}
                        />

                            <Text
                              style={{
                                // marginLeft: 10,
                                fontSize: 14,
                                color: '#1BBFA0',
                              }}>
                              {item.status}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                )}
              />
              <TouchableOpacity
                style={{
                  width: '100%',
                  position: 'absolute',
                  bottom: 40,
                  height: 56,
                  borderRadius: 16,
                  alignSelf: 'center',
                  backgroundColor: '#1BBFA0',
                  justifyContent: 'center', // Center content horizontally
                  alignItems: 'center', // Center content vertically
                  // marginTop: 20,
                }}
                onPress={openBottomSheet1}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16, // Adjust the font size as needed
                    fontWeight: '600',
                  }}>
                  Write a note
                </Text>
              </TouchableOpacity>
              <Modal
                transparent={true}
                visible={isBottomSheetVisible1}
                animationType="slide"
                onRequestClose={closeBottomSheet1}>
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
                        <TouchableOpacity onPress={closeBottomSheet1}>
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
                          Add Note
                        </Text>
                        <TouchableOpacity onPress={closeBottomSheet1}>
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
                          flexDirection: 'row',
                          marginTop: 20,
                        }}>
                        <Image
                          source={require('../../assets/Grass.png')}
                          style={{
                            width: 24,
                            height: 24,
                          }}
                        />
                        <Text
                          style={{
                            color: '#161C1C',
                            marginLeft: 10,
                            fontSize: 16, // Adjust the font size as needed
                            fontWeight: '600',
                          }}>
                          Silver Pothos
                        </Text>
                      </View>
                      <View
                        style={{
                          width: '100%',
                          height: 1,
                          marginTop: 10,
                          backgroundColor: '#E5E5E5',
                        }}></View>

                      <TouchableOpacity
                        onPress={() => setShowDatePicker(true)} // Show date picker when the text is pressed
                        style={{
                          height: 40,
                          marginTop: 20,
                          borderBottomWidth: 1,
                          borderColor: '#D9D6DF',
                          // justifyContent: 'center',
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={require('../../assets/Filled.png')}
                          style={{
                            width: 24,

                            height: 24,
                          }}
                        />
                        <Text
                          style={{
                            color: '#000000',
                            marginLeft: 10,
                          }}>
                          {dateOfBirth.toDateString()}
                        </Text>
                      </TouchableOpacity>
                      {showDatePicker && (
                        <DateTimePicker
                          testID="dateTimePicker"
                          value={dateOfBirth}
                          mode="date"
                          is24Hour={true}
                          display="default"
                          onChange={handleDateChange}
                        />
                      )}
                      <TextInput
                        style={styles.textInput}
                        placeholder="How’s it growing?"
                        placeholderTextColor="#A5A5A5"
                        value={text}
                        onChangeText={handleChangeText}
                      />
                      <View
                        style={{
                          height: '5%',
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
                          borderRadius: 20,
                        }}>
                        {imageUri ? (
                          <Image
                            source={{uri: imageUri}}
                            style={{
                              width: '100%',
                              height: '100%',
                              borderRadius: 20,
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
                              borderRadius: 20,
                            }}>
                            <Image
                              source={require('../../assets/element.png')}
                              style={{
                                width: '90%',
                                // marginTop: 70,
                                borderRadius: 20,
                                height: 90,
                              }}
                            />
                          </View>
                        )}
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        ) : null}
      </View>
      <View
        style={{
          height: 10,
        }}
      />
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
    borderColor: '#76D9C6',
    borderWidth: 1,
    marginTop: 20,
    // flex: 1,
    height: 100,
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
