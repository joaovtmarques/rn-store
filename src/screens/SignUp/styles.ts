import EStyleSheet from 'react-native-extended-stylesheet';
import {colors, fonts, sizes} from '../../utils';

export const styles = EStyleSheet.create({
  content: {
    flex: 1,
    paddingTop: '$padding',
    paddingBottom: '$padding',
    paddingHorizontal: '$pHorizontal',
    justifyContent: 'space-between',
  },
  topTextContainer: {
    marginTop: '$pHorizontal',
  },
  socialMediaContainer: {
    flexDirection: 'row',
    marginTop: '1.125rem',
  },
  inputsContainer: {},
  text11Regular: {
    fontSize: sizes.font11,
    fontFamily: fonts.textRegular,
    color: colors.labelBlack30,
  },
  termsOfServiceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: '1.25rem',
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
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  termsOfServiceAndButtonStyle: {},
});
