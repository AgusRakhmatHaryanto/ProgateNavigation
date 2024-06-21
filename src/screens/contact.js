import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert, Platform } from "react-native";

export default function Contact({ navigation }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isFormDirty, setIsFormDirty] = useState(false);

  useEffect(() => {
    const beforeRemoveListener = navigation.addListener("beforeRemove", (e) => {
      if (!isFormDirty) {
        return;
      }

      e.preventDefault();

      const confirmLeave = () => {
        if (Platform.OS === 'web') {
          if (window.confirm("You have unsent changes. Do you want to leave without sending?")) {
            navigation.dispatch(e.data.action);
          }
        } else {
          Alert.alert(
            "Confirmation",
            "You have unsent changes. Do you want to leave without sending?",
            [
              {
                text: "Stay",
                style: "cancel",
                onPress: () => {},
              },
              {
                text: "Leave",
                style: "destructive",
                onPress: () => navigation.dispatch(e.data.action),
              },
            ],
            { cancelable: false }
          );
        }
      }

      confirmLeave();
    });

    return () => navigation.removeListener("beforeRemove", beforeRemoveListener);
  }, [isFormDirty, navigation]);

  const handleSubmit = () => {
    if (name !== "" && message !== "") {
      const showMessageSent = () => {
        if (Platform.OS === 'web') {
          window.alert(`Message Sent\nFrom: ${name}\nMessage: ${message}`);
        } else {
          Alert.alert("Message Sent", `From: ${name}\nMessage: ${message}`);
        }
      }

      showMessageSent();
      setIsFormDirty(false);
    } else {
      const showValidationMessage = () => {
        if (Platform.OS === 'web') {
          window.alert("Please fill in all fields before sending.");
        } else {
          Alert.alert("Validation", "Please fill in all fields before sending.");
        }
      }

      showValidationMessage();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Your Name"
        style={styles.input}
        value={name}
        onChangeText={(text) => {
          setName(text);
          setIsFormDirty(text.length > 0 || message.length > 0);
        }}
      />
      <TextInput
        placeholder="Your Message"
        style={styles.input}
        value={message}
        onChangeText={(text) => {
          setMessage(text);
          setIsFormDirty(name.length > 0 || text.length > 0);
        }}
        multiline
      />
      <View style={styles.buttonWrapper}>
        <Button title="Send" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  input: {
    height: 60,
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
  },
  buttonWrapper: {
    marginTop: 20,
  },
});
