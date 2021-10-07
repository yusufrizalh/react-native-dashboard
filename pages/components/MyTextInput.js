import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const MyTextInput = (props) => {
  return (
    <View style={myStyle.container}>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        placeholderTextColor="#000111"
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        style={props.style}
        blurOnSubmit={false}
        value={props.value}
      />
    </View>
  );
};

const myStyle = StyleSheet.create({
  container: {
    marginLeft: 36,
    marginRight: 36,
    marginTop: 10,
    borderColor: "#000111",
    borderWidth: 1,
  },
});

export default MyTextInput;
