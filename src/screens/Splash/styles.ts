import EStyleSheet from 'react-native-extended-stylesheet';
import {colors, fonts, sizes} from '../../utils';

export const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    height: sizes.height,
    justifyContent: 'space-between',
    paddingVertical: '$pVertical',
    paddingHorizontal: '$pHorizontal',
  },
  topContentContainer: {},
  text16Bold: {
    fontSize: sizes.font16,
    color: colors.labelWhite30,
    fontFamily: fonts.textBold,
  },
  text48Bold: {
    fontSize: sizes.font48,
    color: colors.labelWhite100,
    fontFamily: fonts.textBoldItalic,
  },
  text24: {
    fontSize: sizes.font24,
    color: colors.labelWhite100,
    fontFamily: fonts.textBold2,
    lineHeight: '2rem',
  },
  bottomContentContainer: {
    width: '100%',
  },
});

export const stylesBackground = {
  background: {
    flex: 1,
    height: sizes.height,
  },
};
