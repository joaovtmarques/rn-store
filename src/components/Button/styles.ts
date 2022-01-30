import EStyleSheet from 'react-native-extended-stylesheet';
import {colors, fonts, sizes} from '../../utils';

export const styles = EStyleSheet.create({
  buttonContainer: {
    heigth: '100%',
    width: '100%',
    alignItems: 'center',
    paddingBottom: '$pBottom',
  },
  button: {
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
