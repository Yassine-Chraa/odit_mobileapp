import {Dispatch} from 'react';
import axios from 'axios';
import {getApiUrl} from '../../services/ApiService';
import Toast from 'react-native-toast-message';
import { DispatchType } from '../../types/DispatchType';
const usersUrl = getApiUrl('users');
export const getProfileAction =
  () => async (dispatch: Dispatch<DispatchType<String>>) => {
    try {
      const {data} = await axios.get(`${usersUrl}/profile`);
      console.log(data);
      dispatch({type: `Get Profile`, payload: data});
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: `something went wrong !`,
        position: 'top',
      });
    }
  };
