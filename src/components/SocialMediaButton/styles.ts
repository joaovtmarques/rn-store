import EStyleSheet from 'react-native-extended-stylesheet';
import {colors, sizes} from '../../utils';

export const styles = EStyleSheet.create({
  button: {
    width: '3.5rem',
    height: '3.5rem',
    borderRadius: sizes.font28,
    borderWidth: '0.031rem',
    borderColor: colors.labelBlack10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: sizes.font16,
  },
});
