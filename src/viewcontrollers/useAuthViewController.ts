import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {authenticate} from '../redux/actions/auth';
import {STORAGE_TYPE, getGenericPassword, setGenericPassword} from "react-native-keychain";

const UseAuthViewController = () => {
  const dispatch = useDispatch();

  const login = async () => {
    await dispatch<any>(
      authenticate({email: 'ahmed@gmail.com', password: 'yassine1'}),
    );
  };

  useEffect(() => {}, []);

  return {
    login,
  };
};

export default UseAuthViewController;
