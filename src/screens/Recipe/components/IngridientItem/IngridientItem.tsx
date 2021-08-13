import React from "react";
import { View, Text, Image } from 'react-native';

import { Ingredient } from '../../../../types';
import { styles } from "./styles";

interface IngridientItemProps {
  ingridient: Ingredient;
};

export const IngridientsItem = ({ ingridient }: IngridientItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={ingridient.icon} style={styles.iconStyles} resizeMode='cover' />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>{ingridient.description}</Text>
      </View>
      <View>
        <Text style={styles.quantityText}>{ingridient.quantity}</Text>
      </View>
    </View>
  );
};
