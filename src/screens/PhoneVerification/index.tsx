import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';
import {globalStyles} from '../../utils/styles/global.styles';

import CodeInput from '../../components/CodeInput';
import CloseButton from '../../components/CloseButton';

export default function PhoneVerification() {
  const navigation = useNavigation();

  const [code1, setCode1] = useState('');
  const [code2, setCode2] = useState('');
  const [code3, setCode3] = useState('');
  const [code4, setCode4] = useState('');

  return (
    <View style={globalStyles.container}>
      <View style={styles.content}>
        <CloseButton onPress={() => navigation.goBack()} />
        <View style={styles.topTextContainer}>
          <Text style={globalStyles.text28Bold}>Phone Verification</Text>
          <Text style={globalStyles.text12Regular60}>
            Please enter the 4-digit code send to you at
          </Text>
          <Text style={[globalStyles.text12Regular, styles.phoneNumberText]}>
            +1 800-925-1234
          </Text>
          <TouchableOpacity style={styles.resendCodeButton}>
            <Text style={globalStyles.text12Bold60}>Resend code</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputsContainer}>
          <CodeInput
            focus={true}
            onChange={(t: string) => setCode1(t)}
            value={code1}
          />
          <CodeInput onChange={(t: string) => setCode2(t)} value={code2} />
          <CodeInput onChange={(t: string) => setCode3(t)} value={code3} />
          <CodeInput onChange={(t: string) => setCode4(t)} value={code4} />
        </View>
      </View>
    </View>
  );
}
