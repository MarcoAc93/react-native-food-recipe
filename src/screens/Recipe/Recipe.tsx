import React, { useRef } from "react";
import { View, Animated } from "react-native";

import { HeaderBar } from "./components/HeaderBar";
import { Header } from "./components/Header";
import { IngridientsItem } from "./components/IngridientItem";

import { CategoryItemType } from "../../types";
import { styles } from "./styles";

interface RecipePropsType {
  route: {
    params: {
      recipe: CategoryItemType
    }
  }
};

export const Recipe = ({ route: { params: { recipe } }}: RecipePropsType) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={recipe.ingredients}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Header recipe={recipe} scrollY={scrollY} />}
        scrollEventThrottle={16}
        onScroll={
          Animated.event([{
            nativeEvent: {
              contentOffset: { y: scrollY }
            }
          }], { useNativeDriver: true })
        }
        renderItem={({ item }) => <IngridientsItem ingridient={item} />}
      />
      <HeaderBar recipe={recipe} scrollY={scrollY} />
    </View>
  );
};
