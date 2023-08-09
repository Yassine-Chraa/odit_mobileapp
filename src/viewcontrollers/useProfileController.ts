import {switchDarkMode} from './../redux/actions/settings';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ISettings from '../types/ISettings';
import {logoutAction} from '../redux/actions/auth';
import Toast from 'react-native-toast-message';
import IUser from '../types/IUser';
import {getProfileAction} from '../redux/actions/user';

const useProfileController = () => {
  const dispatch: any = useDispatch();

  const switchDark = (v: boolean) => {
    dispatch(switchDarkMode(v));
  };
  const darkMode = useSelector(
    (state: {settings: ISettings}) => state.settings.darkMode,
  );

  const profile = useSelector((state: {user: IUser}) => state.user);

  const getProfile = () => {
    dispatch(getProfileAction());
  };
  const logout = () => {
    dispatch(logoutAction());
    Toast.show({
      type: 'success',
      text1: 'Logout successfully',
      position: 'top',
    });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return {switchDark, darkMode, profile, logout};
};

export default useProfileController;
