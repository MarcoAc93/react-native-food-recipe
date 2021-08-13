import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import LinearGradient from "react-native-linear-gradient";

import { COLORS } from "../../../../constants";
import { styles } from "./styles";

export const Details = () => {
  const navigation = useNavigation();
  return (
    <View style={{ ...styles.container }}>
      <Text style={styles.description}>
        Discover more thatn 1200 food recipes in your hands and cooking it easily!
      </Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonShape} onPress={() => navigation.navigate('Home')}>
          <LinearGradient start={{ x: 0, y: 0}} end={{ x: 1, y: 0 }} colors={[COLORS.darkGreen, COLORS.lime]} style={styles.gradientStyles}>
            <Text style={styles.buttonText}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.outlinedButton} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
