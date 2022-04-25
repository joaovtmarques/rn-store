import EStyleSheet from 'react-native-extended-stylesheet';

import {colors} from './../../utils/theme';
import {globalStyles} from './../../utils/styles/global.styles';

export const styles = EStyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: '0.938rem',
    backgroundColor: colors.labelWhite100,
  },
  sectionText: {
    ...globalStyles.text20Bold,
    marginTop: '2.75rem',
    marginBottom: '0.875rem',
  },
  mostPopularList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
});
