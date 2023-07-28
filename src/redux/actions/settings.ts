import {Dispatch} from 'react';

export const switchDarkMode =
  (v: boolean) => async (dispatch: Dispatch<DispatchType<String>>) => {
    try {
      //@ts-ignore
      dispatch({type: 'Switch Dark Mode', payload: {darkMode: v}});
    } catch (error: any) {
      console.log(error);
    }
  };
