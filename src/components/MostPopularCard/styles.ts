import EStyleSheet from 'react-native-extended-stylesheet';

import {sizes, colors} from './../../utils/theme';
import {globalStyles} from './../../utils/styles/global.styles';

export const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: '1rem',
  },
  imageContainer: {
    width: '5.5rem',
    height: '5.5rem',
    alignItems: 'center',
    marginRight: '1rem',
    justifyContent: 'center',
    borderRadius: sizes.font12,
    backgroundColor: colors.labelBlack5,
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
