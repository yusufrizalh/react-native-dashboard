import React from "react";
import { View, Text, SafeAreaView } from "react-native";

import MyButton from "./components/MyButton";
import MyText from "./components/MyText";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <View style={{ flex: 1 }}>
          <MyText text="SQLite Database" />
          <MyButton
            title="Create User"
            customClick={() => navigation.navigate("CreateUser")}
          />
          <MyButton title="View All User" />
          <MyButton title="View User" />
          <MyButton title="Update User" />
          <MyButton title="Delete User" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
