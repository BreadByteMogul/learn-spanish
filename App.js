import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import NavBar from "./NavBar";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animation: "none" }}>
        <Stack.Screen
          name="Cards"
          component={CardsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyWords"
          component={MyWordsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Vocab"
          component={VocabScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Stats"
          component={StatsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const handlePress = () => {
  Haptic.trigger("impactMedium");
  // Other onPress actions
};

function CardsScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue",
      }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Cards - Cards Screen Area</Text>
        <Button title="press me" onPress={() => console.log("tap tap")} />
      </View>

      <NavBar navigation={navigation} />
    </View>
  );
}

function MyWordsScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue",
      }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>My Words - My Words Screen Area</Text>
        <Button title="press me" onPress={() => console.log("tap")} />
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
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue",
      }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Vocab - Vocab Screen Area</Text>
        <Button title="press me" onPress={() => console.log("tap")} />
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
        backgroundColor: "blue",
      }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Stats - Stats Screen Area</Text>
        <Button title="press me" onPress={() => console.log("tap")} />
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
