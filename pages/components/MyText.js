import React from "react";
import { Text, StyleSheet } from "react-native";

const MyText = (props) => {
  return <Text style={myStyle.text}>{props.text}</Text>;
};

const myStyle = StyleSheet.create({
  text: {
    color: "#000111",
    fontSize: 18,
    marginTop: 16,
    marginLeft: 36,
    marginRight: 36,
  },
});

export default MyText;
