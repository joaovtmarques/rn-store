import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

import {styles, stylesBackground} from './styles';

import background from '../../assets/bg.png';
import Button from '../../components/Button';
import {colors} from '../../utils';

export default function Splash() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={stylesBackground.background}
        source={background}
      />
      <View style={styles.content}>
        <View style={styles.topContentContainer}>
          <Text style={styles.textBuy}>Buy & Sell Authentic</Text>
          <Text style={styles.textStore}>X-S-Store</Text>
          <Text style={styles.textRealTime}>{'Real Time\nMakret Pricing'}</Text>
        </View>
        <View style={styles.bottomContentContainer}>
          <Button
            button={styles.button}
            text={styles.buttonText}
            textColor={colors.labelBlack100}
            title="Sign Up"
            color={colors.labelWhite100}
          />
          <Button
            button={styles.button}
            text={styles.buttonText}
            textColor={colors.labelWhite100}
            title="Sign In"
            color={colors.labelBlack30}
          />
        </View>
      </View>
    </View>
  );
}
