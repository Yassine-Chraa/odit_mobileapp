import {Dispatch} from '@reduxjs/toolkit';
import {DispatchType} from '../../types/DispatchType';
import {getApiUrl} from '../../services/ApiService';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import {ISection} from '../../types/ISection';

const sectionUrl = getApiUrl('sections');
const taskUrl = getApiUrl('tasks');
export const getSectionsAction =
  (roomId: number) => async (dispatch: Dispatch<DispatchType<ISection[]>>) => {
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
      console.log(error);
    }
  };
export const createSectionAction =
  (section: ISection) =>
  async (dispatch: Dispatch<DispatchType<ISection[]>>) => {
    try {
      console.log(section);
      const {data} = await axios.post(`${sectionUrl}`, section);
      dispatch({type: `Add Section`, payload: data});
      Toast.show({
        type: 'success',
        text1: 'Section created successfully',
        position: 'top',
      });
      return true;
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: `something went wrong !`,
        position: 'top',
      });
      return false;
    }
  };
