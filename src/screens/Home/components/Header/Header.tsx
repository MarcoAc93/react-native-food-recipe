import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Platform,
} from "react-native";
import { BlurView } from "@react-native-community/blur";
import { styles } from "./styles";
import {
  COLORS,
  dummyData,
  FONTS,
  icons,
  images,
  SIZES,
} from "../../../../constants";
import { useNavigation } from "@react-navigation/native";

const OS = Platform.OS;

export const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={{ marginHorizontal: SIZES.padding, marginTop: SIZES.padding }}>
      {/* Hello Marco */}
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>
            Hello Marco,
          </Text>
          <Text style={styles.subText}>
            What you want to cook today?
          </Text>
        </View>
        <View>
          <Image source={images.profile} style={styles.image} />
        </View>
      </View>

      {/* Search Input */}
      <View style={styles.searchInputContainer}>
        <Image source={icons.search} style={styles.icon} />
        <TextInput style={styles.textInput} placeholderTextColor={COLORS.lightGray2} placeholder='Search Recipes' />
      </View>

      {/* More Recipes */}
      <View style={styles.moreRecipesContainer}>
        <View>
          <Image source={images.recipe} style={styles.moreRecipesImage} resizeMode='cover' />
        </View>
        <View style={{ marginLeft: 20, flex: 1 }}>
          <Text style={{ ...FONTS.body4 }}>
            You have 12 recipes that you haven't tried yet
          </Text>
          <Text style={styles.textSeeRecipes}>
            See Recipes
          </Text>
        </View>
      </View>

      {/* Trending Section */}
      <View style={styles.trendingContainer}>
        <Text style={{ ...FONTS.h2 }}>Trending Recipe</Text>
        <FlatList
          data={dummyData.trendingRecipes}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.trendingImageContainer} onPress={() => navigation.navigate('Recipe', { recipe: item })}>
              <Image source={item.image} resizeMode='cover' style={styles.trendingImage} />
              <View style={styles.floatingCategory}>
                <Text style={styles.categoryText}>{item.category}</Text>
              </View>
              {OS === 'ios' ? (
                <BlurView style={styles.blurContainer} blurType='dark'>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.blurTextTitle}>{item.name}</Text>
                    <Text style={styles.blurSubText}>{item.duration} min | {item.serving} Serving</Text>
                  </View>
                  <Image source={item.isBookmark ? icons.bookmarkFilled : icons.bookmark} style={styles.bookmarkIcon} />
                </BlurView>
              ) : (
                <View style={{ ...styles.blurContainer, backgroundColor: COLORS.transparentGray }}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.blurTextTitle}>{item.name}</Text>
                    <Text style={styles.blurSubText}>{item.duration} min | {item.serving} Serving</Text>
                  </View>
                  <Image source={item.isBookmark ? icons.bookmarkFilled : icons.bookmark} style={styles.bookmarkIcon} />
                </View>
              )}
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={styles.categoriesContainer}>
        <Text style={styles.categoriesText}>Categories</Text>
        <Text style={styles.categoriesViewAll}>View All</Text>
      </View>
    </View>
  );
};
