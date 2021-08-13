import React from "react";
import { View, Text, Animated, Platform, Image } from "react-native";
import { BlurView } from "@react-native-community/blur";

import { CategoryItemType } from "../../../../../types";
import { styles } from "./styles";
import { COLORS, icons } from "../../../../../constants";

interface ImageSectionPropsType {
  recipe: CategoryItemType;
  scrollY: any;
};
const HEADER_HEIGHT = 350;

export const ImageSection = ({ recipe, scrollY }: ImageSectionPropsType) => {
  return (
    <View style={styles.container}>
      <Animated.Image
        resizeMode='contain'
        source={recipe.image}
        style={{
          ...styles.image,
          transform: [{
            translateY: scrollY.interpolate({
              inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
              outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
            })
          },
          {
            scale: scrollY.interpolate({
              inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
              outputRange: [2, 1, 0.75]
            })
          }]
        }}
      />
      <Animated.View
        style={{
          ...styles.blurContainer,
          transform: [{
            translateY: scrollY.interpolate({
              inputRange: [0, 170, 250],
              outputRange: [0, 0, 100],
              extrapolate: 'clamp'
            })
          }]
        }}
      >
        {Platform.OS === 'ios' ? (
          <BlurView blurType='dark' style={styles.blurInnerContainer}>
            <Image source={recipe.author.profilePic} style={styles.profilePic} resizeMode='contain' />
            <View style={styles.recipeAuthorContainer}>
              <Text style={styles.recipeByText}>Recipe By:</Text>
              <Text style={styles.authorNameText}>{recipe.author.name}</Text>
            </View>
            <View style={styles.arrowOutlineContainer}>
              <Image source={icons.rightArrow} style={styles.rightArrow} />
            </View>
          </BlurView>
        ) : (
          <View style={{ backgroundColor: COLORS.transparentBlack9, ...styles.blurInnerContainer }}>
            <Image source={recipe.author.profilePic} style={styles.profilePic} resizeMode='contain' />
            <View style={styles.recipeAuthorContainer}>
              <Text style={styles.recipeByText}>Recipe By:</Text>
              <Text style={styles.authorNameText}>{recipe.author.name}</Text>
            </View>
            <View style={styles.arrowOutlineContainer}>
              <Image source={icons.rightArrow} style={styles.rightArrow} />
            </View>
          </View>
        )}
      </Animated.View>
    </View>
  );
};
