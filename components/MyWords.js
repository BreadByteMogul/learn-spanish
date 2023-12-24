import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Button,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Feather from "react-native-vector-icons/Feather";
import * as Haptics from "expo-haptics";

// Current state stores TOTAL vocabulary ... we need to push a MY vocabulary key to create new words

function MyWords() {
  const fetchTotalVocabData = async () => {
    try {
      const data = await AsyncStorage.getItem("totalVocabulary");
      if (data !== null) {
        console.log("TotalVocabData from AsyncStorage:", JSON.parse(data));
      } else {
        console.log("No data found in AsyncStorage for key: totalVocabulary");
      }
    } catch (error) {
      console.error("Error reading from AsyncStorage:", error);
    }
  };

  const fetchMyVocabData = async () => {
    try {
      const data = await AsyncStorage.getItem("myVocabulary");
      if (data !== null) {
        console.log("MyVocabData from AsyncStorage:", JSON.parse(data));
      } else {
        console.log("No data found in AsyncStorage for key: myVocabulary");
      }
    } catch (error) {
      console.error("Error reading from AsyncStorage:", error);
    }
  };

  const deleteTotalVocabData = async () => {
    try {
      await AsyncStorage.removeItem("totalVocabulary");
      console.log("data deleted");
    } catch (error) {
      console.log(error);
      Alert.alert("error");
    }
  };

  const deleteMyVocabData = async () => {
    try {
      await AsyncStorage.removeItem("myVocabulary");
      console.log("data deleted");
    } catch (error) {
      console.log(error);
      Alert.alert("error");
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: "100%",
        alignItems: "center",
      }}
    >
      <View style={{ marginTop: 20, marginBottom: 10 }}>
        <Text style={{ fontSize: 34, fontWeight: "bold" }}>Your Words</Text>
      </View>

      <MyWordFlatList />

      <View>
        <Button
          title="console log data"
          onPress={() => {
            fetchTotalVocabData();
            fetchMyVocabData();
          }}
        />
        <Button
          title="delete data"
          onPress={() => {
            deleteTotalVocabData();
            // deleteMyVocabData();
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const MyWordFlatList = () => {
  const [myWordData, setMyWordData] = useState([]);

  const MyWordItem = ({ spanishWord, englishWord, knownCount }) => {
    return (
      <View
        style={{
          backgroundColor: "#f8f8f8",
          borderTopColor: "#d2d2d2",
          borderTopWidth: 1,
          borderBottomColor: "#d2d2d2",
          borderBottomWidth: 1,
          width: "100%",
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: 100,
        }}
      >
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 20 }}>{spanishWord}</Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 300,
              marginTop: 5,
              fontStyle: "italic",
            }}
          >
            {englishWord}
          </Text>
          <Text style={{ fontSize: 14, fontWeight: 300, marginTop: 5 }}>
            know it count: {knownCount}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            padding: 20,
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
          onPress={() => {
            console.log("delete me");
            removeItemFromStorage(spanishWord, englishWord);
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.light);
          }}
        >
          <Feather name="trash" size={22} color="black" />
        </TouchableOpacity>
      </View>
    );
  };

  const removeItemFromStorage = async (spanishWord, englishWord) => {
    // Get the item from myVocabulary
    const myVocabularyString = await AsyncStorage.getItem("myVocabulary");
    const myVocabulary = myVocabularyString
      ? JSON.parse(myVocabularyString)
      : [];
    const item = myVocabulary.find(
      (item) =>
        item.spanishWord === spanishWord && item.englishWord === englishWord
    );

    // Remove the item from myVocabulary
    const updatedMyVocabulary = myVocabulary.filter(
      (item) =>
        item.spanishWord !== spanishWord || item.englishWord !== englishWord
    );
    await AsyncStorage.setItem(
      "myVocabulary",
      JSON.stringify(updatedMyVocabulary)
    );

    setMyWordData(updatedMyVocabulary);

    // Add the item to totalVocabulary
    const totalVocabularyString = await AsyncStorage.getItem("totalVocabulary");
    const totalVocabulary = totalVocabularyString
      ? JSON.parse(totalVocabularyString)
      : [];
    totalVocabulary.push(item);
    await AsyncStorage.setItem(
      "totalVocabulary",
      JSON.stringify(totalVocabulary)
    );
  };

  useEffect(() => {
    const loadMyWords = async () => {
      try {
        const asyncMyWordData = await AsyncStorage.getItem("myVocabulary");
        if (asyncMyWordData !== null) {
          setMyWordData(JSON.parse(asyncMyWordData));
          console.log(
            "MyVocabData from AsyncStorage:",
            JSON.parse(asyncMyWordData)
          );
        } else {
          setMyWordData([]);
          console.log("No data found in AsyncStorage for key: myVocabulary");
        }
      } catch (error) {
        console.error("Error reading from AsyncStorage:", error);
      }
    };

    loadMyWords();
  }, []);

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <FlatList
        data={myWordData}
        renderItem={({ item }) => (
          <MyWordItem
            spanishWord={item.spanishWord}
            englishWord={item.englishWord}
            knownCount={item.knownCount}
          />
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

export default MyWords;
