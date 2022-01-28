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
  resetPassButton: {
    width: '100%',
    heigth: sizes.font11,
  },
  text11Regular: {
    fontSize: sizes.font11,
    fontFamily: fonts.textRegular,
    color: colors.labelBlack60,
    marginBottom: '6.125rem',
    textAlign: 'right',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '1.25rem',
  },
  radioButton: {
    width: sizes.font24,
    height: sizes.font24,
    backgroundColor: colors.labelBlack5,
    borderRadius: sizes.font12,
    marginRight: '0.5rem',
  },
  rememberMeText: {
    fontFamily: fonts.textRegular,
    fontSize: sizes.font12,
    lineHeight: sizes.font16,
    color: colors.labelBlack60,
  },
});
