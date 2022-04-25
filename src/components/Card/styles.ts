import {colors, sizes} from './../../utils/theme';
import EStyleSheet from 'react-native-extended-stylesheet';
import {globalStyles} from '../../utils/styles/global.styles';

export const styles = EStyleSheet.create({
  container: {
    height: '21.563rem',
    width: '100%',
    borderRadius: '0.625rem',
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    padding: '1.5rem',
    justifyContent: 'flex-end',
  },
  textNewIn: {
    ...globalStyles.text12Bold60,
    color: colors.labelWhite100,
  },
  textNike: {
    ...globalStyles.text20Bold,
    color: colors.labelWhite100,
    marginTop: '0.5rem',
  },
  textPrice: {
    ...globalStyles.text14Bold,
    lineHeight: sizes.font20,
    color: colors.labelWhite100,
    marginTop: '0.5rem',
  },
});
