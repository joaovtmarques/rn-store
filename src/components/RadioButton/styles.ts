import EStyleSheet from 'react-native-extended-stylesheet';
import {colors, sizes} from '../../utils';

export const styles = EStyleSheet.create({
  radioButton: {
    width: sizes.font24,
    height: sizes.font24,
    backgroundColor: colors.labelBlack5,
    borderRadius: sizes.font12,
    marginRight: '0.5rem',
  },
});
