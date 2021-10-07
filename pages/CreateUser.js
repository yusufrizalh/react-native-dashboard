import React, { useState } from "react";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
} from "react-native";

import MyTextInput from "./components/MyTextInput";
import MyButton from "./components/MyButton";

const CreateUser = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <View style={{ flex: 1 }}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: "space-between" }}
            >
              <MyTextInput
                placeholder="Please enter your name"
                style={{ padding: 10 }}
              />
              <MyTextInput
                placeholder="Please enter your contact number"
                style={{ padding: 10 }}
                maxLength={10}
                keyboardType="numeric"
              />
              <MyTextInput
                placeholder="Please enter your address"
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{ textAlignVertical: "top", padding: 10 }}
              />
              <MyButton title="Create User" />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateUser;
