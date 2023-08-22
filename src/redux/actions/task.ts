import {Dispatch} from '@reduxjs/toolkit';
import {DispatchType} from '../../types/DispatchType';
import {getApiUrl} from '../../services/ApiService';
import Toast from 'react-native-toast-message';
import axios from '../../helpers/axiosConfig';
import {ISection} from '../../types/ISection';
import {ITask} from '../../types/ITask';

const sectionUrl = getApiUrl('sections');
const taskUrl = getApiUrl('tasks');
const userTaskUrl = getApiUrl('userTasks');

export const getSectionsAction =
  (roomId: number) => async (dispatch: Dispatch<DispatchType<ISection[]>>) => {
    try {
      const {data} = await axios.get(`${sectionUrl}?roomId=${roomId}`);
      dispatch({type: 'Get Sections', payload: data});
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

export const createTaskAction =
  (task: ITask, roomId: number) =>
  async (dispatch: Dispatch<DispatchType<ISection[]>>) => {
    try {
      const {data} = await axios.post(`${taskUrl}?roomId=${roomId}`, task);
      Toast.show({
        type: 'success',
        text1: 'Task created successfully',
        position: 'top',
      });
      return true;
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: `something went wrong !`,
        position: 'top',
      });
      console.log(error);
      return false;
    }
  };

export const getTasksAction =
  () => async (dispatch: Dispatch<DispatchType<ISection[]>>) => {
    try {
      const {data} = await axios.get(userTaskUrl);
      //Todo get assigned members information
      dispatch({type: 'Get User Tasks', payload: data});
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: `something went wrong !`,
        position: 'top',
      });
      console.log(error);
    }
  };
