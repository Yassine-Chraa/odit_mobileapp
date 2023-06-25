import {Dispatch} from 'react';
import User from '../../types/User';
import axios from 'axios';
import { getApiUrl } from '../../services/ApiService';
import { setGenericPassword } from 'react-native-keychain';

const authUrl = getApiUrl('auth');
export const getUser = () => async (dispatch: Dispatch<DispatchType<User>>) => {
  try {
    const user1: User = {
      id: 1,
      firstName: 'Yassine',
      lastName: 'Chraa',
      email: 'yassine@gmail.com',
    };
    const data: User = user1;
    dispatch({type: 'Get Current User', payload: data});
  } catch (error: any) {
    console.log(error.message);
  }
};

export const authenticate =
  (loginCredential: loginRequest) =>
  async (dispatch: Dispatch<DispatchType<String>>) => {
    try {
      const {data} = await axios.post(
        `${authUrl}/authenticate`,
        loginCredential,
      );
      await setGenericPassword(loginCredential.email,data.token);
      
      //Todo: get user info and update state

      //dispatch({type: 'StoreUser', payload: data});
    } catch (error: any) {
      console.log(error.message);
    }
  };
