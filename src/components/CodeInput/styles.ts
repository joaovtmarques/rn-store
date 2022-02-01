import EStyleSheet from 'react-native-extended-stylesheet';
import {colors} from '../../utils';
import {globalStyles} from '../../utils/styles/global.styles';

export const styles = EStyleSheet.create({
  container: {
    width: '3.5rem',
    height: '3.5rem',
    borderRadius: '2rem',
    borderWidth: '0.063rem',
    borderColor: colors.labelBlack10,
    backgroundColor: colors.labelBlack5,
  },
  input: {
    flex: 1,
    textAlign: 'center',
    padding: '1rem',
    ...globalStyles.text20Bold,
  },
});
