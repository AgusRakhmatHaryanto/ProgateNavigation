import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProgateEvent() {
  useEffect(() => {
    alert('ProgateEvent screen is mounted')
    return () => {
      alert('ProgateEvent screen is unmounted')
    }
  })
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.marginBottom20]}>Progate Event</Text>
      <Text>Join Progate Event to learn coding!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
  },
  marginBottom20: {
    marginBottom: 20,
  },
});
