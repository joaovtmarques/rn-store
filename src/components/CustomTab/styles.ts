import EStyleSheet from 'react-native-extended-stylesheet';
import {globalStyles} from '../../utils/styles/global.styles';

export const styles = EStyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginRight: '0.625rem',
  },
  text: {
    ...globalStyles.text28Bold,
    textTransform: 'none',
    textAlign: 'left',
  },
});
