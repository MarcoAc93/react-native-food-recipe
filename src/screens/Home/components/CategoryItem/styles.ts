import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../../constants";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.gray2,
    marginHorizontal: SIZES.padding
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: SIZES.radius
  },
  detailsContainer: {
    width: '75%',
    paddingHorizontal: 20,
  },
  categoryName: {
    flex: 1,
    ...FONTS.h2
  },
  categoryDuration: {
    color: COLORS.gray,
    ...FONTS.body4
  }
});
