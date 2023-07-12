import { Dispatch } from "react";

export const switchDarkMode =
  () =>
  async (dispatch: Dispatch<DispatchType<String>>) => {
    try {
        //@ts-ignore
        dispatch({type: "Switch Dark Mode"});
    } catch (error: any) {
      console.log(error);
    }
  };