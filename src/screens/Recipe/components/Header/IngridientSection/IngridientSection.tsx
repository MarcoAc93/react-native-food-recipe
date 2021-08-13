import React from "react";
import { View, Text } from 'react-native';
import { CategoryItemType } from "../../../../../types";
import { styles } from './styles';

interface IngridientSectionProps {
  recipe: CategoryItemType;
};

export const IngridientSection = ({ recipe }: IngridientSectionProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingridients</Text>
      <Text style={styles.subText}>{recipe.ingredients.length + 1} items</Text>
    </View>
  );
};
