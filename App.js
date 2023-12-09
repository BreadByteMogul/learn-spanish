import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function NavBar({ navigation }) {
  return (
    <View
      style={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
        flexDirection: "row",
      }}
    >
      {/* <Button title="Details" onPress={() => navigation.navigate("Details")} /> */}
      <TouchableOpacity
        style={{
          backgroundColor: "yellow",
          width: "25%",
          height: 80,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={{ marginBottom: 20 }}>
          <Text>H</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "pink",
          width: "25%",
          height: 80,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          navigation.navigate("Details");
          console.log("go details plz");
        }}
      >
        <View style={{ marginBottom: 20 }}>
          <Text>D</Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: "orange",
          width: "25%",
          height: 80,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ marginBottom: 20 }}>
          <Text>S</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "purple",
          width: "25%",
          height: 80,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ marginBottom: 20 }}>
          <Text>S</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "cyan",
          width: "25%",
          height: 80,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ marginBottom: 20 }}>
          <Text>S</Text>
        </View>
      </View>
    </View>
  );
}

function HomeScreen({ navigation }) {
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
        <Text>Home - Main Screen Area</Text>
        <Button title="press me" onPress={() => console.log("tap")} />
      </View>

      <NavBar navigation={navigation} />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
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
