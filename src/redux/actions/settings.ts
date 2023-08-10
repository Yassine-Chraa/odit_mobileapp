import {Dispatch} from 'react';
import { DispatchType } from '../../types/DispatchType';

export const switchDarkMode =
  (v: boolean) =>
  async (dispatch: Dispatch<DispatchType<{darkMode: boolean}>>) => {
    try {
      dispatch({type: 'Switch Dark Mode', payload: {darkMode: v}});
    } catch (error: any) {
      console.log(error);
    }
  };
