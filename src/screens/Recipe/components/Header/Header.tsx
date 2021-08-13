import React from "react";
import { View } from 'react-native';

import { ImageSection } from "./ImageSection";
import { InfoSection } from "./InfoSection";
import { IngridientSection } from "./IngridientSection";

import { CategoryItemType } from "../../../../types";
import { styles } from "./styles";

interface HeaderPropsType {
  recipe: CategoryItemType;
  scrollY: any;
};

export const Header = ({ recipe, scrollY }: HeaderPropsType) => {
  return (
    <View>
      <ImageSection recipe={recipe} scrollY={scrollY} />
      <InfoSection recipe={recipe} />
      <IngridientSection recipe={recipe} />
    </View>
  );
};
