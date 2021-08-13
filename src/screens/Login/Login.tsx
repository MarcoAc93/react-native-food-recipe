import React from "react";
import { View, StatusBar } from "react-native";
import { styles } from "./styles";

import { Header } from "./components/Header";
import { Details } from "./components/Details/Details";

export const Login = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <Header />
      <Details />
    </View>
  );
};
