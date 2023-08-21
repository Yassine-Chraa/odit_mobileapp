import axios from 'axios';
import jwtDecode from 'jwt-decode';
import {getApiUrl} from '../services/ApiService';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
const apiUrl = getApiUrl('refreshToken');
const instance = axios.create();

instance.interceptors.request.use(
  async function (config) {
    if (config.headers['authorization']) {
      const token = config.headers['authorization'].substring(7);
      const decoded: {exp: number} = jwtDecode(token);
      if (decoded.exp < Date.now() / 1000) {
        const refreshToken = await AsyncStorage.getItem('refresh_token');
        try {
          const {data} = await axios.get(apiUrl, {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          });
          axios.defaults.headers.common['authorization'] = `Bearer ${data}`;
          await AsyncStorage.setItem('access_token', data);
        } catch (e) {
          Toast.show({
            type: 'error',
            text1: 'error',
            position: 'top',
          });
        }
      }
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

export default instance;
