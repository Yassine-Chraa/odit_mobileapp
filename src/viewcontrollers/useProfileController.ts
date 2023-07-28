import {switchDarkMode} from './../redux/actions/settings';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ISettings from '../types/ISettings';

const useProfileController = () => {
  const dispatch: any = useDispatch();

  const switchDark = (v: boolean) => {
    dispatch(switchDarkMode(v));
  };
  const darkMode = useSelector(
    (state: {settings: ISettings}) => state.settings.darkMode,
  );

  useEffect(() => {}, []);

  return {switchDark,darkMode};
};

export default useProfileController;
