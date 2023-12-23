import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    <View>
      <Text>My Word Screen</Text>
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
  );
}

export default MyWords;
