import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import * as Haptics from "expo-haptics";
import Feather from "react-native-vector-icons/Feather";

function Card({ word }) {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "60%",
        backgroundColor: "#f8f8f8",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            width: 120,
            height: 60,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
          onPress={() => {
            console.log("audio");
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.light);
          }}
        >
          {/* <Feather
            name="volume-2"
            size={20}
            color="black"
            style={{ marginRight: 6 }}
          />
          <Text style={{ fontSize: 22 }}>audio</Text> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 120,
            height: 60,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
          onPress={() => {
            console.log("flip");
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.light);
          }}
        >
          <Text style={{ fontSize: 22, marginRight: 4 }}>flip</Text>
          <Feather
            name="rotate-cw"
            size={20}
            color="black"
            style={{ marginLeft: 3 }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          width: "100%",
        }}
      >
        <Text style={{ fontSize: 34, fontWeight: "bold" }}>{word}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            width: 120,
            height: 60,
            alignItems: "center",
            justifyContent: "center",

            flexDirection: "row",
          }}
          onPress={() => {
            console.log("forgot");
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.light);
          }}
        >
          <Feather
            name="x"
            size={22}
            color="black"
            style={{ marginRight: 3 }}
          />

          <Text style={{ fontSize: 22 }}>forgot</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 120,
            height: 60,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
          onPress={() => {
            console.log("know it");
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.light);
          }}
        >
          <Text style={{ fontSize: 22 }}>know it </Text>
          <Feather name="arrow-right" size={22} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Card;
