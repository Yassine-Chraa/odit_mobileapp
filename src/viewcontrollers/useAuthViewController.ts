import {useState} from 'react';
import {Linking} from 'react-native';
import {useDispatch} from 'react-redux';
import {authAction, setTokens} from '../redux/actions/auth';
import Toast from 'react-native-toast-message';
import {ISignupRequest} from '../types/ISignupRequest';
import {useNavigation} from '@react-navigation/native';
import {validatePassword} from '../helpers/validationFunctions';

const UseAuthViewController = () => {
  const dispatch: any = useDispatch();
  const [loginCredential, setLoginCredential] = useState<ILoginRequest>({});
  const [signupCredential, setSignupCredential] = useState<ISignupRequest>({});
  const navigation: any = useNavigation();

  const regexValidation = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      {
        Toast.show({
          type: 'error',
          text1: 'Enter a Valid Email',
          position: 'top',
        });
        return false;
      }
    }
    return true;
  };
  const validateCredential = (credential: ISignupRequest) => {
    if (
      !credential.firstName ||
      !credential.lastName ||
      !credential.email ||
      !credential.password
    ) {
      Toast.show({
        type: 'error',
        text1: 'All fields are required !',
        position: 'top',
      });
      return false;
    } else {
      if (credential.firstName.length < 4) {
        Toast.show({
          type: 'error',
          text1: 'First name must be at least 3 characters long !',
          position: 'top',
        });
        return false;
      }
      if (credential.lastName.length < 3) {
        Toast.show({
          type: 'error',
          text1: 'Last name must be at least 2 characters long !',
          position: 'top',
        });
        return false;
      }
      if (!regexValidation(credential.email)) return false;
      return validatePassword(credential.password);
    }
  };
  const loginValidation = (credential: ILoginRequest) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!credential.email || !credential.password) {
      Toast.show({
        type: 'error',
        text1: "Email and password can't be empty !",
        position: 'top',
      });
      return false;
    } else {
      if (!emailRegex.test(credential.email)) {
        {
          Toast.show({
            type: 'error',
            text1: 'Enter a Valid Email',
            position: 'top',
          });
          return false;
        }
      }
    }
    return true;
  };

  const beforeSignup = () => {
    if (validateCredential(signupCredential)) {
      navigation.navigate('Confirmation', {signupCredential});
    }
  };
  const signup = () => {
    if (validateCredential(signupCredential))
      dispatch(authAction('register', signupCredential));
  };
  const login = async () => {
    if (loginValidation(loginCredential))
      dispatch(authAction('authenticate', loginCredential));
  };
  const sendEmail = async () => {};

  return {
    loginCredential,
    signupCredential,
    setLoginCredential,
    setSignupCredential,
    signup,
    login,
    beforeSignup,
  };
};

export default UseAuthViewController;
