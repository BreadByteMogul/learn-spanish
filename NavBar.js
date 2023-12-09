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
      {/* <Button title="Details" onPress={() => navigation.navigate("Details")} /> */}
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
          navigation.navigate("Home");
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.light);
        }}
      >
        <View style={{ marginBottom: 20 }}>
          <Text>H</Text>
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
          navigation.navigate("Details");
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.light);
          console.log("go details plz");
        }}
      >
        <View style={{ marginBottom: 20 }}>
          <Text>D</Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: "orange",
          width: "25%",
          height: 80,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ marginBottom: 20 }}>
          <Text>S</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "purple",
          width: "25%",
          height: 80,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ marginBottom: 20 }}>
          <Text>S</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "cyan",
          width: "25%",
          height: 80,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ marginBottom: 20 }}>
          <Text>S</Text>
        </View>
      </View>
    </View>
  );
}

export default NavBar;
