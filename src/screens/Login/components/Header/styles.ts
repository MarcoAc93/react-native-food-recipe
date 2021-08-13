import { StyleSheet } from "react-native";
import { FONTS, COLORS, SIZES } from "../../../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  imageContainer: {
    height: SIZES.height > 700 ? '65%' : '60%',
  },
  innerImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  gradient: {
    height: 200,
    justifyContent: 'flex-end',
    paddingHorizontal: SIZES.padding,
  },
  titleContainer: {
    paddingTop: 50
  },
  title: {
    width: '80%',
    color: COLORS.white,
    ...FONTS.largeTitle,
    lineHeight: 45,
    marginTop: 20
  }
});
