import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { CategoryItemType } from "../../../../types";
import { styles } from "./styles";

interface CategoryItemProps {
  categoryItem: CategoryItemType;
  onPress: () => void;
}

export const CategoryItem = ({ categoryItem, onPress }: CategoryItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={categoryItem.image} style={styles.image} resizeMode='cover' />
        <View style={styles.detailsContainer}>
          <Text style={styles.categoryName}>
            {categoryItem.name}
          </Text>
          <Text style={styles.categoryDuration}>
            {categoryItem.duration} | {categoryItem.serving} Serving
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
