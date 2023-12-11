import React from "react";
import { Text, View, SafeAreaView } from "react-native";

function TotalVocab() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "blue",
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Total Vocab</Text>
    </SafeAreaView>
  );
}

export default TotalVocab;
