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

import LinearGradient from 'react-native-linear-gradient';

export default function ScanToAdd({navigation}) {



  
  const data = [
    {
      id: '1',
      name: 'Rubber plant',
      scientificName: 'Peperomia obtusifolia',
      imageSource: require('../assets/PS.png'),
    },
    {
      id: '2',
      name: 'Rubber plant',
      scientificName: 'Peperomia obtusifolia',
      imageSource: require('../assets/PS.png'),
    },
    {
      id: '3',
      name: 'Rubber plant',
      scientificName: 'Peperomia obtusifolia',
      imageSource: require('../assets/PS.png'),
    },
    {
      id: '4',
      name: 'Rubber plant',
      scientificName: 'Peperomia obtusifolia',
      imageSource: require('../assets/PS.png'),
    },
    // Add more data objects for additional items
  ];
  const renderItem = ({ item }) => (
    <View
      style={{
        width: '47%',
        height: 180,
        backgroundColor: '#fff',
        elevation: 5,
        borderRadius: 16,
        margin: '1.5%', // Add a small margin between items
      }}>
      <Image
        source={item.imageSource}
        style={{
          width: '100%',
          height: 109,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
      />
      <Text
        style={{
          fontSize: 14,
          color: '#161C1C',
          fontWeight: '700',
          paddingHorizontal: 10,
          paddingTop: 10,
        }}>
        {item.name}
      </Text>
      <Text
        style={{
          fontSize: 12,
          color: '#1BBFA0',
          paddingLeft: 10,
        }}>
        {item.scientificName}
      </Text>
    </View>
  );
 

  return (
    <View
      style={{
        flex: 1, // Set the flex to 1
        backgroundColor: 'white',
      }}>
      <LinearGradient
        colors={['#fff', '#fff']}
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
              navigation.goBack()
          }}
          >
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

          <View
            style={{
              height: 20,
            }}
          />
         

         <Text
                style={{
                  fontSize: 20,
                  color: '#161C1C',
                  alignSelf: 'center',
                  textAlign: 'center',
                }}>
               Scan Results
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: '#9B9B9B',
                  alignSelf: 'center',
                  textAlign: 'center',
                }}>
          Plant scanner found some plants matching your search
              </Text>
              
          <View
            style={{
              height: 20,
            }}
          />
           <FlatList
      data={data}
      numColumns={2} // Set the number of columns to 2 for a two-column layout
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />

        </View>
       <View
       style={{
        position:"absolute",
        bottom:0,
width:"100%"
       }}
       >

            <TouchableOpacity 
            onPress={()=>{
              navigation.navigate("ScanSearch")
            }}
            
            style={styles.button1}>
              <Text style={styles.buttonText1}>Search by Name</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} >
              <Text style={styles.buttonText}>Scan Again</Text>
            </TouchableOpacity>
       </View>
       
       
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
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
  button1: {
    width: '90%',
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
