import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';
import {colors} from '../../utils';
import {globalStyles} from '../../utils/styles/global.styles';

import Line from '../../components/Line';
import Input from '../../components/Input';
import CloseButton from '../../components/CloseButton';
import RadioButton from '../../components/RadioButton';
import SignUpAndInButton from '../../components/Button';
import SocialMediaButton from '../../components/SocialMediaButton';

import Mail from '../../assets/icons/IC/24/mail.svg';
import Name from '../../assets/icons/IC/24/user.svg';
import Password from '../../assets/icons/IC/24/password.svg';
import Apple from '../../assets/icons/IC/social/logoApple.svg';
import Twitter from '../../assets/icons/IC/social/logoTwitter.svg';
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
        <View>
          <CloseButton />
          <View style={styles.topTextContainer}>
            <Text style={globalStyles.text28Bold}>Let’s Get Started!</Text>
            <Text style={globalStyles.text12Regular60}>Sign up with Social of fill the form to continue.</Text>
          </View>
          <View style={styles.socialMediaContainer}>
            <SocialMediaButton Icon={Twitter} />
            <SocialMediaButton Icon={Facebook} />
            <SocialMediaButton Icon={Apple} />
          </View>
          <Line />
          <View style={styles.inputsContainer}>
            <Input
              Icon={Mail}
              value={mail}
              placeholder="Email"
              content={mail ? true : false}
              onChangeText={(t: string) => setMail(t)}
            />
            <Input
              Icon={Name}
              value={name}
              placeholder="Name"
              content={name ? true : false}
              onChangeText={(t: string) => setName(t)}
            />
            <Input
              secure
              Icon={Password}
              value={password}
              placeholder="Password"
              content={password ? true : false}
              onChangeText={(t: string) => setPassword(t)}
            />
            <Text style={styles.text11Regular}>
              At least 8 characters, 1 uppercase letter, 1 number, 1 symbol
            </Text>
          </View>
        </View>
        <View style={styles.termsOfServiceAndButtonStyle}>
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
          <View style={styles.buttonContainer}>
            <SignUpAndInButton
              title="Sign Up"
              visible={mail && name && password && checked ? true : false}
              disabled={mail && name && password && checked ? false : true}
              content={mail && name && password && checked ? true : false}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
