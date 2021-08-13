import React from "react";
import { View, Text, ImageBackground } from "react-native";
import LinearGradient from 'react-native-linear-gradient'

import { images, COLORS } from '../../../../constants';
import { styles } from './styles';

export const Header = () => {
  return (
    <View style={styles.imageContainer}>
      <ImageBackground source={images.loginBackground} resizeMode='cover' style={styles.innerImage}>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={[COLORS.transparent, COLORS.black]} style={styles.gradient}>
          <Text style={styles.title}>Cooking a Delicious Food Easily</Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};
