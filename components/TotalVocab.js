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
import AsyncStorage from "@react-native-async-storage/async-storage";

// Creates the view container (device safe) and a title
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

// This is the basic N of 1 "Vocab Word" componenet, takes in data
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

//Creates a list of VocabWord components, handles read/write local storage
const MyVocabFlatList = () => {
  const [totalVocabulary, setTotalVocabulary] = useState([]);

  useEffect(() => {
    console.log("trigger useEffect");
    const loadVocabulary = async () => {
      try {
        const savedWords = await AsyncStorage.getItem("totalVocabulary");
        if (savedWords !== null) {
          setTotalVocabulary(JSON.parse(savedWords));
          console.log(`savedWords is not null`);
          // Calculate the difference between masterList and savedWords to initialize totalVocabulary
        } else {
          setTotalVocabulary(masterList); // First app launch
          console.log("savedWords is null");
        }
      } catch (error) {
        // Error retrieving data
      }
    };

    loadVocabulary();
  }, []);

  const handleRemoveWord = async (spanishWord, englishWord) => {
    // Find the item that is being removed
    const removedItem = totalVocabulary.find(
      (item) =>
        item.spanishWord === spanishWord && item.englishWord === englishWord
    );

    // Get the current myVocabulary from local storage
    const myVocabularyString = await AsyncStorage.getItem("myVocabulary");
    const myVocabulary = myVocabularyString
      ? JSON.parse(myVocabularyString)
      : [];

    // Check if the removed item is already in myVocabulary
    const isItemInMyVocabulary = myVocabulary.some(
      (item) =>
        item.spanishWord === removedItem.spanishWord &&
        item.englishWord === removedItem.englishWord
    );

    // If the removed item is not in myVocabulary, add it
    if (!isItemInMyVocabulary) {
      myVocabulary.push(removedItem);
      // Save myVocabulary back to local storage
      await AsyncStorage.setItem("myVocabulary", JSON.stringify(myVocabulary));
    }

    // Filter out the word from the totalVocabulary state
    const updatedVocabulary = totalVocabulary.filter(
      (word) =>
        word.spanishWord !== spanishWord || word.englishWord !== englishWord
    );

    console.log(`state before localSave: ${JSON.stringify(updatedVocabulary)}`);
    // Update the state
    setTotalVocabulary(updatedVocabulary);

    try {
      // Update the local storage
      await AsyncStorage.setItem(
        "totalVocabulary",
        JSON.stringify(updatedVocabulary)
      );
    } catch (error) {
      // Handle errors, e.g., log them or display an alert
      console.error("Error updating local storage:", error);
    }
  };

  return (
    <FlatList
      data={totalVocabulary}
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

//Master list of spanish words
const masterList = [
  {
    knownCount: 0,
    forgotCount: 0,
    spanishWord: "azucar",
    englishWord: "sugar",
    key: "1",
  },
  {
    knownCount: 0,
    forgotCount: 0,
    spanishWord: "pan",
    englishWord: "bread",
    key: "2",
  },
  {
    knownCount: 0,
    forgotCount: 0,
    spanishWord: "supermercado",
    englishWord: "supermarket",
    key: "3",
  },
  {
    knownCount: 0,
    forgotCount: 0,
    spanishWord: "manzana",
    englishWord: "apple",
    key: "4",
  },
  {
    knownCount: 0,
    forgotCount: 0,
    spanishWord: "famila",
    englishWord: "family",
    key: "5",
  },
  {
    knownCount: 0,
    forgotCount: 0,
    spanishWord: "camerara",
    englishWord: "waiter",
    key: "6",
  },
  {
    knownCount: 0,
    forgotCount: 0,
    spanishWord: "el",
    englishWord: "him",
    key: "7",
  },
  {
    knownCount: 0,
    forgotCount: 0,
    spanishWord: "me gusta",
    englishWord: "i like",
    key: "8",
  },
  {
    knownCount: 0,
    forgotCount: 0,
    spanishWord: "te encanta",
    englishWord: "you love",
    key: "9",
  },
  {
    knownCount: 0,
    forgotCount: 0,
    spanishWord: "gato",
    englishWord: "cat",
    key: "10",
  },
  // ... add more items here as needed ...
];

export default TotalVocab;

// 1. When you press "plus" it needs to save the word to local memory
// 2. "It needs to delete the word from the list"
// 3.
