import {Dispatch} from 'react';
import axios from 'axios';
import {getApiUrl} from '../../services/ApiService';
import Toast from 'react-native-toast-message';
import {IProject} from '../../types/IProject';

const projectUrl = getApiUrl('projects');
const roomUrl = getApiUrl('rooms');
export const getProjectsAction =
  () => async (dispatch: Dispatch<DispatchType<String>>) => {
    try {
      const {data} = await axios.get(`${projectUrl}`);
      console.log(data);
      dispatch({type: `Get Projects`, payload: data});
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: `something went wrong !`,
        position: 'top',
      });
    }
  };

export const createProjectAction =
  (project: IProject) => async (dispatch: Dispatch<DispatchType<String>>) => {
    try {
      const {data} = await axios.post(`${projectUrl}`, project);
      console.log(data);
      dispatch({type: `Set Project`, payload: data});
      Toast.show({
        type: 'success',
        text1: 'Project created successfully',
        position: 'top',
      });
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: `something went wrong !`,
        position: 'top',
      });
    }
  };

export const getProjectAction =
  (projectId: number) => async (dispatch: Dispatch<DispatchType<String>>) => {
    try {
      const {data} = await axios.get(`${projectUrl}/${projectId}`);
      const req = await axios.get(`${roomUrl}?projectId=${projectId}`);
      console.log(req.data);
      dispatch({type: `Set Project`, payload: {...data, rooms: req.data}});
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: `something went wrong !`,
        position: 'top',
      });
    }
  };
