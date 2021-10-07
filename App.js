import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import HomeMenu from "./menus/HomeMenu";
import AboutMenu from "./menus/AboutMenu";
import TabMenu from "./menus/TabMenu";
import SqliteMenu from "./menus/SqliteMenu";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeMenu"
        component={HomeMenu}
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: "#de3421",
          },
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="AboutMenu"
        component={AboutMenu}
        options={{
          title: "About",
          headerStyle: {
            backgroundColor: "#de3421",
          },
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="TabMenu"
        component={TabMenu}
        options={{
          title: "Tab",
          headerStyle: {
            backgroundColor: "#de3421",
          },
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="SQliteMenu"
        component={SqliteMenu}
        options={{
          title: "SQLite",
          headerStyle: {
            backgroundColor: "#de3421",
          },
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
