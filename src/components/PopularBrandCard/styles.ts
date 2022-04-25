import {colors} from './../../utils/theme';
import EStyleSheet from 'react-native-extended-stylesheet';
import {globalStyles} from '../../utils/styles/global.styles';

export const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: '0.625rem',
  },
  iconContainer: {
    width: '4.5rem',
    height: '4.5rem',
    alignItems: 'center',
    borderRadius: '2.25rem',
    justifyContent: 'center',
    backgroundColor: colors.labelBlack5,
  },
  textContainer: {
    marginTop: '0.625rem',
  },
  titleText: {
    ...globalStyles.text12Bold,
    textAlign: 'center',
  },
  all601Text: {
    ...globalStyles.text11Regular,
    textAlign: 'center',
    marginBottom: 0,
  },
});
