import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, SafeAreaView, TouchableOpacity, View, Animated, Text, Platform } from "react-native";
import { icons } from "../../../../constants";
import { CategoryItemType } from "../../../../types";

import { styles } from "./styles";
const HEADER_HEIGHT = 350;

interface HeaderBarType {
  recipe: CategoryItemType;
  scrollY: any;
};

export const HeaderBar = ({ recipe, scrollY }: HeaderBarType) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={{
          ...styles.overlayContainer,
          opacity: scrollY.interpolate({
            inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 70],
            outputRange: [0, 1]
          })
        }}
      />

      <Animated.View
        style={{
          ...styles.headerBarTitleContainer,
          opacity: scrollY.interpolate({
            inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
            outputRange: [0, 1]
          }),
          transform: [{
            translateY: scrollY.interpolate({
              inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
              outputRange: [50, 0],
              extrapolate: 'clamp'
            })
          }],
          paddingBottom: Platform.OS === 'ios' ? 5 : 30
        }}
      >
        <Text style={styles.recipeByText}>Recipe By:</Text>
        <Text style={styles.authorNameText}>{recipe.author.name}</Text>
      </Animated.View>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.backIconContainer}>
          <Image source={icons.back} style={styles.backIcon} />
        </View>
      </TouchableOpacity>
      <View style={styles.bookmarkContainer}>
        <Image source={recipe.isBookmark ? icons.bookmarkFilled : icons.bookmark} style={styles.bookmarkIcon} />
      </View>
    </SafeAreaView>
  );
};
