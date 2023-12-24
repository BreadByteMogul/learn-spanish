import React, { useEffect, useState } from "react";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import TotalVocab from "./components/TotalVocab";
import MyWords from "./components/MyWords";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ animation: "none", onmountOnBlur: true }}
      >
        <Stack.Screen
          name="Cards"
          component={CardsScreen}
          options={{ headerShown: false, onmountOnBlur: true }}
        />
        <Stack.Screen
          name="MyWords"
          component={MyWordsScreen}
          options={{
            headerShown: false,
            onmountOnBlur: true,
          }}
        />
        <Stack.Screen
          name="Vocab"
          component={VocabScreen}
          options={{ headerShown: false, onmountOnBlur: true }}
        />
        <Stack.Screen
          name="Stats"
          component={StatsScreen}
          options={{ headerShown: false, onmountOnBlur: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function CardsScreen({ navigation }) {
  const isFocused = useIsFocused();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (isFocused) {
      // Code to run when the screen is focused
      console.log("focused");
      setRefresh(!refresh);
    }
  }, [isFocused]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Card refresh={refresh} setRefresh={setRefresh} />
      </View>
      <NavBar navigation={navigation} />
    </View>
  );
}

function MyWordsScreen({ navigation }) {
  const isFocused = useIsFocused();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (isFocused) {
      // Code to run when the screen is focused
      console.log("focused");
      setRefresh(!refresh);
    }
  }, [isFocused]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <MyWords refresh={refresh} />
      </View>

      <NavBar navigation={navigation} />
    </View>
  );
}

function VocabScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TotalVocab />
      </View>

      <NavBar navigation={navigation} />
    </View>
  );
}

function StatsScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Stats - Stats Screen Area</Text>
      </View>

      <NavBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
