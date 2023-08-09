import { IUserTokens } from './../../types/IUserTokens';
import {Dispatch} from 'react';
import {getApiUrl} from '../../services/ApiService';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import {ISignupRequest} from '../../types/ISignupRequest';

const authUrl = getApiUrl('auth');

export const authAction =
  (
    type: 'authenticate' | 'register',
    credential: ILoginRequest | ISignupRequest,
  ) =>
  async (dispatch: Dispatch<DispatchType<IUserTokens>>) => {
    try {
      const {data} = await axios.post(`${authUrl}/${type}`, credential);
      const {access_token, refresh_token} = data;

      axios.defaults.headers.common["authorization"] = `Bearer ${access_token}`;
      dispatch({type: 'Set Tokens', payload: {access_token, refresh_token}});

      await AsyncStorage.setItem('access_token', access_token);
      await AsyncStorage.setItem('refresh_token', refresh_token);
      Toast.show({
        type: 'success',
        text1: `${
          type == 'authenticate' ? 'Logged' : 'Registred'
        } successfully`,
        position: 'top',
      });
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: `${type == 'authenticate' ? 'Login' : 'Register'} failed!`,
        position: 'top',
      });
    }
  };

export const logoutAction =
  () => async (dispatch: Dispatch<DispatchType<boolean>>) => {
    try {
      await AsyncStorage.removeItem('access_token');
      await AsyncStorage.removeItem('refresh_token');
      dispatch({type: 'Set Tokens', payload: false});
      axios.defaults.headers.common["authorization"] = '';
    } catch (error: any) {
      console.log(error);
    }
  };

export const setTokens =
  (
    tokens: IUserTokens
  ) =>
  async (dispatch: Dispatch<DispatchType<IUserTokens>>) => {
      dispatch({type: 'Set Tokens', payload: tokens});
  };
