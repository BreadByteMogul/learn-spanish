import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import * as Haptics from "expo-haptics";
import Feather from "react-native-vector-icons/Feather";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Card({ refresh, setRefresh }) {
  const [wordState, setWordState] = useState([
    {
      englishWord: "pizza",
      forgotCount: 0,
      key: "4",
      knownCount: 0,
      priority: 1,
      spanishWord: "pizza",
    },
  ]);
  const [cardSide, setCardSide] = useState(true);

  useEffect(() => {
    const loadMyVocabulary = async () => {
      const myVocabularyString = await AsyncStorage.getItem("myVocabulary");
      if (myVocabularyString) {
        const myVocabulary = JSON.parse(myVocabularyString);
        setWordState(wordArrayHandler(myVocabulary, myVocabulary[0].key));
        console.log("wordState from async useEffects: ", wordState);
      }
    };

    loadMyVocabulary();
    console.log("wordState from useEffects: ", wordState);
  }, [refresh]);

  function determineCardSide() {
    if (wordState[0]) {
      if (cardSide) {
        return wordState[0].spanishWord;
      } else {
        return wordState[0].englishWord;
      }
    } else {
      return ""; // Return a default value if wordState[0] is undefined
    }
  }

  const increaseKnownCount = async (spanishWord, englishWord) => {
    // Get the current data from local storage
    const dataString = await AsyncStorage.getItem("myVocabulary");
    const data = dataString ? JSON.parse(dataString) : [];

    console.log("data at index 0:", data[0]);

    // Find the item and increase its knownCount
    const updatedData = data.map((item) => {
      if (
        item.spanishWord === spanishWord &&
        item.englishWord === englishWord
      ) {
        return { ...item, knownCount: (item.knownCount || 0) + 1 };
      } else {
        return item;
      }
    });

    // it's looking at the wrong key ERROR ERROR
    console.log("name of 0th index: ", updatedData[0].englishWord);

    const sortedData = wordArrayHandler(updatedData, updatedData[0].key);
    console.log("increaseknowncount priority: ", sortedData[0].priority);

    // Save the updated data back to local storage
    await AsyncStorage.setItem("myVocabulary", JSON.stringify(sortedData));

    setWordState(sortedData);
  };

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
          <Feather
            name="volume-2"
            size={20}
            color="black"
            style={{ marginRight: 6 }}
          />
          <Text style={{ fontSize: 22 }}>audio</Text>
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
            setCardSide(!cardSide);
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
        <Text style={{ fontSize: 34, fontWeight: "bold" }}>
          {determineCardSide()}
        </Text>
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
            increaseKnownCount(
              wordState[0].spanishWord,
              wordState[0].englishWord
            );

            // let updatedWordArray = wordArrayHandler(
            //   wordState,
            //   wordState[0].key
            // );
            // console.log("wordState[0].key: ", wordState[0].englishWord);

            // console.log("wordState[0].key: ", wordState[0].key);
            // console.log("wordState[0].priority: ", wordState[0].priority);
            // // setWordState(updatedWordArray);
            // console.log("wordState after press: ", updatedWordArray);
          }}
        >
          <Text style={{ fontSize: 22 }}>know it </Text>
          <Feather name="arrow-right" size={22} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function wordArrayHandler(words, lastWordKey) {
  function calculatePriority(word, isLastWord) {
    const forgetFactor = word.forgotCount + 1;
    const knownFactor = word.knownCount + 1;
    let priority = forgetFactor / knownFactor;
    if (isLastWord) {
      priority *= 0.01; // Decrease the priority if it's the last shown word
    }
    return priority;
  }

  words.forEach((word) => {
    const isLastWord = word.key === lastWordKey;
    word.priority = calculatePriority(word, isLastWord);
  });

  words.sort((a, b) => b.priority - a.priority);

  return words;
}

export default Card;
