import {Dispatch} from 'react';
import axios from '../../helpers/axiosConfig';
import {getApiUrl} from '../../services/ApiService';
import Toast from 'react-native-toast-message';
import {IProject} from '../../types/IProject';
import {IMember} from '../../types/IMember';
import { DispatchType } from '../../types/DispatchType';

const userUrl = getApiUrl('users');
const projectUrl = getApiUrl('projects');
const roomUrl = getApiUrl('rooms');
const invitationUrl = getApiUrl('invitations');
const userTaskUrl = getApiUrl('userTasks');

export const getProjectsAction =
  () => async (dispatch: Dispatch<DispatchType<String>>) => {
    try {
      const {data} = await axios.get(`${projectUrl}`);
      dispatch({type: `Get Projects`, payload: data});
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: 'something went wrong !',
        position: 'top',
      });
    }
  };

export const createProjectAction =
  (project: IProject) => async (dispatch: Dispatch<DispatchType<String>>) => {
    try {
      const {data} = await axios.post(`${projectUrl}`, project);
      dispatch({type: `Set Project`, payload: data});
      Toast.show({
        type: 'success',
        text1: 'Project created successfully',
        position: 'top',
      });
      return data;
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: `something went wrong !`,
        position: 'top',
      });
      return false;
    }
  };

export const getProjectAction =
  (projectId: number) => async (dispatch: Dispatch<DispatchType<IMember>>) => {
    try {
      const {data} = await axios.get(`${projectUrl}/${projectId}`);
      const rooms = await axios.get(`${roomUrl}?projectId=${projectId}`);

      let members: IMember[] = [];
      let roomMembers: IMember[] = [];

      for (let i = 0; i < data.members.length; i++) {
        const res = await axios.get(`${userUrl}/${data.members[i].userId}`);
        const {firstName, lastName} = res.data;
        members.push({...data.members[i], firstName, lastName});
      }
      for (let k = 0; k < rooms.data.length; k++) {
        const _roomMembers = rooms.data[k].members;
        for (let i = 0; i < _roomMembers.length; i++) {
          const member = members.find(member => {
            return member.id == _roomMembers[i].memberId;
          });
          if (member) {
            const res = await axios.get(`${userUrl}/${member.userId}`);
            const {firstName, lastName} = res.data;
           
            roomMembers.push({..._roomMembers[i], firstName, lastName});
          }
        }
        rooms.data[0].members = roomMembers;
      }
      const tasks = await axios.get(`${userTaskUrl}/${projectId}`);
      dispatch({
        type: `Set Project`,
        payload: {...data, rooms: rooms.data, members: members,tasks: tasks.data},
      });
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: `something went wrong !`,
        position: 'top',
      });
    }
  };

export const sendInvitationAction =
  (projectId: number, userEmail: string) =>
  async (dispatch: Dispatch<DispatchType<String>>) => {
    try {
      console.log(projectId);
      axios.post(`${invitationUrl}`, {
        projectId,
        userEmail,
      });
      return true;
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: `invitations not sended !`,
        position: 'top',
      });
      return false;
    }
  };
