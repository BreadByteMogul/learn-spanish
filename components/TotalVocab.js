import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import * as Haptics from "expo-haptics";
import Feather from "react-native-vector-icons/Feather";

function TotalVocab() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: "100%",
        alignItems: "center",
      }}
    >
      <View style={{ marginTop: 20, marginBottom: 10 }}>
        <Text style={{ fontSize: 34, fontWeight: "bold" }}>Add New Words</Text>
      </View>
      <View style={{ flex: 1, width: "100%" }}>
        <MyVocabFlatList />
      </View>
    </SafeAreaView>
  );
}

const VocabWord = ({ spanishWord, englishWord, onRemove }) => {
  return (
    <View
      style={{
        width: "100%",
        height: 80,
        marginTop: 20,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "left",
        backgroundColor: "#f8f8f8",
        borderTopColor: "#d2d2d2",
        borderTopWidth: 1,
        borderBottomColor: "#d2d2d2",
        borderBottomWidth: 1,
      }}
    >
      <View style={{ minWidth: "25%", paddingLeft: 20 }}>
        <Text style={{ fontSize: 20 }}>{spanishWord}</Text>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20 }}>{englishWord}</Text>
      </View>
      <TouchableOpacity
        style={{
          minWidth: "25%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingRight: 8,
          height: "100%",
          paddingLeft: 20,
        }}
        onPress={() => {
          console.log(
            `spanishWord: ${spanishWord} & the englishWord is: ${englishWord}`
          );
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.light);
          onRemove(spanishWord, englishWord);
        }}
      >
        <Feather name="plus" size={22} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const MyVocabFlatList = () => {
  const initialComponents = [
    { spanishWord: "azucar", englishWord: "sugar", key: "1" },
    { spanishWord: "pan", englishWord: "bread", key: "2" },
    { spanishWord: "supermercado", englishWord: "supermarket", key: "3" },
    { spanishWord: "manzana", englishWord: "apple", key: "4" },
    { spanishWord: "famila", englishWord: "family", key: "5" },
    { spanishWord: "camerara", englishWord: "waiter", key: "6" },
    { spanishWord: "el", englishWord: "him", key: "7" },
    { spanishWord: "me gusta", englishWord: "i like", key: "8" },
    { spanishWord: "te encanta", englishWord: "you love", key: "9" },
    { spanishWord: "gato", englishWord: "cat", key: "10" }, // Added an extra pair as an example
    // ... add more items here as needed ...
  ];

  const [words, setWords] = useState(initialComponents);

  const handleRemoveWord = (spanishWord, englishWord) => {
    setWords(
      words.filter(
        (word) =>
          word.spanishWord !== spanishWord || word.englishWord !== englishWord
      )
    );
  };

  return (
    <FlatList
      data={words}
      renderItem={({ item }) => (
        <VocabWord
          spanishWord={item.spanishWord}
          englishWord={item.englishWord}
          key={item.key}
          onRemove={handleRemoveWord}
        />
      )}
      keyExtractor={(item) => item.key}
    />
  );
};

export default TotalVocab;

// 1. When you press "plus" it needs to save the word to local memory
// 2. "It needs to delete the word from the list"
// 3.
