import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const MyButton = (props) => {
  return (
    <TouchableOpacity style={myStyle.button} onPress={props.customClick}>
      <Text style={myStyle.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const myStyle = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#de3421",
    color: "#ffffff",
    padding: 10,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
  },
  text: {
    color: "#ffffff",
  },
});

export default MyButton;
