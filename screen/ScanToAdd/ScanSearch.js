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

export default function ScanSearch({navigation}) {
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

  const renderPlantItem = ({item}) => {
    const textColor = item.nextWatering ? '#1BBFA0' : '#E74C3C';

    return (
      <View>
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
                placeholder="Search Plant"
                autocorrect={false}
                autoCapitalize="none"
              />
            </View>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
            }}
            
            onPress={()=>{
                navigation.navigate("AddManuallyPlants")
            }}
            >
            <Text
              style={{
                fontSize: 14,
                color: '#161C1C',
                //   alignSelf: 'center',
                fontWeight: '700',
              }}>
              Can find it? Add your own
            </Text>
            <Image
              source={require('../../assets/ADDD.png')}
              style={{
                width: 24,
                height: 24,
                marginLeft: 10,
              }}></Image>
          </TouchableOpacity>

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
              Trending Plants
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
              height: 10,
            }}
          />

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
