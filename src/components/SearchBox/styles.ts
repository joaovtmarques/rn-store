import {colors, sizes} from './../../utils/theme';
import EStyleSheet from 'react-native-extended-stylesheet';
import {globalStyles} from '../../utils/styles/global.styles';

export const styles = EStyleSheet.create({
  searchBox: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: sizes.font16,
    minHeight: sizes.font56,
    maxHeight: sizes.font56,
    borderRadius: '6.25rem',
    justifyContent: 'space-between',
    backgroundColor: colors.labelBlack5,
  },
  searchInput: {
    flex: 1,
    marginLeft: '0.5rem',
    ...globalStyles.text16Bold,
    color: colors.labelBlack30,
  },
  xButton: {
    marginLeft: '0.5rem',
  },
});
