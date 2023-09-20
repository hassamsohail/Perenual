import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const FormInput1 = ({
  labelValue,
  //   keyboardTyp,
  //   maxl,
  placeholderText,
  marginTo,
  ...rest
}) => {
  //   const [text, onChangeText] = React.useState("Useless Text");

  return (
    <View style={styles.inputContainer}>
      <TextInput
        // maxLength={maxl}
        value={labelValue}
        // style={styles.input}
        numberOfLines={1}
        // onChangeText={onChangeText}
        placeholder={placeholderText}
        // keyboardType={keyboardTyp}
        placeholderTextColor="#9B9B9B"
        color="#000"
        {...rest}
      />
    </View>
  );
};

export default FormInput1;

const styles = StyleSheet.create({
  inputContainer: {
    height: 56,
    width: "100%",
    marginVertical: 12,
    justifyContent:"center",
    // borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    // alignItems:"center",
    borderColor: "#DEF2ED",
    backgroundColor:"#DEF2ED"
  },

 
});
