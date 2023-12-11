import React from "react";
import { Text, View, SafeAreaView, ScrollView, FlatList } from "react-native";

function TotalVocab() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: "100%",
        alignItems: "center",
      }}
    >
      <View style={{ flex: 1, width: "100%" }}>
        <MyVocabFlatList />
      </View>
    </SafeAreaView>
  );
}

const VocabWord = ({ word }) => {
  return (
    <View
      style={{
        width: "100%",
        height: 80,
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f8f8",
        borderTopColor: "#d2d2d2",
        borderTopWidth: 1,
        borderBottomColor: "#d2d2d2",
        borderBottomWidth: 1,
      }}
    >
      <Text>{word}</Text>
    </View>
  );
};

const components = [
  <VocabWord word="azucar" key="1" />,
  <VocabWord word="pan" key="2" />,
  // ... more components
];

const MyVocabFlatList = () => {
  return (
    <FlatList
      data={components}
      renderItem={({ item }) => item}
      keyExtractor={(item) => item.key}
    />
  );
};

export default TotalVocab;
