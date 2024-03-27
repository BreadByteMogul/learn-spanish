import React from "react";
import { View, TouchableOpacity } from "react-native";
import * as Haptics from "expo-haptics";
import Feather from "react-native-vector-icons/Feather";

function NavBar({ navigation }) {
  return (
    <View
      style={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "#f8f8f8",
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
          <Feather name="layers" size={22} color="#444" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#f8f8f8",
          width: "25%",
          height: 80,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          navigation.navigate("MyWords");
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.light);
        }}
      >
        <View style={{ marginBottom: 20 }}>
          <Feather name="bookmark" size={22} color="#444" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#f8f8f8",
          width: "25%",
          height: 80,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          navigation.navigate("Vocab");
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.light);
        }}
      >
        <View style={{ marginBottom: 20 }}>
          <Feather name="book" size={22} color="#444" />
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={{
          backgroundColor: "#f8f8f8",
          width: "25%",
          height: 80,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          navigation.navigate("Stats");
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.light);
        }}
      >
        <View style={{ marginBottom: 20 }}>
          <Feather name="bar-chart" size={22} color="#444" />
        </View>
      </TouchableOpacity> */}
    </View>
  );
}

export default NavBar;
