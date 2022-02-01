import EStyleSheet from 'react-native-extended-stylesheet';
import {sizes} from '../../utils';

export const styles = EStyleSheet.create({
  content: {
    height: sizes.height,
    paddingTop: '$padding',
    paddingBottom: '$padding',
    paddingHorizontal: '$pHorizontal',
  },
  topTextContainer: {
    marginTop: '$pHorizontal',
  },
  phoneNumberText: {
    marginTop: '0.3rem',
  },
  resendCodeButton: {
    marginTop: '1rem',
  },
  inputsContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '4.813rem',
    justifyContent: 'space-evenly',
  },
});
