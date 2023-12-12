import React from "react";
import { Text, View, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

  return (
    <View>
      <Text>My Word Screen</Text>
      <Button title="press me" onPress={fetchData} />
    </View>
  );
}

export default MyWords;
