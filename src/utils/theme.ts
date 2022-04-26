import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const colors = {
  labelBlack5: 'rgba(18, 18, 29, 0.05)',
  labelBlack10: 'rgba(18, 18, 29, 0.1)',
  labelBlack30: 'rgba(18, 18, 29, 0.3)',
  labelBlack60: 'rgba(18, 18, 29, 0.6)',
  labelBlack100: 'rgba(18, 18, 29, 1)',

  labelWhite5: 'rgba(255, 255, 255, 0.05)',
  labelWhite10: 'rgba(255, 255, 255, 0.1)',
  labelWhite30: 'rgba(255, 255, 255, 0.3)',
  labelWhite60: 'rgba(255, 255, 255, 0.6)',
  labelWhite100: 'rgba(255, 255, 255, 1)',

  keyRed: '#FF2343',
  keyGreen: '#42D70D',
  keyBlue: '#0008C7',
};

export const sizes = {
  // global sizes
  font11: '0.688rem',
  font12: '0.75rem',
  font14: '0.875rem',
  font16: '1rem',
  font20: '1.25rem',
  font24: '1.5rem',
  font28: '1.75.rem',
  font48: '3rem',
  font56: '3.5rem',

  // app dimensions
  width,
  height,
};

export const fonts = {
  textBold: 'SFProDisplay-Bold',
  textRegular: 'SFProDisplay-Regular',
  textBold2: 'Poppins-Bold',
  textBoldItalic: 'Poppins-BoldItalic',
};
