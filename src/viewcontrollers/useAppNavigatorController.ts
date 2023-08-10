import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ISettings from '../types/ISettings';
import IUser from '../types/IUser';
import {IUserTokens} from '../types/IUserTokens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setTokens} from '../redux/actions/auth';
import axios from 'axios';
import SplashScreen from 'react-native-splash-screen';

const useAppNavigatorController = () => {
  const dispatch: any = useDispatch();

  const darkMode = useSelector(
    (state: {settings: ISettings}) => state.settings.darkMode,
  );
  const tokens = useSelector((state: {tokens: IUserTokens}) => state.tokens);
  const checkIfLogged = async () => {
    try {
      const access_token = await AsyncStorage.getItem('access_token');
      const refresh_token = await AsyncStorage.getItem('access_token');
      if (access_token && refresh_token) {
        dispatch(setTokens({access_token, refresh_token}));
        axios.defaults.headers.common["authorization"] = `Bearer ${access_token}`;
      }
    } catch (e) {
      console.log(e);
      return false;
    }
    SplashScreen.hide();
  };
  useEffect(() => {
    checkIfLogged();
  }, []);

  return {
    darkMode,
    tokens,
  };
};

export default useAppNavigatorController;
