/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  CountryCode,
  Country,
} from 'react-native-country-picker-modal/lib/types';
import CountryPicker from 'react-native-country-picker-modal';

import {styles} from './styles';
import {colors, fonts, sizes} from '../../utils';
import {globalStyles} from '../../utils/styles/global.styles';

import Button from '../../components/Button';
import CloseButton from '../../components/CloseButton';

import ArrowIcon from '../../assets/icons/IC/24/chevronDown.svg';

export default function ForgotPassword() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const [countryCode, setCountryCode] = useState<CountryCode>('US');
  const [country, setCountry] = useState<Country>({
    callingCode: '1',
    region: 'Americas',
    subregion: 'North America',
    cca2: 'US',
    currency: 'USD',
    flag: 'flag-us',
    name: 'United States',
  });
  const [withCountryNameButton, setWithCountryNameButton] =
    useState<boolean>(false);
  const [withFlag, setWithFlag] = useState<boolean>(true);
  const [withEmoji, setWithEmoji] = useState<boolean>(true);
  const [withFilter, setWithFilter] = useState<boolean>(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState<boolean>(false);
  const [withCallingCode, setWithCallingCode] = useState<boolean>(false);
  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCountry(country);
  };

  return (
    <View style={globalStyles.container}>
      <View style={styles.content}>
        <CloseButton />
        <View style={styles.topTextContainer}>
          <Text style={globalStyles.text28Bold}>Forgot your password?</Text>
          <Text style={globalStyles.text12Regular60}>
            {
              'If you need help resetting your password\nwe can help by sending you a link to reset it.'
            }
          </Text>
        </View>
        <View style={styles.countryInputContainer}>
          <View style={styles.countrySelector}>
            <CountryPicker
              {...{
                countryCode,
                withFlag,
                withCountryNameButton,
                withAlphaFilter,
                withEmoji,
                onSelect,
                withCallingCode,
              }}
              visible={false}
              containerButtonStyle={styles.countryButton}
            />
            <ArrowIcon
              height={EStyleSheet.value('0.938rem')}
              width={EStyleSheet.value('1.125rem')}
              style={styles.arrowIcon}
            />
          </View>
          <Text style={styles.callingCodeText}>+{country.callingCode}</Text>
          <TextInput
            value={phoneNumber}
            onChangeText={t => setPhoneNumber(t)}
            keyboardType="numeric"
            style={
              !phoneNumber
                ? styles.input
                : [
                    styles.input,
                    {
                      fontFamily: fonts.textBold,
                      color: colors.labelBlack100,
                    },
                  ]
            }
            placeholder="Your Phone Number"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Next"
            content={phoneNumber.length >= 8 ? true : false}
            visible={phoneNumber.length >= 8 ? true : false}
            disabled={phoneNumber.length >= 8 ? false : true}
          />
        </View>
      </View>
    </View>
  );
}
