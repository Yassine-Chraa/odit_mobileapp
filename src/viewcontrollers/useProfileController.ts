import {switchDarkMode} from './../redux/actions/settings';
import {useState, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ISettings from '../types/ISettings';
import {logoutAction} from '../redux/actions/auth';
import Toast from 'react-native-toast-message';
import IUser from '../types/IUser';
import {
  getProfileAction,
  updatePasswordAction,
  updateProfileAction,
} from '../redux/actions/user';
import {IProfileUpdateRequest} from '../types/IProfileUpdateRequest';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {IPasswordRequest} from '../types/IPasswordRequest';
import {validatePassword} from '../helpers/validationFunctions';
import {launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import {getApiUrl} from '../services/ApiService';
import RNFetchBlob from 'rn-fetch-blob';
import {IUserTokens} from '../types/IUserTokens';
import {IPicture} from '../types/IPicture';

const uploadUrl = getApiUrl('upload');
const useProfileController: (
  type?: 'profile' | 'others' | 'editProfile' | 'editPassword',
) => any = (
  type: 'profile' | 'others' | 'editProfile' | 'editPassword' = 'profile',
) => {
  const navigation: any = useNavigation();
  const dispatch: any = useDispatch();
  const profile = useSelector((state: {user: IUser}) => state.user);

  if (type == 'profile') {
    const switchDark = (v: boolean) => {
      dispatch(switchDarkMode(v));
    };
    const darkMode = useSelector(
      (state: {settings: ISettings}) => state.settings.darkMode,
    );
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
    useFocusEffect(
      useCallback(() => {
        getProfile();
      }, []),
    );
    return {switchDark, darkMode, profile, logout};
  }
  if (type == 'editProfile') {
    const access_token = useSelector(
      (state: {tokens: IUserTokens}) => state.tokens.access_token,
    );
    const [updateRequest, setUpdateRequest] = useState<IProfileUpdateRequest>({
      firstName: profile.firstName,
      lastName: profile.lastName,
    });
    const [picture, setPicture] = useState<IPicture>({});
    const selectPicture = async () => {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 1,
      });
      if (result.assets) {
        const {uri, type, fileName} = result.assets[0];
        if (uri && type && fileName) {
          setPicture({uri, type, fileName});
        }
      }
    };
    const uploadImage = async () => {
      const {fileName, uri, type} = picture;
      try {
        const {data} = await RNFetchBlob.fetch(
          'post',
          `${uploadUrl}/upload`,
          {
            Authorization: `Bearer ${access_token}`,
            'Content-Type': 'multipart/form-data',
          },
          [
            {
              name: 'file',
              filename: fileName,
              type: type,
              data: RNFetchBlob.wrap(uri!),
            },
          ],
        );
        console.log(JSON.parse(data).url);
        return JSON.parse(data).url;
      } catch (e) {
        console.log(e);
      }
    };

    const updateProfile = async () => {
      if (updateRequest.firstName && updateRequest.lastName) {
        if (updateRequest.firstName.length < 4) {
          Toast.show({
            type: 'error',
            text1: 'First name must be at least 3 characters long !',
            position: 'top',
          });
          return false;
        }
        if (updateRequest.lastName.length < 3) {
          Toast.show({
            type: 'error',
            text1: 'Last name must be at least 2 characters long !',
            position: 'top',
          });
          return false;
        }
        const pictureUrl = await uploadImage();
        const res = await dispatch(
          updateProfileAction({...updateRequest, picture: pictureUrl}),
        );
        if (res) navigation.goBack();
        return true;
      } else {
        Toast.show({
          type: 'error',
          text1: 'all fields required',
          position: 'top',
        });
        return false;
      }
    };
    return {
      updateRequest,
      setUpdateRequest,
      updateProfile,
      selectPicture,
      picture,
    };
  }
  if (type == 'editPassword') {
    const [passwordRequest, setPasswordRequest] = useState<IPasswordRequest>(
      {},
    );
    const {currentPassword, newPassword, confirmPassword} = passwordRequest;
    const updatePassword = async () => {
      if (!currentPassword || !newPassword || !confirmPassword) {
        Toast.show({
          type: 'error',
          text1: 'all fields required',
          position: 'top',
        });
        return false;
      }
      if (!validatePassword(newPassword)) return !validatePassword(newPassword);
      if (newPassword !== confirmPassword) {
        Toast.show({
          type: 'error',
          text1: 'you must enter the same password to confirm',
          position: 'top',
        });
        return false;
      }
      const res = await dispatch(
        updatePasswordAction({currentPassword, newPassword}),
      );
      if (res) {
        setPasswordRequest({});
        navigation.goBack();
      }
      return true;
    };
    return {passwordRequest, setPasswordRequest, updatePassword};
  }
  if (type == 'others') {
    return {profile};
  }
};

export default useProfileController;
