import {colors, sizes} from './../../utils/theme';
import EStyleSheet from 'react-native-extended-stylesheet';
import {globalStyles} from '../../utils/styles/global.styles';

export const styles = EStyleSheet.create({
  container: {
    height: '21.563rem',
    width: '100%',
    borderRadius: '0.625rem',
    overflow: 'hidden',
    marginBottom: sizes.font20,
  },
  image: {
    flex: 1,
    padding: '1.5rem',
    justifyContent: 'flex-end',
  },
  icon: {
    marginBottom: '0.5rem',
  },
  title: {
    ...globalStyles.text20Bold,
    color: colors.labelWhite100,
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
  },
  textContainer: {
    flexDirection: 'row',
  },
  avatarContainer: {
    flexDirection: 'row',
  },
  avatar: {
    height: '1rem',
    width: '1rem',
    borderRadius: '0.5rem',
    marginRight: '0.25rem',
  },
  text: {
    ...globalStyles.text12Bold60,
    color: colors.labelWhite100,
    marginRight: '0.5rem',
  },
  secondText: {
    ...globalStyles.text12Regular,
    color: colors.labelWhite100,
    marginRight: '0.5rem',
  },
});
