import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {authAction, setTokens} from '../redux/actions/auth';
import Toast from 'react-native-toast-message';
import {ISignupRequest} from '../types/ISignupRequest';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      if (!regexValidation(credential.email)) return false;
      if (credential.firstName.length < 3) {
        Toast.show({
          type: 'error',
          text1: 'First name must be at least 3 characters long !',
          position: 'top',
        });
        return false;
      }
      if (credential.lastName.length < 2) {
        Toast.show({
          type: 'error',
          text1: 'Last name must be at least 2 characters long !',
          position: 'top',
        });
        return false;
      }
    }

    return true;
  };
  const loginValidation = (credential: ILoginRequest) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (typeof credential)
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
  const signup = (credential: ISignupRequest) => {
    dispatch(authAction('register', credential));
  };
  const login = async () => {
    if (loginValidation(loginCredential))
      dispatch(authAction('authenticate', loginCredential));
  };

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
