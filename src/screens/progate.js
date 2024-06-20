import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ProgateService from "./progateService";
import ProgateEvent from "./progateEvent";
import HomeIcon from "../../assets/buttomTabIcons/house.svg";
import ProgateIcon from "../../assets/buttomTabIcons/progate.svg";

const Tab = createBottomTabNavigator();

export default function Progate() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Progate Service"
        component={ProgateService}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => (<Image source={HomeIcon} style={styles.homeIcon} />),
        }}
      />
      <Tab.Screen
        name="Progate Event"
        component={ProgateEvent}
        options={{
          tabBarLabel: "Progate",
          tabBarIcon: () => (
            <Image source={ProgateIcon} style={styles.progateIcon} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  homeIcon: {
    width: 20,
    height: 20,
  },
  progateIcon: {
    width: 40,
    height: 40,
  },
});
