import {sizes, colors} from './../../utils/theme';
import EStyleSheet from 'react-native-extended-stylesheet';
import {globalStyles} from '../../utils/styles/global.styles';

export const styles = EStyleSheet.create({
  container: {
    width: '9.375rem',
    overflow: 'hidden',
    height: '14.625rem',
    marginRight: '1rem',
    borderRadius: sizes.font12,
  },
  imageContainer: {
    width: '100%',
    height: '9.375rem',
    overflow: 'hidden',
    padding: '0.938rem',
    borderRadius: sizes.font12,
    backgroundColor: colors.labelBlack5,
  },
  image: {
    height: '100%',
    justifyContent: 'flex-start',
  },
  textContainer: {
    marginTop: '0.625rem',
  },
  title: {
    ...globalStyles.text12Regular,
  },
  lowestAskText: {
    ...globalStyles.text11Regular,
    marginBottom: 0,
    marginTop: '0.375rem',
    textAlign: 'left',
  },
  priceText: {
    ...globalStyles.text14Bold,
    color: colors.labelBlack100,
    marginTop: '0.375rem',
  },
});
