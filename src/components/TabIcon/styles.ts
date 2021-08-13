import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 50
  },
  image: {
    width: 30,
    height: 30,
    position: 'absolute',
    alignSelf: 'center',
  },
  bottomBar: {
    position: 'absolute',
    backgroundColor: COLORS.darkGreen,
    height: 5,
    bottom: 0,
    left: 0,
    right: 0,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5
  }
});
