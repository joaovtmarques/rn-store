import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';
import {colors} from '../../utils';
import {globalStyles} from '../../utils/styles/global.styles';

import Line from '../../components/Line';
import Input from '../../components/Input';
import CloseButton from '../../components/CloseButton';
import RadioButton from '../../components/RadioButton';
import SocialMediaButton from '../../components/SocialMediaButton';

import Mail from '../../assets/icons/IC/24/mail.svg';
import Name from '../../assets/icons/IC/24/user.svg';
import Password from '../../assets/icons/IC/24/password.svg';
import Apple from '../../assets/icons/IC/social/logoApple.svg';
import Twitter from '../../assets/icons/IC/social/logoTwitter.svg';
import SignUpAndInButton from '../../components/SignUpAndInButton';
import Facebook from '../../assets/icons/IC/social/logoFacebook.svg';

export default function SignUp() {
  const [mail, setMail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  function handleCheckedButton() {
    checked ? setChecked(false) : setChecked(true);
  }

  return (
    <View
      style={[{backgroundColor: colors.labelWhite100}, globalStyles.container]}>
      <View style={styles.content}>
        <CloseButton style={styles.button} />
        <View style={styles.topTextContainer}>
          <Text style={globalStyles.text28Bold}>Let’s Get Started!</Text>
          <Text>Sign up with Social of fill the form to continue.</Text>
        </View>
        <View style={styles.socialMediaContainer}>
          <SocialMediaButton style={styles.socialMediaButton} Icon={Twitter} />
          <SocialMediaButton style={styles.socialMediaButton} Icon={Facebook} />
          <SocialMediaButton style={styles.socialMediaButton} Icon={Apple} />
        </View>
        <Line style={globalStyles.line} />
        <View style={styles.inputsContainer}>
          <Input
            Icon={Mail}
            iconStyle={globalStyles.iconStyle}
            placeholder="Email"
            style={globalStyles.input}
            placeholderTextColor={colors.labelBlack30}
            textInputStyle={
              mail ? globalStyles.textInputStyle2 : globalStyles.textInputStyle
            }
            value={mail}
            onChangeText={(t: string) => setMail(t)}
          />
          <Input
            Icon={Name}
            iconStyle={globalStyles.iconStyle}
            placeholder="Name"
            style={globalStyles.input}
            placeholderTextColor={colors.labelBlack30}
            textInputStyle={
              name ? globalStyles.textInputStyle2 : globalStyles.textInputStyle
            }
            value={name}
            onChangeText={(t: string) => setName(t)}
          />
          <Input
            Icon={Password}
            iconStyle={globalStyles.iconStyle}
            placeholder="Password"
            style={globalStyles.input}
            placeholderTextColor={colors.labelBlack30}
            textInputStyle={
              password
                ? globalStyles.textInputStyle2
                : globalStyles.textInputStyle
            }
            secure
            value={password}
            onChangeText={(t: string) => setPassword(t)}
          />
        </View>
        <Text style={styles.text11Regular}>
          At least 8 characters, 1 uppercase letter, 1 number, 1 symbol
        </Text>
        <View style={styles.termsOfServiceContainer}>
          <RadioButton
            onPress={handleCheckedButton}
            style={styles.radioButton}
            visible={checked}
          />
          <Text style={styles.termsText}>
            By Signing up, you agree to the{' '}
            <Text style={styles.termsTextBlack}>Terms of Service</Text> and{' '}
            <Text style={styles.termsTextBlack}>Privacy Policy</Text>
          </Text>
        </View>
        <View style={styles.signUpButtonContainer}>
          <SignUpAndInButton
            styleButton={
              mail && name && password && checked
                ? styles.signUpAndInButton
                : styles.signUpAndInButton2
            }
            styleText={
              mail && name && password && checked
                ? styles.textButton
                : styles.textButton2
            }
            title="Sign Up"
            visible={mail && name && password && checked ? true : false}
            disabled={mail && name && password && checked ? false : true}
          />
        </View>
      </View>
    </View>
  );
}
