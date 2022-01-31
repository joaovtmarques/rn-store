import EStyleSheet from 'react-native-extended-stylesheet';
import {colors, fonts, sizes} from '../../utils';

export const styles = EStyleSheet.create({
  input: {
    width: '100%',
    height: '3.5.rem',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: '0.031rem',
    borderColor: colors.labelBlack5,
  },
  icon: {
    marginRight: sizes.font16,
  },
  textInput: {
    fontFamily: fonts.textBold,
    fontSize: sizes.font16,
    lineHeight: sizes.font24,
    color: colors.labelBlack100,
  },
});
