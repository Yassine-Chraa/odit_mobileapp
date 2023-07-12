import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {authenticate} from '../redux/actions/auth';
import {STORAGE_TYPE, getGenericPassword, setGenericPassword} from "react-native-keychain";

const UseAuthViewController = () => {
  const dispatch = useDispatch();


  useEffect(() => {}, []);

  return {
  };
};

export default UseAuthViewController;
