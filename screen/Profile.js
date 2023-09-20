import {View, Text, ScrollView, TouchableOpacity, Image, Switch} from 'react-native';
import React, {useState} from 'react';

export default function Profile({navigation}) {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const toggleSwitch = () => {
    setIsSwitchOn((previousState) => !previousState);
  };
  const [isSwitchOn1, setIsSwitchOn1] = useState(false);

  const toggleSwitch1 = () => {
    setIsSwitchOn1((previousState) => !previousState);
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
              source={require('../assets/ArrowLeft.png')}
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
          //   onPress={}
        >
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
              source={require('../assets/editt.png')}
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

        <Image
          style={{
            height: 80,
            width: 80,
            alignSelf: 'center',
            marginTop: 10,
          }}
          source={require('../assets/user.png')}></Image>
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
            navigation.navigate('Subscription');
          }}>
          <Image
            style={{
              height: 75,
              width: '90%',
              borderRadius: 16,
              alignSelf: 'center',
              marginTop: 10,
            }}
            source={require('../assets/subscribe.png')}></Image>
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
                    source={require('../assets/location.png')}></Image>
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
                    source={require('../assets/earth.png')}></Image>
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
                    source={require('../assets/Paint.png')}></Image>
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
        trackColor={{ false: "#767577", true: "#1BBFA0" }}
        thumbColor={isSwitchOn1 ? "#ffffff" : "#f4f3f4"}
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
                    source={require('../assets/Weather.png')}></Image>
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
        trackColor={{ false: "#767577", true: "#1BBFA0" }}
        thumbColor={isSwitchOn ? "#ffffff" : "#f4f3f4"}
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
                    source={require('../assets/FA.png')}></Image>
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
                    source={require('../assets/Outline.png')}></Image>

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
                    source={require('../assets/SA.png')}></Image>
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
                    source={require('../assets/Outline.png')}></Image>
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
                    source={require('../assets/Weather.png')}></Image>
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
                    source={require('../assets/Outline.png')}></Image>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
