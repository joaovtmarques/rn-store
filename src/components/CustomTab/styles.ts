import {colors} from './../../utils/theme';
import EStyleSheet from 'react-native-extended-stylesheet';
import {globalStyles} from '../../utils/styles/global.styles';

export const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '1.875rem',
    paddingBottom: '1.25rem',
    backgroundColor: colors.labelWhite100,
  },
  button: {
    marginRight: '0.625rem',
  },
  text: {
    ...globalStyles.text28Bold,
    textTransform: 'none',
    textAlign: 'left',
    marginBottom: 0,
  },
});
