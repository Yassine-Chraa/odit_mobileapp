import {Dispatch} from 'react';
import { getApiUrl } from '../../services/ApiService';

const authUrl = getApiUrl('auth');

export const authenticate =
  (loginCredential: loginRequest) =>
  async (dispatch: Dispatch<DispatchType<String>>) => {
    try {
    } catch (error: any) {
      console.log(error);
    }
  };
