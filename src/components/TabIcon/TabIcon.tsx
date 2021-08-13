import React from "react";
import { View, Image, Platform } from 'react-native';
import { COLORS } from "../../constants";

import { styles } from "./styles";

interface TabIconProps {
  focused: boolean;
  icon: any;
}

export const TabIcon = ({ focused, icon }: TabIconProps) => (
  <View style={styles.container}>
    <Image source={icon}
      style={{
        ...styles.image,
        tintColor: focused ? COLORS.darkGreen : COLORS.lightLime,
        bottom: Platform.OS === 'android' ? 30 : 20
      }}
      resizeMode='contain'
    />
    {focused && (
      <View
        style={styles.bottomBar}
      />
    )}
  </View>
);
