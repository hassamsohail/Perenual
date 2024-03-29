import React, { useState } from 'react';
import RangeSlider from '@gilbarbara/react-range-slider';
import { View } from 'react-native';
// import '@gilbarbara/react-range-slider/dist/index.css'; // Import the default styles

const SliderR = () => {
  const [value, setValue] = useState([50]); // Initial value

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <View>
      <RangeSlider
        min={0} // Minimum value
        max={100} // Maximum value
        value={value} // Current value
        onChange={handleChange} // Function to handle value change
      />
    </View>
  );
};

export default SliderR;
