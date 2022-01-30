import EStyleSheet from 'react-native-extended-stylesheet';
import {colors, fonts, sizes} from '../../utils';
import {globalStyles} from '../../utils/styles/global.styles';

export const styles = EStyleSheet.create({
  content: {
    height: sizes.height,
    paddingTop: '$pVertical',
    paddingBottom: '$pBottom',
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
  countryInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: '0.031rem',
    borderColor: colors.labelBlack5,
    marginTop: '6rem',
  },
  countrySelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryButton: {
    marginRight: '-0.5rem',
  },
  arrowIcon: {
    marginRight: '1rem',
  },
  input: {
    flex: 1,
    fontFamily: fonts.textRegular,
    color: colors.labelBlack30,
    paddingLeft: '0.625rem',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: '4.563rem',
  },
});
