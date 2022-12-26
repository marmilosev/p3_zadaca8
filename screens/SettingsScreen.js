import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

export function SettingsScreen({ route, navigation }) {

  //later
  function handleHomePress() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.screen}>
      <Text>The Settings Screen!</Text>
      <Button title="Go to the Home screen!" onPress={handleHomePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});