import React from "react";
import { View, Text, Image } from 'react-native';
import { CategoryItemType } from "../../../../../types";
import { styles } from "./styles";

interface InfoSectionProps {
  recipe: CategoryItemType;
};

export const InfoSection = ({ recipe }: InfoSectionProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.recipeNameText}>{recipe.name}</Text>
        <Text style={styles.subInfoText}>{recipe.duration} Mins | {recipe.serving} Serving</Text>
      </View>
      <View>
        <View style={styles.viewersContainer}>
          {recipe.viewers.map((viewer, index) => {
            if ((index) > 3) return;
            return (
              <>
                {(index + 1) === 4 ? (
                  <View style={styles.imagePlaceholder}>
                    <Text style={styles.innerPlaceholderText}>
                      {recipe.viewers.length - 3}+
                    </Text>
                  </View>
                ) : (
                  <Image
                    source={viewer.profilePic}
                    style={{
                      ...styles.viewerImage,
                      marginLeft: index === 0 ? 0 : -20
                    }}
                  />
                )}
              </>
            )
          })}
        </View>
        <Text style={styles.morePeopleText}>
          {recipe.viewers.length - 3}+ People{'\n'}
          Already Try This!
        </Text>
      </View>
    </View>
  );
};
