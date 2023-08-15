import Toast from 'react-native-toast-message';

export const validatePassword = (password: string) => {
  const lowerCaseRegex = /.*[A-Z].*/;
  const upperCaseRegex = /.*[a-z].*/;
  const digitRegex = /.*\d.*/;

  if (password.length < 8) {
    Toast.show({
      type: 'error',
      text1: 'Password must be at least 8 characters long.',
      position: 'top',
    });
    return false;
  }
  if (!lowerCaseRegex.test(password)) {
    Toast.show({
      type: 'error',
      text1: 'Password must contain uppercase letters.',
      position: 'top',
    });
    return false;
  }
  if (!upperCaseRegex.test(password)) {
    Toast.show({
      type: 'error',
      text1: 'Password must contain lowercase letters.',
      position: 'top',
    });
    return false;
  }
  if (!digitRegex.test(password)) {
    Toast.show({
      type: 'error',
      text1: 'Password must contain at least one digit.',
      position: 'top',
    });
    return false;
  }
  return true;
};
