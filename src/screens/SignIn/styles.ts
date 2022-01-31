import EStyleSheet from 'react-native-extended-stylesheet';
import {colors, fonts, sizes} from '../../utils';

export const styles = EStyleSheet.create({
  content: {
    height: sizes.height,
    paddingTop: '$pVertical',
    paddingBottom: '$pBottom',
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
  resetPassButton: {
    width: '100%',
    heigth: sizes.font11,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '1.25rem',
  },
  radioButtonText: {
    fontFamily: fonts.textRegular,
    fontSize: sizes.font12,
    lineHeight: sizes.font16,
    color: colors.labelBlack60,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingBottom: '$pBottom',
  },
});
