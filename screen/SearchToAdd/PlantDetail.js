import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  FlatList,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import FormInput1 from '../../Components/FormInput1';
import ImagePicker from 'react-native-image-crop-picker';
import FormInput from '../../Components/FormInput';
import Slider from 'react-native-slider'; // Import the Slider component
import DateTimePicker from '@react-native-community/datetimepicker'; // Import DateTimePicker

export default function PlantDetail({navigation}) {
  const [username1, setuserName1] = React.useState();
  const [username2, setuserName2] = React.useState();
  const [username3, setuserName3] = React.useState();

  const [selectedRadio1, setSelectedRadio1] = useState(0);
  const [potSize, setPotSize] = useState(3);
  const [potSize1, setPotSize1] = useState(5);
  const [selectedRadio4, setSelectedRadio4] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dateOfBirth;
    setShowDatePicker(Platform.OS === 'ios'); // Show the date picker on iOS; on Android, it's automatic
    setDateOfBirth(currentDate);
  };

  const data4 = [
    {id: '1', title: 'Today'},
    {id: '2', title: 'Yesterday'},
    {id: '3', title: 'Last week'},
    // Add more data as needed
  ];

  const handleRadioSelect4 = index => {
    setSelectedRadio4(index);
  };
  // Function to handle radio button selection
  const handleRadioSelect1 = index => {
    setSelectedRadio1(index);
  };
  const [selectedRadio2, setSelectedRadio2] = useState(0);

  // Function to handle radio button selection
  const handleRadioSelect2 = index => {
    setSelectedRadio2(index);
  };
  const [selectedRadio3, setSelectedRadio3] = useState(0);

  // Function to handle radio button selection
  const handleRadioSelect3 = index => {
    setSelectedRadio3(index);
  };
  const data1 = [
    {
      id: '1',
      title: 'Indoor',
    },
    {
      id: '2',
      title: 'Outdoor',
    },
  ];
  const data2 = [
    {
      id: '1',
      title: 'Bright direct light',
    },
    {
      id: '2',
      title: 'Bright indirect light',
    },
    {
      id: '3',
      title: 'Medium light',
    },
    {
      id: '4',
      title: 'Low light',
    },
  ];
  const data3 = [
    {
      id: '1',
      title: 'Loam Soil',
    },
    {
      id: '2',
      title: 'Potting Mixture',
    },
    {
      id: '3',
      title: 'Rich Potting Soil',
    },
  ];
  const [imageUri, setImageUri] = useState('');
  const [SelectedImageUri, setSelectedImageUri] = useState('');

  //   const [showDatePicker, setShowDatePicker] = useState(false);

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
  const [username, setuserName] = React.useState();

  const image = [
    require('../../assets/Slide1.png'),
    require('../../assets/Slide1.png'),
    require('../../assets/Slide1.png'),
  ];
  const data = [
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
  const openBottomSheet = () => {
    setIsBottomSheetVisible(true);
  };

  const closeBottomSheet = () => {
    setIsBottomSheetVisible(false);
    setIsBottomSheetVisible1(true);
  };
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false); // Control the visibility of the bottom sheet
  const [isBottomSheetVisible1, setIsBottomSheetVisible1] = useState(false);
  const [isBottomSheetVisible2, setIsBottomSheetVisible2] = useState(false);
  const [isBottomSheetVisible3, setIsBottomSheetVisible3] = useState(false); // Control the visibility of the bottom sheet
  const [isBottomSheetVisible4, setIsBottomSheetVisible4] = useState(false);
  const [isBottomSheetVisible5, setIsBottomSheetVisible5] = useState(false); // Control the visibility of the bottom sheet
  // Control the visibility of the bottom sheet
  // Control the visibility of the bottom sheet
  // Control the visibility of the bottom sheet

  const closeBottomSheet2 = () => {
    setIsBottomSheetVisible2(false);
    setIsBottomSheetVisible3(true);
  };
  const closeBottomSheet3 = () => {
    setIsBottomSheetVisible3(false);
    setIsBottomSheetVisible4(true);
  };

  const closeBottomSheet4 = () => {
    setIsBottomSheetVisible4(false);
    setIsBottomSheetVisible5(true);
  };
  const closeBottomSheet5 = () => {
    setIsBottomSheetVisible5(false);
    // setIsBottomSheetVisible5(true);
  };
  const closeBottomSheet1 = () => {
    setIsBottomSheetVisible1(false);
    setIsBottomSheetVisible2(true);
  };
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

  const renderImageItem = ({item}) => (
    <Image
      source={item}
      style={{
        width: '100%',
        // borderRadius: 20,
        // marginTop: 10,
        height: 250,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        // Set the desired height for your images
      }}
    />
  );
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <ScrollView
      contentContainerStyle={{
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
          width: '90%',
          alignSelf: 'center',
          position: 'absolute',
          zIndex: 2,
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
      </View>
      <View
        style={{
          height: 320,
          width: '100%',
          marginTop: -20,
        }}>
        <Carousel
          data={image}
          renderItem={renderImageItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width}
          onSnapToItem={index => setActiveSlide(index)}
        />

        {/* Pagination */}
        <Pagination
          dotsLength={image.length}
          activeDotIndex={activeSlide}
          containerStyle={{}}
        />
      </View>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
            color: '#161C1C',
            // alignSelf: 'center',
            fontWeight: '600',
            textAlign: 'center',
            // marginTop: 10,
          }}>
          Silver Pothos
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#1BBFA0',
            // alignSelf: 'center',
            // fontWeight:"600",
            textAlign: 'center',
            // marginTop: 10,
          }}>
          Scindapsus silvery anne
        </Text>
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
        <TouchableOpacity style={styles.button} onPress={openBottomSheet}>
          <Text style={styles.buttonText}>Add to My garden</Text>
        </TouchableOpacity>
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
          Pothos (Epipremnum aureum) is one of the easiest houseplants to grow
          and is a beautiful addition to any home or office. Best of all, pothos
          plants grow well in almost any situation!. Pothos (Epipremnum aureum)
          is one of the easiest houseplants to grow and is a beautiful addition
          to any home or office. Best of all, pothos plants grow well in almost
          any situation!
        </Text>

        <View
          style={{
            width: '100%',
            marginTop: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
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
      </View>
      <View
        style={{
          width: '100%',
        }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <Modal
        transparent={true}
        visible={isBottomSheetVisible}
        animationType="slide"
        onRequestClose={closeBottomSheet}>
        <View style={styles.modalContainer}>
          {/* Your bottom sheet content goes here */}
          <View style={styles.bottomSheet}>
            <TouchableOpacity
              onPress={openImagePicker}
              style={{
                height: 88,
                width: 88,
                marginTop: -50,

                alignSelf: 'center',
                backgroundColor: '#EDEDED',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 88,
              }}>
              {imageUri ? (
                <Image
                  source={{uri: imageUri}}
                  style={{width: '100%', height: '100%', borderRadius: 88}}
                />
              ) : (
                <View
                  style={{
                    backgroundColor: '#F4F4F4',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 88,
                    borderRadius: 88,
                    height: 88,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#6146AE',
                      textAlign: 'center',
                      fontWeight: 'normal',
                    }}>
                    Add new photo
                  </Text>
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={openImagePicker}>
              <Text
                style={{
                  // height:20, width:100, elevation:5,
                  fontSize: 20,
                  color: '#1BBFA0',
                  alignSelf: 'center',
                  fontWeight: '600',
                  marginBottom: 10,
                }}>
                Change Photo
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={closeBottomSheet}>
              <Text>Close</Text>
            </TouchableOpacity>
            <FormInput1
              // style={styles.input}
              onChangeText={username => setuserName(username)}
              // value={text}
              labelValue={username}
              // secureTextEntry={true}
              // keyboardType="email-address"
              placeholder="Garden Full Name"
              autoCapitalize="none"
              autocorrect={false}
            />
            <Text
              style={{
                // marginLeft:10,
                fontSize: 20,
                color: '#161C1C',
                // alignSelf: 'center',
                fontWeight: '600',
                // textAlign:"center"
                marginTop: 10,
              }}>
              Choose space
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#9B9B9B',
              }}>
              Where do you keep this plant?
            </Text>

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

            <TouchableOpacity style={styles.button1} onPress={closeBottomSheet}>
              <Text style={styles.buttonText1}>Create Space</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={closeBottomSheet}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        transparent={true}
        visible={isBottomSheetVisible1}
        animationType="slide"
        onRequestClose={closeBottomSheet1}>
        <View style={styles.modalContainer}>
          {/* Your bottom sheet content goes here */}
          <View style={styles.bottomSheet}>
            <Image
              source={
                SelectedImageUri
                  ? {uri: SelectedImageUri}
                  : require('../../assets/icon4.png')
              }
              style={{
                width: 88,
                height: 88,
                borderRadius: 88,
                alignSelf: 'center',
                marginTop: -50,
              }}
            />

            <Text
              style={{
                fontSize: 20,
                color: '#161C1C',
                fontWeight: '600',
              }}>
              Create Space
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#9B9B9B',
                // fontWeight: '600',
              }}>
              Choose location to get plant care tips
            </Text>

            <FormInput
              // style={styles.input}
              onChangeText={username1 => setuserName1(username1)}
              // value={text}
              labelValue={username1}
              // secureTextEntry={true}
              // keyboardType="email-address"
              placeholder="Space Name"
              autoCapitalize="none"
              autocorrect={false}
            />

            {data1.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => handleRadioSelect1(index)}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '100%',
                  height: 55,
                  borderWidth: 1,
                  borderColor: selectedRadio1 === index ? '#1BBFA0' : '#DEF2ED',
                  borderRadius: 8,
                  marginVertical: 5,
                  paddingHorizontal: 10,
                }}>
                <View
                  style={{
                    // position: 'absolute',
                    // right: 10,
                    width: 20,
                    height: 20,
                    borderWidth: 1.5,
                    marginRight: 10,
                    // borderColor: '#D9D6DF',
                    borderColor:
                      selectedRadio1 === index ? '#1BBFA0' : '#D7D7D7',
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: 12,
                      height: 12,
                      backgroundColor:
                        selectedRadio1 === index ? '#1BBFA0' : '#D7D7D7',
                      borderRadius: 20,
                    }}></View>
                </View>

                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: selectedRadio1 === index ? '#161C1C' : '#9B9B9B',
                      fontWeight: '600',
                    }}>
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}

            <TouchableOpacity style={styles.button} onPress={closeBottomSheet1}>
              <Text style={styles.buttonText}>Create</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        transparent={true}
        visible={isBottomSheetVisible2}
        animationType="slide"
        onRequestClose={closeBottomSheet2}>
        <View style={styles.modalContainer}>
          {/* Your bottom sheet content goes here */}
          <View style={styles.bottomSheet}>
            <Image
              source={
                SelectedImageUri
                  ? {uri: SelectedImageUri}
                  : require('../../assets/icon4.png')
              }
              style={{
                width: 88,
                height: 88,
                borderRadius: 88,
                alignSelf: 'center',
                marginTop: -50,
              }}
            />

            <Text
              style={{
                fontSize: 20,
                color: '#161C1C',
                fontWeight: '600',
              }}>
              light condition
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#9B9B9B',
                // fontWeight: '600',
              }}>
              How much light does your plant get?
            </Text>

            {data2.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => handleRadioSelect2(index)}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '100%',
                  height: 55,
                  borderWidth: 1,
                  borderColor: selectedRadio2 === index ? '#1BBFA0' : '#DEF2ED',
                  borderRadius: 8,
                  marginVertical: 5,
                  paddingHorizontal: 10,
                }}>
                <View
                  style={{
                    // position: 'absolute',
                    // right: 10,
                    width: 20,
                    height: 20,
                    borderWidth: 1.5,
                    marginRight: 10,
                    // borderColor: '#D9D6DF',
                    borderColor:
                      selectedRadio2 === index ? '#1BBFA0' : '#D7D7D7',
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: 12,
                      height: 12,
                      backgroundColor:
                        selectedRadio2 === index ? '#1BBFA0' : '#D7D7D7',
                      borderRadius: 20,
                    }}></View>
                </View>

                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: selectedRadio2 === index ? '#161C1C' : '#9B9B9B',
                      fontWeight: '600',
                    }}>
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}

            <TouchableOpacity style={styles.button} onPress={closeBottomSheet2}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        transparent={true}
        visible={isBottomSheetVisible3}
        animationType="slide"
        onRequestClose={closeBottomSheet3}>
        <View style={styles.modalContainer}>
          {/* Your bottom sheet content goes here */}
          <View style={styles.bottomSheet}>
            <Image
              source={
                SelectedImageUri
                  ? {uri: SelectedImageUri}
                  : require('../../assets/icon4.png')
              }
              style={{
                width: 88,
                height: 88,
                borderRadius: 88,
                alignSelf: 'center',
                marginTop: -50,
              }}
            />

            <Text
              style={{
                fontSize: 20,
                color: '#161C1C',
                fontWeight: '600',
              }}>
              Soil combination
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#9B9B9B',
                // fontWeight: '600',
              }}>
              What soil mixture do you use?
            </Text>

            {data3.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => handleRadioSelect3(index)}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '100%',
                  height: 55,
                  borderWidth: 1,
                  borderColor: selectedRadio3 === index ? '#1BBFA0' : '#DEF2ED',
                  borderRadius: 8,
                  marginVertical: 5,
                  paddingHorizontal: 10,
                }}>
                <View
                  style={{
                    // position: 'absolute',
                    // right: 10,
                    width: 20,
                    height: 20,
                    borderWidth: 1.5,
                    marginRight: 10,
                    // borderColor: '#D9D6DF',
                    borderColor:
                      selectedRadio3 === index ? '#1BBFA0' : '#D7D7D7',
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: 12,
                      height: 12,
                      backgroundColor:
                        selectedRadio3 === index ? '#1BBFA0' : '#D7D7D7',
                      borderRadius: 20,
                    }}></View>
                </View>

                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: selectedRadio3 === index ? '#161C1C' : '#9B9B9B',
                      fontWeight: '600',
                    }}>
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}

            <TouchableOpacity style={styles.button} onPress={closeBottomSheet3}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        transparent={true}
        visible={isBottomSheetVisible4}
        animationType="slide"
        onRequestClose={closeBottomSheet4}>
        <View style={styles.modalContainer}>
          {/* Your bottom sheet content goes here */}
          <View style={styles.bottomSheet}>
            <Image
              source={
                SelectedImageUri
                  ? {uri: SelectedImageUri}
                  : require('../../assets/icon4.png')
              }
              style={{
                width: 88,
                height: 88,
                borderRadius: 88,
                alignSelf: 'center',
                marginTop: -50,
              }}
            />

            <Text
              style={{
                fontSize: 20,
                color: '#161C1C',
                fontWeight: '600',
              }}>
              Pot Size
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#9B9B9B',
                // fontWeight: '600',
              }}>
              Pick the height and width of the pot
            </Text>

            <Image
              source={require('../../assets/Plot.png')}
              style={{
                width: '100%',
                height: 230,
                marginTop: 20,
              }}
            />
            <View
              style={{
                width: '100%',
              }}>
              <Slider
                value={potSize}
                onValueChange={value => setPotSize(value)}
                minimumValue={0}
                maximumValue={20}
                step={1}
                minimumTrackTintColor="#1BBFA0" // Change the color of the filled portion
                maximumTrackTintColor="#9B9B9B"
              />
            </View>
            <Text
              style={{
                fontSize: 16,
                color: '#13867B',
              }}>
              Height ≈ {potSize} in
            </Text>
            <View
              style={{
                width: '100%',
              }}>
              <Slider
                value={potSize1}
                onValueChange={value => setPotSize1(value)}
                minimumValue={0}
                maximumValue={20}
                step={1}
                minimumTrackTintColor="#1BBFA0" // Change the color of the filled portion
                maximumTrackTintColor="#9B9B9B"
              />
            </View>
            <Text
              style={{
                fontSize: 16,
                color: '#13867B',
              }}>
              {' '}
              Width ≈ {potSize1} in
            </Text>
            <TouchableOpacity style={styles.button} onPress={closeBottomSheet4}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        transparent={true}
        visible={isBottomSheetVisible5}
        animationType="slide"
        onRequestClose={closeBottomSheet5}>
        <View style={styles.modalContainer}>
          {/* Your bottom sheet content goes here */}
          <View style={styles.bottomSheet}>
            <Image
              source={
                SelectedImageUri
                  ? {uri: SelectedImageUri}
                  : require('../../assets/icon4.png')
              }
              style={{
                width: 88,
                height: 88,
                borderRadius: 88,
                alignSelf: 'center',
                marginTop: -50,
              }}
            />

            <Text
              style={{
                fontSize: 20,
                color: '#161C1C',
                fontWeight: '600',
              }}>
              Watering Plant
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#9B9B9B',
                // fontWeight: '600',
              }}>
              When did you last water your plant?
            </Text>
            <View
              style={{
                marginTop: 10,
              }}
            />
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
                      width: 100, // Adjust the width as needed
                      height: 55,
                      borderWidth: 1,
                      borderColor:
                        selectedRadio4 === index ? '#1BBFA0' : '#DEF2ED',
                      borderRadius: 8,
                      backgroundColor:
                        selectedRadio4 === index ? '#DEF2ED' : '#fff',
                      marginRight: 10,
                      marginVertical: 5,
                      paddingHorizontal: 10,
                      justifyContent: 'center',
                    }}>
                    <View>
                      <Text
                        style={{
                          fontSize: 14,
                          color:
                            selectedRadio4 === index ? '#1BBFA0' : '#9B9B9B',
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
            <Text style={styles.loginDescription1}>Select a Date</Text>
            <TouchableOpacity
              onPress={() => setShowDatePicker(true)} // Show date picker when the text is pressed
              style={{
                height: 40,
                borderBottomWidth: 1,
                borderColor: '#D9D6DF',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#000000',
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
            <View
              style={{
                width: '100%',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#161C1C',
                  fontWeight: 'bold',
                  marginTop: 10,
                }}>
                When are you free during the day?
              </Text>
              <FormInput
                // style={styles.input}
                onChangeText={username2 => setuserName2(username2)}
                // value={text}
                labelValue={username2}
                // secureTextEntry={true}
                // keyboardType="email-address"
                placeholder="Morning"
                autoCapitalize="none"
                autocorrect={false}
              />
              <FormInput
                // style={styles.input}
                onChangeText={username3 => setuserName3(username3)}
                // value={text}
                labelValue={username3}
                // secureTextEntry={true}
                // keyboardType="email-address"
                placeholder="09:00"
                autoCapitalize="none"
                autocorrect={false}
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={closeBottomSheet5}>
              <Text style={styles.buttonText}>Add Plant</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    height: Dimensions.get('window').height * 0.8, // Adjust the height as needed
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
