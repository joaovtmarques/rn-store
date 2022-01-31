import EStyleSheet from 'react-native-extended-stylesheet';
import {colors, fonts, sizes} from '../../utils';

export const globalStyles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  text11Regular: {
    fontSize: sizes.font11,
    fontFamily: fonts.textRegular,
    color: colors.labelBlack60,
    marginBottom: '6.125rem',
    textAlign: 'right',
  },
  text12Regular: {
    fontFamily: fonts.textBold,
    fontSize: sizes.font12,
    lineHeight: sizes.font16,
    color: colors.labelBlack60,
  },
  text16Bold: {
    fontFamily: fonts.textBold,
    fontSize: sizes.font16,
    lineHeight: sizes.font24,
    color: colors.labelBlack100,
  },
  text28Bold: {
    fontFamily: fonts.textBold,
    fontSize: sizes.font28,
    lineHeight: '2rem',
    color: colors.labelBlack100,
    marginBottom: '0.5rem',
  },
});
