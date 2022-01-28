import EStyleSheet from 'react-native-extended-stylesheet';
import {colors, fonts, sizes} from '../../utils';

export const globalStyles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  text16Bold: {
    fontFamily: fonts.textBold,
    fontSize: sizes.font16,
    lineHeight: sizes.font24,
    color: colors.labelBlack100,
  },
  text12Regular: {
    fontFamily: fonts.textBold,
    fontSize: sizes.font12,
    lineHeight: sizes.font16,
    color: colors.labelBlack60,
  },
  text28Bold: {
    fontFamily: fonts.textBold,
    fontSize: sizes.font28,
    lineHeight: '2rem',
    color: colors.labelBlack100,
  },
  line: {
    width: '100%',
    height: '0.031rem',
    backgroundColor: colors.labelBlack30,
    marginTop: '1.25rem',
    marginBottom: '1.781rem',
  },
  input: {
    width: '100%',
    height: '3.5.rem',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: '0.031rem',
    borderColor: colors.labelBlack5,
    marginBottom: '0.625.rem',
  },
  iconStyle: {
    marginRight: sizes.font16,
  },
  textInputStyle: {
    flex: 1,
    fontSize: sizes.font16,
    fontFamily: fonts.textRegular,
    lineHeight: '1.5rem',
    color: colors.labelBlack30,
  },
  textInputStyle2: {
    flex: 1,
    fontFamily: fonts.textBold,
    fontSize: sizes.font16,
    lineHeight: sizes.font24,
    color: colors.labelBlack100,
  },
});
