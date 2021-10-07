import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TabDua = () => {
  return (
    <View style={myStyle.container}>
      <Text style={myStyle.normalText}>Tab Dua</Text>
    </View>
  );
};

const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  normalText: {
    fontSize: 18,
    color: "#de3421",
    justifyContent: "center",
  },
});

export default TabDua;
