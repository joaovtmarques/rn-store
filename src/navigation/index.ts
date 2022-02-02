import {StackNavigationProp} from '@react-navigation/stack';

import MainStack from './mainStack';
import MainTab from './mainTab';

export type RootStackParamList = {
  My: undefined;
  Today: undefined;
  Story: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Search: undefined;
  MainTab: undefined;
  ForgotPassword: undefined;
  NewAndPopular: undefined;
  PhoneVerification: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export type Props = {
  navigation: ProfileScreenNavigationProp;
};

export {MainStack, MainTab};
