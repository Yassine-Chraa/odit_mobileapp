import {Dispatch} from '@reduxjs/toolkit';
import {DispatchType} from '../../types/DispatchType';
import {getApiUrl} from '../../services/ApiService';
import Toast from 'react-native-toast-message';
import axios from 'axios';

const sectionUrl = getApiUrl('sections');
const taskUrl = getApiUrl('tasks');
export const getSectionsAction =
  (roomId: number) => async (dispatch: Dispatch<DispatchType<String>>) => {
    try {
      const {data} = await axios.get(`${sectionUrl}?roomId=${roomId}`);
      dispatch({type: `Get Sections`, payload: data});
      console.log(data);
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: `something went wrong !`,
        position: 'top',
      });
      console.log(error)
    }
  };
