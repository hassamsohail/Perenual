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

export default function Plant({navigation}) {
  const [data5, setData5] = useState([
    {
      id: '1',
      name: 'How to grow',
      image: require('../assets/How.png'),
      expanded: false,
      Description:
        'These plants like to be mostly dry between waterings due to their thick leaves. Water when 75% of the soil volume is dry. Always water through and discard any excess water in the saucer to discourage root rot. Your Silver Satin Pothos does well in average household humidity.',
      Status1: 'Medium',
      StatusColorbg1: '#E6F4F0',
      Statustext1: '#13867B',
      Status2: 'Medium',
      StatusColorbg2: '#F8F8F8',
      Statustext2: '#F8F8F8',
      marginVertical: 8,

      //   Status2: '',
    },
    {
      id: '2',
      name: 'Watering',
      image: require('../assets/Wat.png'),
      expanded: false,
      Description:
        'These plants like to be mostly dry between waterings due to their thick leaves. Water when 75% of the soil volume is dry. Always water through and discard any excess water in the saucer to discourage root rot. Your Silver Satin Pothos does well in average household humidity.',
      Status1: 'Every 7-10 days',
      StatusColorbg1: '#E6F4F0',
      Statustext1: '#13867B',
      Status2: '240 ml a week',
      StatusColorbg2: '#E6F4F0',
      Statustext2: '#13867B',
      marginVertical: 8,

      //   Status2: '',
    },
    {
      id: '3',
      name: 'Lighting',
      image: require('../assets/Lig.png'),
      expanded: false,
      Description:
        'These plants like to be mostly dry between waterings due to their thick leaves. Water when 75% of the soil volume is dry. Always water through and discard any excess water in the saucer to discourage root rot. Your Silver Satin Pothos does well in average household humidity.',
      Status1: 'Bright Direct',
      StatusColorbg1: '#E6F4F0',
      Statustext1: '#13867B',
      Status2: 'Medium',
      StatusColorbg2: '#F8F8F8',
      Statustext2: '#F8F8F8',
      marginVertical: 8,

      //   Status2: '',
    },
    {
      id: '4',
      name: 'Pruning',
      image: require('../assets/Pru.png'),
      expanded: false,
      Description:
        'These plants like to be mostly dry between waterings due to their thick leaves. Water when 75% of the soil volume is dry. Always water through and discard any excess water in the saucer to discourage root rot. Your Silver Satin Pothos does well in average household humidity.',
      Status1: 'Bright Direct',
      StatusColorbg1: '#F8F8F8',
      Statustext1: '#F8F8F8',
      Status2: 'Medium',
      StatusColorbg2: '#F8F8F8',
      Statustext2: '#F8F8F8',
      //   Status2: '',
    },
    {
      id: '5',
      name: 'Fertilizing',
      marginTop:-17,
      image: require('../assets/Fer.png'),
      expanded: false,
      Description:
        'These plants like to be mostly dry between waterings due to their thick leaves. Water when 75% of the soil volume is dry. Always water through and discard any excess water in the saucer to discourage root rot. Your Silver Satin Pothos does well in average household humidity.',
      Status1: 'Every 2 weeks',
      StatusColorbg1: '#E6F4F0',
      Statustext1: '#13867B',
      Status2: 'Medium',
      StatusColorbg2: '#F8F8F8',
      Statustext2: '#F8F8F8',
      marginVertical: 8,

      //   Status2: '',
    },
    {
      id: '6',
      name: 'Repotting',
      image: require('../assets/Rep.png'),
      expanded: false,
      Description:
        'These plants like to be mostly dry between waterings due to their thick leaves. Water when 75% of the soil volume is dry. Always water through and discard any excess water in the saucer to discourage root rot. Your Silver Satin Pothos does well in average household humidity.',
      Status1: 'Every 2 weeks',
      StatusColorbg1: '#E6F4F0',
      Statustext1: '#13867B',
      Status2: 'Medium',
      StatusColorbg2: '#F8F8F8',
      Statustext2: '#F8F8F8',
      marginVertical: 8,

      //   Status2: '',
    },
    {
      id: '7',
      name: 'Temperature and Humidity',
      image: require('../assets/Pru.png'),
      expanded: false,
      Description:
        'These plants like to be mostly dry between waterings due to their thick leaves. Water when 75% of the soil volume is dry. Always water through and discard any excess water in the saucer to discourage root rot. Your Silver Satin Pothos does well in average household humidity.',
      Status1: 'Bright Direct',
      StatusColorbg1: '#F8F8F8',
      Statustext1: '#F8F8F8',
      Status2: 'Medium',
      StatusColorbg2: '#F8F8F8',
      Statustext2: '#F8F8F8',
      //   Status2: '',
    },
    {
      id: '8',
      name: 'Propagating',
      image: require('../assets/Pro.png'),
      expanded: false,
      marginTop:-17
,
      Description:
        'These plants like to be mostly dry between waterings due to their thick leaves. Water when 75% of the soil volume is dry. Always water through and discard any excess water in the saucer to discourage root rot. Your Silver Satin Pothos does well in average household humidity.',
      Status1: 'Every 2 weeks',
      StatusColorbg1: '#E6F4F0',
      Statustext1: '#13867B',
      Status2: 'Medium',
      StatusColorbg2: '#F8F8F8',
      Statustext2: '#F8F8F8',
      marginVertical: 8,

      //   Status2: '',
    },
    {
      id: '9',
      name: 'Pets and diseases',
      image: require('../assets/Pet.png'),
      expanded: false,
      Description:
        'These plants like to be mostly dry between waterings due to their thick leaves. Water when 75% of the soil volume is dry. Always water through and discard any excess water in the saucer to discourage root rot. Your Silver Satin Pothos does well in average household humidity.',
      Status1: 'Bright Direct',
      StatusColorbg1: '#F8F8F8',
      Statustext1: '#F8F8F8',
      Status2: 'Medium',
      StatusColorbg2: '#F8F8F8',
      Statustext2: '#F8F8F8',
      //   Status2: '',
    },
    {
      id: '10',
      name: 'Temperature',
      marginTop:-17
 ,
      image: require('../assets/Temp.png'),
      expanded: false,
      Description:
        'These plants like to be mostly dry between waterings due to their thick leaves. Water when 75% of the soil volume is dry. Always water through and discard any excess water in the saucer to discourage root rot. Your Silver Satin Pothos does well in average household humidity.',
      Status1: 'From 20°F to 55°F',
      StatusColorbg1: '#E6F4F0',
      Statustext1: '#13867B',
      Status2: 'Medium',
      StatusColorbg2: '#F8F8F8',
      Statustext2: '#F8F8F8',
      marginVertical: 8,

      //   Status2: '',
    },
  ]);

  const toggleViewHeight = index => {
    const newData = [...data5];
    newData[index].expanded = !newData[index].expanded;
    setData5(newData);
  };


  return (
    <View
      contentContainerStyle={{
        // flex: 1,
        backgroundColor: 'white',
      }}>
      
        <FlatList
          data={data5}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <View
              style={{
                width: '100%',
                alignSelf: 'center',

                height: item.expanded ? 165 : 100,
marginTop:item.marginTop,
                backgroundColor: '#F8F8F8',
                borderRadius: 16,
              }}>
              <TouchableOpacity onPress={() => toggleViewHeight(index)}>
                <View
                  style={{
                    width: '100%',
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    justifyContent: 'space-between',
                    height: 48,
                    alignSelf: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                    // paddingTop: 9,

                    backgroundColor: '#F8F8F8',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={item.image}
                      style={{
                        height: 32,
                        width: 32,
                      }}
                    />
                    <Text
                      style={{
                        // marginTop: 5,
                        marginLeft: 10,
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#161C1C',
                      }}>
                      {item.name}
                    </Text>
                  </View>
                  <View>
                    <TouchableOpacity onPress={() => toggleViewHeight(index)}>
                      <Image
                        source={
                          item.expanded
                            ? require('../assets/Dowww.png')
                            : require('../assets/right.png')
                        }
                        style={{
                          width: 24,
                          height: 24,
                          // marginTop: 5,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
              {item.expanded ? (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 8,
                  }}>
                  <View
                    style={{
                      paddingHorizontal: 10,
                      height: 22,
                      backgroundColor: item.StatusColorbg1,
                      borderRadius: 8,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: item.Statustext1,
                        fontWeight: '400',
                        //   marginTop: 8,
                      }}>
                      {item.Status1}
                    </Text>
                  </View>
                  <View
                    style={{
                      //  width: 64,
                      paddingHorizontal: 10,
                      marginLeft: 10,
                      height: 22,
                      backgroundColor: item.StatusColorbg2,
                      borderRadius: 8,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: item.Statustext2,
                        fontWeight: '400',
                        //   marginTop: 8,
                      }}>
                      {item.Status2}
                    </Text>
                  </View>
                </View>
              ) : (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: item.marginVertical,
                  }}>
                  <View
                    style={{
                      paddingHorizontal: 10,

                      height: 22,
                      backgroundColor: item.StatusColorbg1,
                      borderRadius: 8,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: item.Statustext1,
                        fontWeight: '400',
                        //   marginTop: 8,
                      }}>
                      {item.Status1}
                    </Text>
                  </View>
                  <View
                    style={{
                      //  width: 64,
                      paddingHorizontal: 10,
                      marginLeft: 10,
                      height: 22,
                      backgroundColor: item.StatusColorbg2,
                      borderRadius: 8,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: item.Statustext2,
                        fontWeight: '400',
                        //   marginTop: 8,
                      }}>
                      {item.Status2}
                    </Text>
                  </View>
                </View>
              )}
              {item.expanded ? null : (
                <View
                  style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: '#EBEBEB',
                  }}
                />
              )}
              {item.expanded && (
                <View
                  style={{
                    // height: 48,
                    // paddingHorizontal: 20,

                    width: '100%',
                    // marginVertical: '3%',
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: 12,
                        color: '#9B9B9B',
                        fontWeight: '400',
                        //   marginTop: 8,
                      }}>
                      {item.Description}
                    </Text>
                  </View>
                </View>
              )}
            </View>
          )}
        />
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
