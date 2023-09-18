import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  FlatList,
  Platform,
  Switch
} from 'react-native';

const {width} = Dimensions.get('window');

const Survey = ({navigation}) => {
  const scrollViewRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleNext = () => {
    if (currentSlideIndex < 2) {
      // Assuming you have 3 slides
      const nextSlideIndex = currentSlideIndex + 1;
      scrollViewRef.current.scrollTo({
        x: nextSlideIndex * width,
        animated: true,
      });
      setCurrentSlideIndex(nextSlideIndex);
    } else {
      // If it's the last slide, navigate to the main screen
      navigation.replace('LoginSignUp');
    }
  };

  const handleSkip = () => {
    // Navigate to the main screen when the "Skip" button is pressed
    navigation.replace('LoginSignUp');
  };
  const data = [
    {
      id: '1',
      title: '1 - 5',
    },
    {
      id: '2',
      title: '5 - 10',
    },
    {
      id: '3',
      title: 'More than 10',
    },
  ];
  const data1 = [
    {
      id: '1',
      title: 'Beginner',
    },
    {
      id: '2',
      title: 'Some experience',
    },
    {
      id: '3',
      title: 'Very experienced',
    },
  ];
  const data2 = [
    {
      id: '1',
      title: 'Just enough to keep plants alive',
    },
    {
      id: '2',
      title: 'I can spend a few hours a week',
    },
    {
      id: '3',
      title: 'I can look after my plants all the time',
    },
  ];
  const [selectedRadio, setSelectedRadio] = useState(0);

  // Function to handle radio button selection
  const handleRadioSelect = index => {
    setSelectedRadio(index);
  };
  const [selectedRadio1, setSelectedRadio1] = useState(0);

  // Function to handle radio button selection
  const handleRadioSelect1 = index => {
    setSelectedRadio1(index);
  };
  const [selectedRadio2, setSelectedRadio2] = useState(0);

  // Function to handle radio button selection
  const handleRadioSelect2 = index => {
    setSelectedRadio2(index);
  };
  const data3 = [
    {
      id: '1',
      title: 'Water reminders',
      imageSource: require('../assets/icon1.png'),
    },
    {
      id: '2',
      title: 'Find the right plant',
      imageSource: require('../assets/icon2.png'),
    },
    {
      id: '3',
      title: 'Temperature info',
      imageSource: require('../assets/icon3.png'),
    },
    {
      id: '4',
      title: 'Plant care info',
      imageSource: require('../assets/icon4.png'),
    },
    {
      id: '5',
      title: 'Perfect light condition',
      imageSource: require('../assets/icon5.png'),
    },
    {
      id: '6',
      title: 'Troubleshoot pets',
      imageSource: require('../assets/icon6.png'),
    },
    {
      id: '7',
      title: 'Toxicity info',
      imageSource: require('../assets/icon7.png'),
    },
    {
      id: '8',
      title: 'Propagating',
      imageSource: require('../assets/icon8.png'),
    },

    // Add more items as needed
  ];
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleItemSelection = itemId => {
    if (selectedItems.includes(itemId)) {
      // Item is already selected, so unselect it
      setSelectedItems(selectedItems.filter(id => id !== itemId));
    } else {
      // Item is not selected, so select it
      setSelectedItems([...selectedItems, itemId]);
    }
  };
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const toggleSwitch = () => {
    setIsSwitchOn((previousState) => !previousState);
  };
  const [isSwitchOn1, setIsSwitchOn1] = useState(false);

  const toggleSwitch1 = () => {
    setIsSwitchOn1((previousState) => !previousState);
  };
  const renderItem = ({item}) => {
    const isSelected = selectedItems.includes(item.id);

    return (
      <TouchableOpacity
        style={[
          styles.item,
          isSelected && styles.selectedItem,
          Platform.OS === 'android' && isSelected && styles.androidShadow,
        ]}
        onPress={() => toggleItemSelection(item.id)}>
        <Image source={item.imageSource} style={styles.itemImage} />
        <Text
          style={[
            styles.itemText,
            isSelected ? styles.selectedItemText : styles.selectedItemText1,
          ]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={event => {
          const newIndex = Math.round(
            event.nativeEvent.contentOffset.x / width,
          );
          setCurrentSlideIndex(newIndex);
        }}>
        {/* Slide 1 */}
        <View style={styles.slide}>
          <View style={{height: 30}} />

          <Text style={styles.title}>Some quick questions</Text>
          <View style={{height: 25}} />
          <Image
            source={require('../assets/pic1.png')}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={{height: 16}} />
          <Text style={styles.description}>Number of plants you have?</Text>
          <View style={{height: 16}} />
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
            }}>
            {data.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => handleRadioSelect(index)}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '100%',
                  height: 55,
                  borderWidth: 1,
                  borderColor: selectedRadio === index ? '#1BBFA0' : '#DEF2ED',
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
                      selectedRadio === index ? '#1BBFA0' : '#D7D7D7',
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: 12,
                      height: 12,
                      backgroundColor:
                        selectedRadio === index ? '#1BBFA0' : '#D7D7D7',
                      borderRadius: 20,
                    }}></View>
                </View>

                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: selectedRadio === index ? '#161C1C' : '#9B9B9B',
                      fontWeight: '600',
                    }}>
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
           onPress={()=>{
            navigation.navigate("Mainscreen")
           }}
            >

            <Text
              style={{
                marginTop: 40,
                color: '#3D3D3D',
                fontSize: 14,
                alignSelf: 'center',
              }}>
              I don’t have a plant yet
            </Text>
            </TouchableOpacity>

          </View>
        </View>

        <View style={styles.slide}>
          <View style={{height: 30}} />

          <Text style={styles.title}>Some quick questions</Text>
          <View style={{height: 25}} />
          <Image
            source={require('../assets/pic2.png')}
            style={styles.image2}
            resizeMode="cover"
          />

          <View style={{height: 16}} />
          <Text style={styles.description}>
            Amount of experience with plants?
          </Text>
          <View style={{height: 16}} />

          <View
            style={{
              width: '90%',
              alignSelf: 'center',
            }}>
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
          </View>
        </View>

        <View style={styles.slide}>
          <View style={{height: 30}} />

          <Text style={styles.title}>Some quick questions</Text>
          <View style={{height: 25}} />
          <Image
            source={require('../assets/pic3.png')}
            style={styles.image3}
            resizeMode="cover"
          />
          <View style={{height: 16}} />

          <Text style={styles.description}>
            Set reminder and make the best decisions for your plant
          </Text>
          <View style={{height: 16}} />

          <View
            style={{
              width: '90%',
              alignSelf: 'center',
            }}>
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
          </View>
        </View>
        <View style={styles.slide}>
          <View style={{height: 30}} />

          <Text style={styles.title}>I need help with...</Text>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
            }}>
            <Image
              source={require('../assets/LeafNode.png')} // Replace with your image source
              style={{
                width: 60.42,
                height: 78.85,
                position: 'absolute',
                right: 0,
                //   bottom: 20,
                //   marginTop: 20,
              }}
            />
          </View>

          <View style={{height: 80}} />
          <Text style={styles.description}>Pick as many as you like</Text>
          <View style={{height: 16}} />
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
            }}>
            <FlatList
              data={data3}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              numColumns={2} // If you want a two-column layout
            />
          </View>
        </View>

        <View style={styles.slide}>
          <View style={{height: 30}} />

          <Text style={styles.title}>Get a daily reminder</Text>

          <View
            style={{
              width: '90%',
              alignSelf: 'center',
            }}>
            <Image
              source={require('../assets/LeafNode.png')}
              style={{
                width: 60.42,
                height: 78.85,
                position: 'absolute',
                right: 0,
              }}
            />
          </View>

          <View style={{height: 80}} />
          <Text style={styles.description1}>
            Users with notification are 3x more likely to water and interact
            with their plats
          </Text>
          <View style={{height: 16}} />

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
                flexDirection:"row"
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/notifications.png')}
                  style={{
                    width: 24,
                    height: 24,
                    marginRight: 10,
                  }}
                />

                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '600',
                      color: '#161C1C',
                    }}>
                    Reminder
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#555555',
                    }}>
                    So you never forget to water ur plants
                  </Text>
                </View>
              </View>
              <Switch
        trackColor={{ false: "#767577", true: "#1BBFA0" }}
        thumbColor={isSwitchOn1 ? "#ffffff" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch1}
        value={isSwitchOn1}
      />

     
            </View>
             <View
      style={{
        // borderBottomWidth:1
        height:1,
        marginTop:10,
        marginBottom:10,
        width:"100%",
        backgroundColor:"#DCDCDC"
      }}
      />
          </View>
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
                flexDirection:"row"
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/Camera.png')}
                  style={{
                    width: 24,
                    height: 24,
                    marginRight: 10,
                  }}
                />

                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '600',
                      color: '#161C1C',
                    }}>
                    Camera access
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#555555',
                    }}>
                So you can identify plants in a snap
                  </Text>
                </View>
              </View>
              <Switch
        trackColor={{ false: "#767577", true: "#1BBFA0" }}
        thumbColor={isSwitchOn ? "#ffffff" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isSwitchOn}
      />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  selectedItem: {
    backgroundColor: '#1BBFA0',

    // Change to the selected background color
  },
  selectedItemText1: {
    color: '#161C1C', // Change to the selected text color
  },
  selectedItemText: {
    color: '#fff', // Change to the selected text color
  },
  itemImage: {
    width: 32, // Adjust the width and height as needed for your image
    height: 32,
    // marginBottom: 8, // Add spacing between the image and text
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 55,
    borderWidth: 1,
    borderColor: '#D9D6DF',
    borderRadius: 8,
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    width,
  },
  image: {
    width: '100%',
    height: '35%',
    marginBottom: 20,
    marginTop: 20,
  },
  image2: {
    width: '100%',
    height: '36%',
    marginBottom: 20,
    marginTop: 20,
  },
  image3: {
    width: '100%',
    height: '34%',
    marginBottom: 20,
    marginTop: 20,
  },
  item: {
    width: '48%',
    height: 52,
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: '#fff',
    paddingLeft: 8,
    // justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    margin: '1%',
    elevation: 4, // Adjust margin as needed for spacing between items
  },
  itemText: {
    fontSize: 12,
    color: '#161C1C',
    marginLeft: 4,
    width: '80%',
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    color: '#1BBFA0',
    // marginBottom: 10,
    // paddingHorizontal: 30,
    textAlign: 'center',
  },
  title2: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1BBFA0',
    marginBottom: 10,
    paddingHorizontal: 30,
    textAlign: 'center',
  },
  title3: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1BBFA0',
    marginBottom: 10,
    paddingHorizontal: 30,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: '#161C1C',
    textAlign: 'center',
    paddingHorizontal: 50,
  },
  description1: {
    fontSize: 18,
    color: '#161C1C',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
  },
  skipButton: {
    width: '30%',
    alignItems: 'flex-start',
    borderRadius: 10,
    margin: 20,
  },
  nextButton: {
    width: '30%',
    alignItems: 'flex-end',
    borderRadius: 10,
    margin: 20,
  },
  buttonText: {
    color: '#161C1C',
    fontSize: 18,
    fontWeight: 'normal',
  },
  androidShadow: {
    elevation: 4, // Add elevation for shadow on Android
  },
  iosShadow: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});

export default Survey;
