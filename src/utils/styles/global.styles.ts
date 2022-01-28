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
    fontFamily: fonts.textBold,
    fontSize: sizes.font16,
    lineHeight: sizes.font24,
    color: colors.labelBlack100,
  },
  signUpAndInButtonContainer: {
    heigth: '100%',
    width: '100%',
    alignItems: 'center',
    paddingBottom: '$pBottom',
  },
  signUpAndInButton: {
    width: '10rem',
    height: '3.5rem',
    borderRadius: '3.75rem',
    backgroundColor: colors.keyBlue,
    shadowColor: colors.labelBlack60,
    shadowOffset: {
      width: 0,
      height: '0.25rem',
    },
    shadowOpacity: '0.019rem',
    shadowRadius: '0.291rem',
    elevation: '0.5rem',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textButton: {
    fontFamily: fonts.textBold,
    fontSize: sizes.font16,
    lineHeight: sizes.font24,
    color: colors.labelWhite100,
    marginRight: '0.813rem',
  },
});
