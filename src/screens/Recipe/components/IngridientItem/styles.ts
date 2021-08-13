import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../../constants";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: SIZES.padding,
    marginVertical: 10,
    alignItems: 'center'
  },
  iconContainer: {
    backgroundColor: COLORS.lightGray,
    padding: 5,
    borderRadius: SIZES.radius * 0.5
  },
  iconStyles: {
    width: 25,
    height: 25
  },
  descriptionContainer: {
    flex: 1,
    marginLeft: 20,
  },
  descriptionText: {
    ...FONTS.body4
  },
  quantityText: {
    ...FONTS.body4
  }
});
