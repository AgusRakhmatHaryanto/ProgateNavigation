import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
// import { useFocusEffect } from "@react-navigation/native";

export default function ProgateEvent({ navigation }) {
  // useFocusEffect(()=>{
  //   alert('Screen was focused')
  //   return()=>{
  //     alert('Screen was unfocused')
  //   }
  // })
  useEffect(() => {
    // navigation.addListener('focus',()=>{
    //   alert('ProgateEvent screen is focused')
    // })
    // navigation.addListener('blur',()=>{
    //   alert('ProgateEvent screen is unfocused')
    // })
    navigation.addListener("state", (event) => {
      alert("Navigation state changed");
      console.log(event.data.state);
    });
  }, []);
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
