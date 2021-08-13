import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: SIZES.padding,
    marginTop: SIZES.padding - 12
  },
  description: {
    width: '70%',
    color: COLORS.gray,
    ...FONTS.body3,
    marginBottom: 18
  },
  buttonsContainer: {
    flex: 1
  },
  buttonShape: {
    width: '100%',
    height: 70,
    borderRadius: 25,
    overflow: 'hidden',
  },
  outlinedButton: {
    borderRadius: 25,
    borderColor: COLORS.darkLime,
    borderWidth: 1,
    height: 70,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gradientStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    ...FONTS.h4,
  }
});
