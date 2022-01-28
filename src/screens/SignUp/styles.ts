import EStyleSheet from 'react-native-extended-stylesheet';
import {colors, fonts, sizes} from '../../utils';

export const styles = EStyleSheet.create({
  content: {
    height: sizes.height,
    paddingTop: '$pVertical',
    paddingBottom: '1.25rem',
    paddingHorizontal: '$pHorizontal',
  },
  button: {
    height: '2.75rem',
    width: '2.75rem',
    borderRadius: '1.375rem',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.labelBlack5,
  },
  topTextContainer: {
    marginTop: '$pHorizontal',
  },
  socialMediaContainer: {
    flexDirection: 'row',
    marginTop: '1.125rem',
  },
  socialMediaButton: {
    width: '3.5rem',
    height: '3.5rem',
    borderRadius: sizes.font28,
    borderWidth: '0.031rem',
    borderColor: colors.labelBlack10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: sizes.font16,
  },
  inputsContainer: {},
  text11Regular: {
    fontSize: sizes.font11,
    fontFamily: fonts.textRegular,
    color: colors.labelBlack30,
    lineHeight: sizes.font16,
    marginBottom: '6.938.rem',
  },
  termsOfServiceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  radioButton: {
    width: sizes.font24,
    height: sizes.font24,
    backgroundColor: colors.labelBlack5,
    borderRadius: sizes.font12,
    marginRight: '0.5rem',
  },
  termsText: {
    fontFamily: fonts.textRegular,
    fontSize: sizes.font12,
    lineHeight: sizes.font16,
    color: colors.labelBlack60,
  },
  termsTextBlack: {
    color: colors.labelBlack100,
  },
  signUpButtonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  signUpAndInButton: {
    width: '10rem',
    height: '3.5rem',
    borderRadius: '3.75rem',
    backgroundColor: colors.labelWhite100,
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
  },
  textButton: {
    fontFamily: fonts.textBold,
    fontSize: sizes.font16,
    lineHeight: sizes.font24,
    color: colors.labelBlack30,
  },
});
