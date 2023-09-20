import { View,  Text,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    FlatList,
    Modal,
    ImageBackground, } from 'react-native'
import React , {useState}from 'react'

export default function Plantsdetail2() {
  return (
    <ScrollView
    contentContainerStyle={{
      flexGrow: 1,
      flex:1,
      alignItems: 'center',
      backgroundColor: '#F8F8F8',
    }}>
        <View
        style={{
          width: '90%',
          alignSelf: 'center',
        //   position: 'absolute',
        justifyContent:"space-between",
          zIndex: 2,
          flexDirection:"row",
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
              source={require('../assets/ArrowLeft.png')}
              style={{
                width: 8,
                height: 15,
              }}
            />
          </View>
        </TouchableOpacity>
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
              source={require('../assets/Settings.png')}
              style={{
                width: 24,
                height: 24,
              }}
            />
          </View>
        </TouchableOpacity>
        
      </View>


      <ImageBackground
              source={require('../assets/Bg.png')}
              style={{
                width: "100%",
                marginTop:-60,
                height: 340,
              }}
            >

<Text
              style={{
                fontSize: 20,
                color: '#FFFFFF',
                fontWeight: 'bold',
                position:"absolute",
                alignSelf:"center",
                bottom:80
                // marginLeft: 6,
              }}>
           Silver Pothos
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#FFFFFF',
                // fontWeight: 'bold',
                position:"absolute",
                alignSelf:"center",
                bottom:60
                // marginLeft: 6,
              }}>
           Scindapsus silvery anne
            </Text>
            </ImageBackground>
<View
style={{
    width:"100%",
    borderTopLeftRadius:40, borderTopRightRadius:40,
    backgroundColor:"#F8F8F8",
    marginTop:-40,
    height:"70%"
}}
>
    <View
    style={{
    marginTop:20
    }}
    />
<View
style={{
    alignSelf:"center",
    width:"90%",
    height:43, backgroundColor:"#DEF2ED",
    borderRadius:20
}}
>

</View>
</View>
    <View
      style={{
        height: 10,
      }}
    />
    </ScrollView>
  )
}