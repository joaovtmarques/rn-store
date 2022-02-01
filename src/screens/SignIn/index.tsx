import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';
import {colors} from '../../utils';
import {globalStyles} from '../../utils/styles/global.styles';

import Line from '../../components/Line';
import Input from '../../components/Input';
import Button from '../../components/Button';
import CloseButton from '../../components/CloseButton';
import RadioButton from '../../components/RadioButton';
import SocialMediaButton from '../../components/SocialMediaButton';

import Email from '../../assets/icons/IC/24/mail.svg';
import Password from '../../assets/icons/IC/24/password.svg';
import Apple from '../../assets/icons/IC/social/logoApple.svg';
import Twitter from '../../assets/icons/IC/social/logoTwitter.svg';
import Facebook from '../../assets/icons/IC/social/logoFacebook.svg';

export default function SignIn() {
  const [email, setEmail] = useState('');
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
            <Text style={globalStyles.text28Bold}>Welcome</Text>
            <Text style={globalStyles.text12Regular60}>Sign in with Social of fill the form to continue.</Text>
          </View>
          <View style={styles.socialMediaContainer}>
            <SocialMediaButton Icon={Twitter} />
            <SocialMediaButton Icon={Facebook} />
            <SocialMediaButton Icon={Apple} />
          </View>
          <Line />
          <View>
            <Input
              Icon={Email}
              value={email}
              placeholder="Email"
              content={email ? true : false}
              onChangeText={(t: string) => setEmail(t)}
            />
            <Input
              secure
              Icon={Password}
              value={password}
              placeholder="Password"
              content={password ? true : false}
              onChangeText={(t: string) => setPassword(t)}
            />
            <TouchableOpacity style={styles.resetPassButton}>
              <Text style={globalStyles.text11Regular}>Reset password</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={styles.rememberMeContainer}>
            <RadioButton
              onPress={handleCheckedButton}
              style={styles.radioButton}
              visible={checked}
            />
            <Text style={styles.radioButtonText}>Remember me next time</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Sign In"
              content={email && password && checked ? true : false}
              visible={email && password && checked ? true : false}
              disabled={email && password && checked ? false : true}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
