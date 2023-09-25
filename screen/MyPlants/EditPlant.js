import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Modal,
  ScrollView,
  Dimensions,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';
import FormInput2 from '../../Components/FormInput2';

export default function EditPlant({navigation}) {
  const [PlantName, setPlantName] = React.useState();
  const [Plot, setPlot] = React.useState();
  const [Soil, setSoil] = React.useState();
  const [Location, setLocation] = React.useState();
  const [search, setsearch] = React.useState();
  const [search1, setsearch1] = React.useState();

  const [search2, setsearch2] = React.useState();

  const [search3, setsearch3] = React.useState();


  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

  const handleDeletePress = () => {
    // Show the delete confirmation modal
    setDeleteModalVisible(true);
  };

  const handleDeleteConfirmed = () => {
    // Perform the delete action here
    // After deletion is complete, close the modal
    setDeleteModalVisible(false);
  };

  const handleCancelDelete = () => {
    // Close the modal without deleting
    setDeleteModalVisible(false);
  };

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

  // Use the useEffect hook to navigate to the "Survey" screen after 10 seconds

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
        
        <Modal
          animationType="slide"
          transparent={true}
          visible={isDeleteModalVisible}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text>Are you sure you want to delete?</Text>
              <TouchableOpacity onPress={handleDeleteConfirmed}>
                <Text style={styles.deleteButton}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCancelDelete}>
                <Text style={styles.cancelButton}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View
          style={
            {
              //   height: 20,
            }
          }
        />
        <Text
          style={{
            fontSize: 16,
            color: '#161C1C',
            fontWeight: '500',
            textAlign: 'center',
          }}>
          Edit Plant Details
        </Text>

        <View
          style={{
            height: 40,
          }}
        />

       

        <TouchableOpacity
          onPress={openImagePicker}
          style={{
            height: 240,
            width: '100%',
            alignSelf: 'center',
            backgroundColor: '#DEF2ED',
            justifyContent: 'center',
          }}>
          {imageUri ? (
            <Image
              source={{uri: imageUri}}
              style={{
                width: '100%',
                height: '100%',
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
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
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                height: 240,
              }}>
              <Image
                source={require('../../assets/Group.png')}
                style={{
                  width: '70%',
                  marginTop: 70,
                  height: 131.16,
                }}
              />
            </View>
          )}
        </TouchableOpacity>
        <View
          style={{
            height: 20,
          }}
        />
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#161C1C',
              fontWeight: '500',
            }}>
            General Info
          </Text>
        </View>
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
          <FormInput2
            // style={styles.input}
            onChangeText={PlantName => setPlantName(PlantName)}
            // value={text}
            labelValue={PlantName}
            // secureTextEntry={true}
            // keyboardType="email-address"
            placeholder="Plant Name"
            autoCapitalize="none"
            autocorrect={false}
          />

          <FormInput2
            // style={styles.input}
            onChangeText={Plot => setPlot(Plot)}
            // value={text}
            labelValue={Plot}
            // secureTextEntry={true}
            // keyboardType="email-address"
            placeholder="Pot Size: 3*8 in"
            autoCapitalize="none"
            autocorrect={false}
          />
          <View>
            <FormInput2
              // style={styles.input}
              onChangeText={Soil => setSoil(Soil)}
              // value={text}
              labelValue={Soil}
              // secureTextEntry={true}
              // keyboardType="email-address"
              placeholder="Soil Type: Rich Potting Soil"
              autoCapitalize="none"
              autocorrect={false}
            />
          </View>

          <FormInput2
            // style={styles.input}
            onChangeText={Location => setLocation(Location)}
            // value={text}
            labelValue={Location}
            // secureTextEntry={true}
            // keyboardType="email-address"
            placeholder="Plant Location: Not set"
            autoCapitalize="none"
            autocorrect={false}
          />
          <Text
            style={{
              fontSize: 16,
              color: '#161C1C',
              fontWeight: '500',
            }}>
            Characteristics
          </Text>

          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              marginTop: 20,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: '100%',
                // borderWidth: 1,
                borderColor: '#E0E0E0',
                height: 56,
                backgroundColor: '#fff',
                borderRadius: 16,
                paddingLeft: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/N.png')}
                style={{
                  width: 32,
                  height: 32,
                }}></Image>
              <TextInput
                style={{
                  borderColor: '#FFB800',
                  borderRadius: 5,
                  // padding: 10,
                  //   margin: 10,

                  // height: 53,
                  height: 44,

                  width: '100%',
                  marginLeft: 5,
                  color: '#000000',
                }}
                onChangeText={text => setsearch(text)}
                placeholderTextColor="#969696"
                value={search}
                placeholder="Height: Not set"
                autocorrect={false}
                autoCapitalize="none"
              />
            </View>
          </View>

          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              marginTop: 20,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: '100%',
                // borderWidth: 1,
                borderColor: '#E0E0E0',
                height: 56,
                backgroundColor: '#fff',
                borderRadius: 16,
                paddingLeft: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/W.png')}
                style={{
                  width: 32,
                  height: 32,
                }}></Image>
              <TextInput
                style={{
                  borderColor: '#FFB800',
                  borderRadius: 5,
                  // padding: 10,
                  //   margin: 10,

                  // height: 53,
                  height: 44,

                  width: '100%',
                  marginLeft: 5,
                  color: '#000000',
                }}
                onChangeText={text => setsearch1(text)}
                placeholderTextColor="#969696"
                value={search1}
                placeholder="Height: Not set"
                autocorrect={false}
                autoCapitalize="none"
              />
            </View>
          </View>
          
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              marginTop: 20,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: '100%',
                // borderWidth: 1,
                borderColor: '#E0E0E0',
                height: 56,
                backgroundColor: '#fff',
                borderRadius: 16,
                paddingLeft: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/L.png')}
                style={{
                  width: 32,
                  height: 32,
                }}></Image>
              <TextInput
                style={{
                  borderColor: '#FFB800',
                  borderRadius: 5,
                  // padding: 10,
                  //   margin: 10,

                  // height: 53,
                  height: 44,

                  width: '100%',
                  marginLeft: 5,
                  color: '#000000',
                }}
                onChangeText={text => setsearch2(text)}
                placeholderTextColor="#969696"
                value={search2}
                placeholder="Height: Not set"
                autocorrect={false}
                autoCapitalize="none"
              />
            </View>
          </View>
          
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              marginTop: 20,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: '100%',
                // borderWidth: 1,
                borderColor: '#E0E0E0',
                height: 56,
                backgroundColor: '#fff',
                borderRadius: 16,
                paddingLeft: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/H.png')}
                style={{
                  width: 32,
                  height: 32,
                }}></Image>
              <TextInput
                style={{
                  borderColor: '#FFB800',
                  borderRadius: 5,
                  // padding: 10,
                  //   margin: 10,

                  // height: 53,
                  height: 44,

                  width: '100%',
                  marginLeft: 5,
                  color: '#000000',
                }}
                onChangeText={text => setsearch3(text)}
                placeholderTextColor="#969696"
                value={search3}
                placeholder="Height: Not set"
                autocorrect={false}
                autoCapitalize="none"
              />
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
    width: '100%',
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  deleteButton: {
    color: 'red',
    marginTop: 10,
  },
  cancelButton: {
    color: 'blue',
    marginTop: 10,
  },
});
