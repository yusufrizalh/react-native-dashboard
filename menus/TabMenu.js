import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import TabSatu from "../tabs/TabSatu";
import TabDua from "../tabs/TabDua";
import TabTiga from "../tabs/TabTiga";

const Tab = createMaterialBottomTabNavigator();

const MyTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#ffffff"
      inactiveColor="#333333"
      barStyle={{ backgroundColor: "#de3421" }}
    >
      <Tab.Screen
        name="TabSatu"
        component={TabSatu}
        options={{
          tabBarLabel: "TabSatu",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="TabDua"
        component={TabDua}
        options={{
          tabBarLabel: "TabDua",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="TabTiga"
        component={TabTiga}
        options={{
          tabBarLabel: "TabTiga",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const TabMenu = () => {
  return <MyTab />;
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

export default TabMenu;
