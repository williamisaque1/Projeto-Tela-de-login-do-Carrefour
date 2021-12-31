//import { StatusBar } from "expo-status-bar";
//<StatusBar style="auto" />
import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { Apps } from "./src/index";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F6F7" />
      <Apps />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
