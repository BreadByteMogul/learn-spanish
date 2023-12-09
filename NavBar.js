import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as Haptics from "expo-haptics";

function NavBar({ navigation }) {
  return (
    <View
      style={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
        flexDirection: "row",
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "yellow",
          width: "25%",
          height: 80,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          navigation.navigate("Cards");
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.light);
        }}
      >
        <View style={{ marginBottom: 20 }}>
          <Text>C</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "pink",
          width: "25%",
          height: 80,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          navigation.navigate("MyWords");
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.light);
          console.log("go MyWords plz");
        }}
      >
        <View style={{ marginBottom: 20 }}>
          <Text>W</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "orange",
          width: "25%",
          height: 80,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          navigation.navigate("Vocab");
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.light);
          console.log("go Vocab plz");
        }}
      >
        <View style={{ marginBottom: 20 }}>
          <Text>V</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "purple",
          width: "25%",
          height: 80,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          navigation.navigate("Stats");
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.light);
          console.log("go Stats plz");
        }}
      >
        <View style={{ marginBottom: 20 }}>
          <Text>S</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default NavBar;
