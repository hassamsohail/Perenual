import React, {useState} from 'react';
import {View, Text} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

export default function Test() {
  //   const [value, setValue] = useState(50); // Initial value
  const [value, setValue] = useState(50); // Initial value

  const handleChange = newValue => {
    setValue(newValue[0]); // As we're using only one thumb, newValue is an array with one element
  };
  return (
    <View
      style={{
        
      }}>
        <MultiSlider
          values={[value]} // Current value (passed as an array)
          sliderLength={250} // Length of the slider
          onValuesChange={handleChange} // Function to handle value change
          min={0} // Minimum value
          max={250} // Maximum value
          // step={1} // Increment step
          allowOverlap={false} // Allow thumbs to overlap
          snapped={false} // Disable snapping to steps
          selectedStyle={{backgroundColor: '#1BBFA0'}} // Style for selected range
          unselectedStyle={{backgroundColor: '#C9C9C9'}} // Style for unselected range
          markerStyle={{backgroundColor: '#1BBFA0'}} // Style for thumb
        />
        
          <Text
              style={{
                textAlign:"center",
                fontSize: 16,
                color: '#13867B',
              }}>
              Height ≈ {value} in
            </Text>
    </View>
  );
}
