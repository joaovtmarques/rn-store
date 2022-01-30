import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';
import {colors, fonts} from '../../utils';
import {globalStyles} from '../../utils/styles/global.styles';

import Line from '../../components/Line';
import Input from '../../components/Input';
import CloseButton from '../../components/CloseButton';
import RadioButton from '../../components/RadioButton';
import SocialMediaButton from '../../components/SocialMediaButton';

import Mail from '../../assets/icons/IC/24/mail.svg';
import Password from '../../assets/icons/IC/24/password.svg';
import Apple from '../../assets/icons/IC/social/logoApple.svg';
import Twitter from '../../assets/icons/IC/social/logoTwitter.svg';
import SignUpAndInButton from '../../components/Button';
import Facebook from '../../assets/icons/IC/social/logoFacebook.svg';

export default function SignIn() {
  const [mail, setMail] = useState('');
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
          <CloseButton style={styles.button} />
          <View style={styles.topTextContainer}>
            <Text style={globalStyles.text28Bold}>Welcome</Text>
            <Text>Sign in with Social of fill the form to continue.</Text>
          </View>
          <View style={styles.socialMediaContainer}>
            <SocialMediaButton
              style={styles.socialMediaButton}
              Icon={Twitter}
            />
            <SocialMediaButton
              style={styles.socialMediaButton}
              Icon={Facebook}
            />
            <SocialMediaButton style={styles.socialMediaButton} Icon={Apple} />
          </View>
          <Line style={globalStyles.line} />
          <View>
            <Input
              Icon={Mail}
              iconStyle={globalStyles.iconStyle}
              placeholder="Email"
              style={globalStyles.input}
              placeholderTextColor={colors.labelBlack30}
              textInputStyle={
                mail
                  ? globalStyles.textInputStyle
                  : [
                      globalStyles.textInputStyle,
                      {
                        fontFamily: fonts.textRegular,
                        color: colors.labelBlack30,
                      },
                    ]
              }
              value={mail}
              onChangeText={(t: string) => setMail(t)}
            />
            <Input
              Icon={Password}
              iconStyle={globalStyles.iconStyle}
              placeholder="Password"
              style={globalStyles.input}
              placeholderTextColor={colors.labelBlack30}
              textInputStyle={
                password
                  ? globalStyles.textInputStyle
                  : [
                      globalStyles.textInputStyle,
                      {
                        fontFamily: fonts.textRegular,
                        color: colors.labelBlack30,
                      },
                    ]
              }
              secure
              value={password}
              onChangeText={(t: string) => setPassword(t)}
            />
            <TouchableOpacity style={styles.resetPassButton}>
              <Text style={styles.text11Regular}>Reset password</Text>
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
            <Text style={styles.rememberMeText}>Remember me next time</Text>
          </View>
          <View style={globalStyles.signUpAndInButtonContainer}>
            <SignUpAndInButton
              styleButton={
                mail && password && checked
                  ? globalStyles.signUpAndInButton
                  : [
                      globalStyles.signUpAndInButton,
                      {backgroundColor: colors.labelWhite100},
                    ]
              }
              styleText={
                mail && password && checked
                  ? globalStyles.textButton
                  : [
                      globalStyles.textButton,
                      {color: colors.labelBlack60, marginRight: 0},
                    ]
              }
              title="Sign In"
              visible={mail && password && checked ? true : false}
              disabled={mail && password && checked ? false : true}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
