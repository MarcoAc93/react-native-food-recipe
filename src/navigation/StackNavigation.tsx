import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { TabNavigation } from "./TabBarNavigation";

import { Login } from "../screens";
// import { Home } from "../screens";
import { Recipe } from "../screens";

import { COLORS } from "../constants";

const Stack = createStackNavigator();

export const StackNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: COLORS.white
      }
    }}
  >
    <Stack.Screen name='Login' component={Login} />
    <Stack.Screen name='Home' component={TabNavigation} />
    <Stack.Screen name='Recipe' component={Recipe} />
  </Stack.Navigator>
)