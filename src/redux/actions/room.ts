import { Dispatch } from "react";
import { IRoom } from "../../types/IRoom";
import { DispatchType } from "../../types/DispatchType";
import Toast from "react-native-toast-message";
import axios from "axios";
import { getApiUrl } from "../../services/ApiService";

const roomUrl = getApiUrl('rooms');
export const createRoomAction =
  (room: IRoom) => async (dispatch: Dispatch<DispatchType<String>>) => {
    try {
      const {data} = await axios.post(`${roomUrl}`, room);
      console.log(room)
      dispatch({type: `Add Room`, payload: data});
      Toast.show({
        type: 'success',
        text1: 'Room created successfully',
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