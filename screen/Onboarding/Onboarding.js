import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';

const { width } = Dimensions.get('window');

const Onboarding = ({ navigation }) => {
  const scrollViewRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleNext = () => {
    if (currentSlideIndex < 2) { // Assuming you have 3 slides
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

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentSlideIndex(newIndex);
        }}
      >
        {/* Slide 1 */}
        <View style={styles.slide}>
          <Image source={require('../../assets/onboarding1.png')} style={styles.image} resizeMode="cover" />
          <View style={{ height: 16 }} />
          <Text style={styles.title}>Identify any plants</Text>
          <View style={{ height: 16 }} />
          <Text style={styles.description}>Click pictures of any plant, check out their names and care needs</Text>
        </View>

        {/* Slide 2 */}
        <View style={styles.slide}>
          <Image source={require("../../assets/onboarding2.png")} style={styles.image} resizeMode="cover" />
          <View style={{ height: 16 }} />
          <Text style={styles.title}>Grow your garden with confidence</Text>
          <View style={{ height: 16 }} />
          <Text style={styles.description}>Add your plants to the app and watch them grow</Text>
        </View>

        {/* Slide 3 */}
        <View style={styles.slide}>
          <Image source={require('../../assets/onboarding3.png')} style={styles.image} resizeMode="cover" />
          <View style={{ height: 16 }} />
          <Text style={styles.title}>Track watering easily</Text>
          <View style={{ height: 16 }} />
          <Text style={styles.description}>Set reminder and make the best decisions for your plant</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {currentSlideIndex === 2 ? 'Next' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
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
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#161C1C',
    textAlign: 'center',
    paddingHorizontal: 50,
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
});

export default Onboarding;
