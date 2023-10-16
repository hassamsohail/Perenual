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
  const handleRadioSelect4 = index => {
    setSelectedRadio4(index);
  };
  const plantData = [
    {
      id: '1',
      image: require('../../assets/Plant1.png'),
      location: 'Not in a plant room',
      name: "Bird's Aspleniaceae",
      nextWatering: 'Watering done!',
    },
   

    // Add more plant data objects as needed
  ];
  const [data5, setData5] = useState([
    {
      id: '1',
      name: 'Watering',
      image: require('../../assets/icon1.png'),
      expanded: true,
    },
    {
      id: '2',
      name: 'Fertilizer',
      image: require('../../assets/icon4.png'),
      expanded: true,
    },
    // {
    //   id: '3',
    //   name: 'Pruning',
    //   image: require('../../assets/P.png'),
    //   expanded: true,
    // },
    // Add more data items as needed
  ]);

  const toggleViewHeight = index => {
    const newData = [...data5];
    newData[index].expanded = !newData[index].expanded;
    setData5(newData);
  };
 
  const [selectedRadio4, setSelectedRadio4] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const renderPlantItem = ({item}) => {
    const textColor = item.nextWatering ? '#1BBFA0' : '#E74C3C';
    const checkboxColor = isChecked ? '#1BBFA0' : '#CCCCCC';

    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16,
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
                color: textColor,
              }}>
              {item.nextWatering || item.OverdueWatering}
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={toggleCheckbox}>
          <View
            style={{
              height: 19.5,
              width: 19.5,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: checkboxColor,
              borderRadius: 19.5,
            }}>
            {isChecked ? (
              <Image
                source={require('../../assets/CheckBox.png')}
                style={{
                  width: 12,
                  height: 12,
                }}
              />
            ) : (
              <Image
                source={require('../../assets/CheckBox.png')}
                style={{
                  width: 12,
                  height: 12,
                }}
              />
            )}
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const data4 = [
    {id: '1', title: 'MO', data: '17'},
    {id: '2', title: 'TU', data: '18'},
    {id: '3', title: 'WE', data: '19'},

    {id: '4', title: 'TH', data: '20'},
    {id: '5', title: 'FR', data: '21'},
    {id: '6', title: 'SA', data: '22'},
    {id: '7', title: 'SU', data: '23'},

    // Add more data as needed
  ];
  return (
    <View
      style={{
        flex: 1,
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
            alignSelf: 'center',
            width: '90%',
          }}>
          <FlatList
            data={data4}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({item, index}) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => handleRadioSelect4(index)}
                style={{
                  alignItems: 'center',
                  width: 44,
                  marginLeft: 6,
                  height: 70,
                  backgroundColor: '#fff',
                  elevation: 5,
                  borderWidth: 1,
                  borderRadius: 20,
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
                    {item.data}
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
          renderItem={({item, index}) => (
            <View
              style={{
                marginBottom: 10,
                width: '90%',
                alignSelf: 'center',
                paddingLeft: 10,
                paddingTop: 23,
                flexDirection: 'row',
                height: item.expanded ? 160 : 77,
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
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      marginTop: 5,
                      fontSize: 16,
                      fontWeight: '600',
                      color: '#161C1C',
                    }}>
                    {item.name}
                  </Text>
                  <TouchableOpacity onPress={() => toggleViewHeight(index)}>
                    <Image
                      source={
                        item.expanded
                          ? require('../../assets/down.png')
                          : require('../../assets/right.png')
                      }
                      style={{
                        width: 24,
                        height: 24,
                        marginTop: 5,
                      }}
                    />
                  </TouchableOpacity>
                </View>
                {item.expanded && (
                  <View
                    style={{
                      height: 70,
                      width: '82%',
                      marginTop: 14,
                      marginLeft: -45,
                    }}>
                    <FlatList
                      data={plantData}
                      keyExtractor={item => item.id}
                      renderItem={renderPlantItem}
                    />
                  </View>
                )}
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
