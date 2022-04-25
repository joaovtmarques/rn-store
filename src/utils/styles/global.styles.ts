import EStyleSheet from 'react-native-extended-stylesheet';
import {colors, fonts, sizes} from '../../utils';

export const globalStyles = EStyleSheet.create({
  container: {
    height: sizes.height,
    width: sizes.width,
  },
  text11Regular: {
    fontSize: sizes.font11,
    fontFamily: fonts.textRegular,
    color: colors.labelBlack60,
    marginBottom: '6.125rem',
    textAlign: 'right',
  },
  text12Regular: {
    fontFamily: fonts.textRegular,
    fontSize: sizes.font12,
    lineHeight: sizes.font16,
    color: colors.labelBlack100,
  },
  text12Regular60: {
    fontFamily: fonts.textRegular,
    fontSize: sizes.font12,
    lineHeight: sizes.font16,
    color: colors.labelBlack60,
  },
  text12Bold60: {
    fontFamily: fonts.textBold,
    fontSize: sizes.font12,
    lineHeight: sizes.font16,
    color: colors.labelBlack60,
  },
  text12Bold: {
    fontFamily: fonts.textBold,
    fontSize: sizes.font12,
    lineHeight: sizes.font16,
    color: colors.labelBlack100,
  },
  text14Bold: {
    fontFamily: fonts.textBold,
    fontSize: sizes.font14,
    lineHeight: sizes.font16,
  },
  text16Bold: {
    fontFamily: fonts.textBold,
    fontSize: sizes.font16,
    lineHeight: sizes.font24,
    color: colors.labelBlack100,
  },
  text20Bold: {
    fontFamily: fonts.textBold,
    fontSize: sizes.font20,
    lineHeight: sizes.font28,
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
