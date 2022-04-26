import {sizes, colors} from './../../utils/theme';
import EStyleSheet from 'react-native-extended-stylesheet';
import {globalStyles} from '../../utils/styles/global.styles';

export const styles = EStyleSheet.create({
  content: {
    paddingHorizontal: sizes.font20,
  },
  header: {
    width: '100%',
    paddingTop: '2rem',
    paddingHorizontal: '2rem',
  },
  title: {
    ...globalStyles.text28Bold,
    marginBottom: 0,
  },
  searchContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '2rem',
  },
  camBox: {
    width: '2.75rem',
    height: '2.75rem',
    alignItems: 'center',
    borderRadius: '3rem',
    marginLeft: '0.375rem',
    justifyContent: 'center',
    backgroundColor: colors.labelBlack5,
  },
  researchedContainer: {
    alignItems: 'center',
    marginTop: sizes.font20,
  },
  researchedText: {
    ...globalStyles.text16Regular,
    marginTop: '1rem',
  },
  cancelButton: {
    marginLeft: '0.5rem',
  },
  cancelText: {
    ...globalStyles.text14Regular,
    color: colors.labelBlack30,
  },
});
