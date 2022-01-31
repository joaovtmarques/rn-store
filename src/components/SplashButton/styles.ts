import EStyleSheet from 'react-native-extended-stylesheet';
import {fonts, sizes} from '../../utils';

export const styles = EStyleSheet.create({
  button: {
    height: '3.5rem',
    width: '100%',
    borderRadius: '3.75rem',
    marginBottom: '0.625rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: sizes.font16,
    fontFamily: fonts.textBold,
  },
});
