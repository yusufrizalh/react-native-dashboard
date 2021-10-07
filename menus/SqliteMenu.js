import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../pages/HomeScreen";
import CreateUser from "../pages/CreateUser";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      /*screenOptions={{
        headerShown: false,
      }}*/
      initalRouteName="HomeScreen"
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "SQLite Home",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateUser"
        component={CreateUser}
        options={{ title: "Create User" }}
      />
    </Stack.Navigator>
  );
};

const SqliteMenu = () => {
  return <MyStack />;
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

export default SqliteMenu;
