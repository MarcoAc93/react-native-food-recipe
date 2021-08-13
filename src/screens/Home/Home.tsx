import React from "react";
import {
  View,
  SafeAreaView,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Header } from "./components/Header";
import { CategoryItem } from "./components/CategoryItem";

import { dummyData } from "../../constants";
import { styles } from "./styles";

export const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.SAViewContainer}>
      <FlatList
        data={dummyData.categories}
        keyExtractor={item => `${item.id}`}
        keyboardDismissMode='on-drag'
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Header />}
        renderItem={({ item }) => <CategoryItem categoryItem={item} onPress={() => navigation.navigate('Recipe', { recipe: item })} />}
        ListFooterComponent={<View style={{ marginBottom: 100 }} />}
      />
    </SafeAreaView>
  );
};
