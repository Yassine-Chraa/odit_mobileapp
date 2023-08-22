import {Dispatch} from 'react';
import axios from '../../helpers/axiosConfig';
import {getApiUrl} from '../../services/ApiService';
import Toast from 'react-native-toast-message';
import {DispatchType} from '../../types/DispatchType';
import {IProfileUpdateRequest} from '../../types/IProfileUpdateRequest';
import AsyncStorage from '@react-native-async-storage/async-storage';
const usersUrl = getApiUrl('users');
export const getProfileAction =
  () => async (dispatch: Dispatch<DispatchType<String>>) => {
    try {
      const {data} = await axios.get(`${usersUrl}/profile`);
      dispatch({type: `Get Profile`, payload: data});
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: `something went wrong !`,
        position: 'top',
      });
    }
  };

export const updateProfileAction =
  (updateRequest: IProfileUpdateRequest) =>
  async (
    dispatch: Dispatch<
      DispatchType<{access_token: string;}>
    >,
  ) => {
    try {
      const {data} = await axios.put(`${usersUrl}/profile`, updateRequest);
      const {access_token} = data;
      axios.defaults.headers.common['authorization'] = `Bearer ${access_token}`;
      dispatch({type: 'Set Access Token', payload: access_token});

      await AsyncStorage.setItem('access_token', access_token);
      Toast.show({
        type: 'success',
        text1: 'Profile updated successfully',
        position: 'top',
      });
      return true;
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: `something went wrong !`,
        position: 'top',
      });
      return false;
    }
  };

export const updatePasswordAction =
  (passwordRequest: {currentPassword: string; newPassword: string}) =>
  async (
    dispatch: Dispatch<
      DispatchType<{access_token: string}>
    >,
  ) => {
    try {
      const {data} = await axios.put(`${usersUrl}/password`, passwordRequest);
      const {access_token} = data;
      axios.defaults.headers.common['authorization'] = `Bearer ${access_token}`;
      dispatch({type: 'Set Access Token', payload: access_token});

      await AsyncStorage.setItem('access_token', access_token);

      Toast.show({
        type: 'success',
        text1: 'Paswword updated successfully',
        position: 'top',
      });
      return true;
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: `${
          error.message.includes('403')
            ? 'password incorrect'
            : 'something went wrong !'
        }`,
        position: 'top',
      });
      return false;
    }
  };
