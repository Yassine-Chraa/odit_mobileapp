import {NavigationAction, useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

const UseAuthViewController = () => {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();

  const signup = () => {
    console.log("User created!!")
  };

  useEffect(() => {}, []);

  return {signup};
};

export default UseAuthViewController;
