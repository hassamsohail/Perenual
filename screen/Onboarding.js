import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView
} from 'react-native';

const { width } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    image: require('../assets/onboarding1.png'),
    title1: 'Identify any plants',
    title2: 'Click pictures of any plant, check out their names and care needs ',
  },
  {
    id: '2',
    image: require('../assets/onboarding2.png'),
    title1: 'Grow your garden with confidence',
    title2: 'Add your plants to the app and watch them grow',
  },
  {
    id: '3',
    image: require('../assets/onboarding3.png'),
    title1: 'Track watering easily',
    title2: 'Set reminder and make the best decisions for your plant',
  },

  // Add more slides if needed
];

const Onboarding = ({ navigation }) => {
  const flatListRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleNext = () => {
    if (currentSlideIndex < slides.length - 1) {
      const nextSlideIndex = currentSlideIndex + 1;
      flatListRef.current.scrollToIndex({ animated: true, index: nextSlideIndex });
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

  return (
       <ScrollView>
      <View
        style={{
          height: Dimensions.get('window').height,
          backgroundColor: '#F8F8F8',
        }}>
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={slides}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="cover"
            />

            <View style={{ height: 16 }} />
            <Text style={styles.title}>{item.title1}</Text>

            <View style={{ height: 16 }} />
            <Text style={styles.description}>{item.title2}</Text>
          </View>
        )}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentSlideIndex(newIndex);
        }}
      />
<View
style={{
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center",
  alignSelf:"center",
  width:"90%"
}}
>

<TouchableOpacity style={styles.nextButton} onPress={handleSkip}>
        <Text style={styles.buttonText}>
       Skip
        </Text>
      </TouchableOpacity>
<TouchableOpacity style={styles.nextButton1} onPress={handleNext}>
        <Text style={styles.buttonText1}>
          {currentSlideIndex === slides.length - 1 ? 'Next' : 'Next'}
        </Text>
      </TouchableOpacity>
</View>
      {/* <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.buttonText1}>Skip</Text>
      </TouchableOpacity> */}

    </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
    height: '60%',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#1BBFA0',
    marginBottom: 10,
    paddingHorizontal: 30,

    textAlign:"center"
  },
  description: {
    fontSize: 16,
    color: '#161C1C',
    textAlign: 'center',
    paddingHorizontal: 50,
  },
  skipButton: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  nextButton: {
    // backgroundColor: '#003399',
    width:"30%",

    // padding: 15,
    alignItems:"flex-start",
    borderRadius: 10,
    margin: 20,
    // alignItems: 'center',
  },
  nextButton1: {
    // backgroundColor: '#003399',
    width:"30%",

    // padding: 15,
    alignItems:"flex-end",
    borderRadius: 10,
    margin: 20,
    // alignItems: 'center',
  },
  buttonText: {
    color: '#161C1C',
    fontSize: 18,
    // fontWeight: 'bold',
    fontWeight: "normal",
  },
  buttonText1: {
    color: '#1BBFA0',
    fontSize: 18,
    fontWeight: "normal",

  },
});

export default Onboarding;
