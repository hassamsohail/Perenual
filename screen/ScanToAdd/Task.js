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
import FormInput2 from '../../Components/FormInput2';

export default function Task({navigation}) {
  const [amount, setamount] = React.useState();
  const [frequency, setfrequency] = React.useState();
  const [Last, setLast] = React.useState();
  const [When, setWhen] = React.useState();

  const countries = [
    {country: '120 ML', code: '93', iso: 'AF'},
    {country: '130 ML', code: '355', iso: 'AL'},
    {country: '140 ML', code: '213', iso: 'DZ'},
  ];
  const SoilType = [
    {SoilType: 'Option 1'},
    {SoilType: 'Option 2'},
    {SoilType: 'Option 3'},
  ];
  const PlantLocation = [
    {PlantLocation: 'Option 1'},
    {PlantLocation: 'Option 2'},
    {PlantLocation: 'Option 3'},
  ];
  const [clicked, setClicked] = useState(false);
  const [data3, setData] = useState(countries);
  const [selectedCountry, setSelectedCountry] = useState('');

  const [clicked1, setClicked1] = useState(false);
  const [data1, setData1] = useState(SoilType.map(item => item.SoilType));
  const [selectedCountry1, setSelectedCountry1] = useState('');

  const [clicked2, setClicked2] = useState(false);
  const [data2, setData2] = useState(
    PlantLocation.map(item => item.PlantLocation),
  );
  const [selectedCountry2, setSelectedCountry2] = useState('');

  const data = [
    {
      id: '1',
      image: require('../../assets/Water.png'),
      label: 'Water',
    },
    {
      id: '2',
      image: require('../../assets/Prune.png'),
      label: 'Prune',
    },
    {
      id: '3',
      image: require('../../assets/Spray.png'),
      label: 'Spray',
    },
    {
      id: '4',
      image: require('../../assets/Clean.png'),
      label: 'Clean',
    },
    {
      id: '5',
      image: require('../../assets/Fertilize.png'),
      label: 'Fertilize',
    },
    // Add more data items as needed
  ];
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
          Task
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
              width: '100%',
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

        <Image
          source={require('../../assets/Tasks.png')}
          style={{
            width: '100%',
            //   marginLeft:10,

            height: 200,
          }}
        />
        <View
          style={{
            height: 20,
          }}
        />
        <View
          style={{
            width: '100%',
          }}>
          <FlatList
            data={data}
            horizontal={true} // Set horizontal to true for horizontal scrolling
            contentContainerStyle={{
              width: '100%',
              paddingHorizontal: 18,
              // alignSelf: 'center',
              height: 65,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 10,
                  backgroundColor: '#fff',
                  elevation: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={item.image}
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: '#9B9B9B',
                    textAlign: 'center',
                  }}>
                  {item.label}
                </Text>
              </View>
            )}
          />
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
            }}>
            <View
              style={{
                height: 10,
              }}
            />
            <View>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 56,
                  borderRadius: 10,
                  // borderWidth: 0.5,
                  alignSelf: 'center',
                  // marginTop: 100,
                  flexDirection: 'row',
                  backgroundColor: '#FFFFFF',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingLeft: 15,
                  paddingRight: 15,
                }}
                onPress={() => {
                  setClicked(!clicked);
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Text style={{fontWeight: '400', color: '#1BBFA0'}}>
                    Water amount:
                  </Text>
                  <Text
                    style={{
                      fontWeight: '400',
                      color: '#161C1C',
                      marginLeft: 2,
                    }}>
                    {selectedCountry == '' ? 'Not Set' : selectedCountry}
                  </Text>
                </View>
                {clicked ? (
                  <Image
                    source={require('../../assets/down.png')}
                    style={{width: 24, height: 24}}
                  />
                ) : (
                  <Image
                    source={require('../../assets/Downarrow.png')}
                    style={{width: 24, height: 24}}
                  />
                )}
              </TouchableOpacity>
              {clicked ? (
                <View
                  style={{
                    elevation: 2,
                    marginTop: 10,
                    //  padding:3
                    // ,
                    // height: 300,
                    alignSelf: 'center',
                    width: '100%',
                    backgroundColor: '#fff',
                    borderRadius: 10,
                  }}>
                  {data3.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      style={{
                        width: '85%',
                        alignSelf: 'center',
                        height: 50,
                        justifyContent: 'center',
                        // borderBottomWidth: 0.5,
                        borderColor: '#8e8e8e',
                      }}
                      onPress={() => {
                        setSelectedCountry(item.country);
                        setClicked(!clicked);
                      }}>
                      <Text style={{fontWeight: '600'}}>{item.country}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              ) : null}
            </View>
            <FormInput2
              // style={styles.input}
              onChangeText={frequency => setfrequency(frequency)}
              // value={text}
              labelValue={frequency}
              // secureTextEntry={true}
              // keyboardType="email-address"
              placeholder="Water frequency"
              autoCapitalize="none"
              autocorrect={false}
            />

            <View>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 56,
                  borderRadius: 10,
                  // borderWidth: 0.5,
                  alignSelf: 'center',
                  // marginTop: 100,
                  flexDirection: 'row',
                  backgroundColor: '#FFFFFF',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingLeft: 15,
                  paddingRight: 15,
                }}
                onPress={() => {
                  setClicked1(!clicked1);
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontWeight: '400',
                      color: selectedCountry1 ? '#161C1C' : '#9B9B9B',

                      marginLeft: 2,
                    }}>
                    {selectedCountry1 == ''
                      ? 'Last time watered'
                      : selectedCountry1}
                  </Text>
                </View>
                {clicked1 ? (
                  <Image
                    source={require('../../assets/down.png')}
                    style={{width: 24, height: 24}}
                  />
                ) : (
                  <Image
                    source={require('../../assets/Downarrow.png')}
                    style={{width: 24, height: 24}}
                  />
                )}
              </TouchableOpacity>
              {clicked1 ? (
                <View
                  style={{
                    elevation: 2,
                    marginTop: 10,
                    //  padding:3
                    // ,
                    // height: 300,
                    alignSelf: 'center',
                    width: '100%',
                    backgroundColor: '#fff',
                    borderRadius: 10,
                  }}>
                  {data1.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      style={{
                        width: '85%',
                        alignSelf: 'center',
                        height: 50,
                        justifyContent: 'center',
                        // borderBottomWidth: 0.5,
                        borderColor: '#8e8e8e',
                      }}
                      onPress={() => {
                        setSelectedCountry1(item);
                        setClicked1(!clicked1);
                      }}>
                      <Text style={{fontWeight: '600'}}>{item}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              ) : null}
            </View>
            <View
              style={{
                height: 10,
              }}
            />
            <View>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 56,
                  borderRadius: 10,
                  // borderWidth: 0.5,
                  alignSelf: 'center',
                  // marginTop: 100,
                  flexDirection: 'row',
                  backgroundColor: '#FFFFFF',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingLeft: 15,
                  paddingRight: 15,
                }}
                onPress={() => {
                  setClicked2(!clicked2);
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontWeight: '400',
                      color: selectedCountry2 ? '#161C1C' : '#9B9B9B',

                      marginLeft: 2,
                    }}>
                    {selectedCountry2 == ''
                      ? 'When do you prefer to take care of plants'
                      : selectedCountry2}
                  </Text>
                </View>
                {clicked2 ? (
                  <Image
                    source={require('../../assets/down.png')}
                    style={{width: 24, height: 24}}
                  />
                ) : (
                  <Image
                    source={require('../../assets/Downarrow.png')}
                    style={{width: 24, height: 24}}
                  />
                )}
              </TouchableOpacity>
              {clicked2 ? (
                <View
                  style={{
                    elevation: 2,
                    marginTop: 10,
                    //  padding:3
                    // ,
                    // height: 300,
                    alignSelf: 'center',
                    width: '100%',
                    backgroundColor: '#fff',
                    borderRadius: 10,
                  }}>
                  {data2.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      style={{
                        width: '85%',
                        alignSelf: 'center',
                        height: 50,
                        justifyContent: 'center',
                        // borderBottomWidth: 0.5,
                        borderColor: '#8e8e8e',
                      }}
                      onPress={() => {
                        setSelectedCountry2(item);
                        setClicked2(!clicked2);
                      }}>
                      <Text style={{fontWeight: '600'}}>{item}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              ) : null}
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('ScanSearch');
          }}>
          <Text style={styles.buttonText}>Add to My Plants</Text>
        </TouchableOpacity>
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
