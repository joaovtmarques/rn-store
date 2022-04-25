import {colors} from './../../utils/theme';
import EStyleSheet from 'react-native-extended-stylesheet';
import {globalStyles} from '../../utils/styles/global.styles';

export const styles = EStyleSheet.create({
  content: {
    paddingTop: '2rem',
    paddingLeft: '1.875rem',
    paddingBottom: '0.938rem',
    backgroundColor: colors.labelWhite100,
  },
  title: {
    ...globalStyles.text28Bold,
    marginBottom: 0,
  },
});
