import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Current state stores TOTAL vocabulary ... we need to push a MY vocabulary key to create new words

function MyWords() {
  const fetchData = async () => {
    try {
      const data = await AsyncStorage.getItem("totalVocabulary");
      if (data !== null) {
        console.log("Data from AsyncStorage:", JSON.parse(data));
      } else {
        console.log("No data found in AsyncStorage for key: totalVocabulary");
      }
    } catch (error) {
      console.error("Error reading from AsyncStorage:", error);
    }
  };

  const deleteData = async () => {
    try {
      await AsyncStorage.removeItem("totalVocabulary");
      console.log("data deleted");
    } catch (error) {
      console.log(error);
      Alert.alert("error");
    }
  };

  return (
    <View>
      <Text>My Word Screen</Text>
      <Button title="console log data" onPress={fetchData} />
      <Button
        title="delete data"
        onPress={() => {
          deleteData();
        }}
      />
    </View>
  );
}

export default MyWords;
