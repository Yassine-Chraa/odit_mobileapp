import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { darkNavigationTheme, lightNavigationTheme } from '../style/theme/navigationTheme';
import AuthStack from '../views/Auth';
import TabNavigator from './TabNavigator';
import TasksView from '../views/TaskView';
import RoomView from '../views/RoomView';
import RoomDetails from '../views/RoomView/RoomDetails';
import TaskDetails from '../views/TaskView/TaskDetails';
import ProjectView from '../views/ProjectView';
import ProjectDetails from '../views/ProjectView/ProjectDetails';
import AddRoom from '../views/RoomView/AddRoom';
import Toast from 'react-native-toast-message';
import AddProject from '../views/ProjectView/AddProject';
import ProjectMembers from '../views/ProjectView/ProjectMembers';
import EditProfile from '../views/ProfileView/EditProfile';
import privacyPolicy from '../views/ProfileView/privacyPolicy';
import useAppNavigatorController from '../viewcontrollers/useAppNavigatorController';
import EditPassword from '../views/ProfileView/EditPassword';
import { useIsConnected } from 'react-native-offline'
import { Text, View } from 'react-native'
import globalStyles from '../style';
import { getColors } from '../style/theme/globalTheme';
import { Image } from '@rneui/themed';
import authStyles from '../style/authStyles';

const Stack = createNativeStackNavigator();

const AppNavigator = (): JSX.Element => {
  const isConnected = useIsConnected();
  const { backgroundColor,largeTextColor } = getColors();
  const { darkMode, tokens } = useAppNavigatorController(isConnected);
  console.log(tokens.access_token)
  if (isConnected) {
    return (
      <NavigationContainer theme={darkMode ? darkNavigationTheme : lightNavigationTheme}>
        {tokens ?
          (
            <Stack.Navigator initialRouteName='Tab' screenOptions={{
              headerShown: false
            }}>
              <Stack.Screen name="Tab" component={TabNavigator} />
              <Stack.Screen name="Tasks" component={TasksView} />
              <Stack.Screen name="TaskDetails" component={TaskDetails} />
              <Stack.Screen name="Rooms" component={RoomView} />
              <Stack.Screen name="RoomDetails" component={RoomDetails} />
              <Stack.Screen name="AddRoom" component={AddRoom} />
              <Stack.Screen name="AddProject" component={AddProject} />
              <Stack.Screen name="ProjectDetails" component={ProjectDetails} />
              <Stack.Screen name="ProjectMembers" component={ProjectMembers} />
              <Stack.Screen name="allProjects" component={ProjectView} />
              <Stack.Screen name="EditProfile" component={EditProfile} />
              <Stack.Screen name="EditPassword" component={EditPassword} />
              <Stack.Screen name="privacypolicy" component={privacyPolicy} />
            </Stack.Navigator>
          ) :
          <AuthStack />
        }
        <Toast />

      </NavigationContainer>
    );
  } else {
    return (
      <View style={{ flex: 1, backgroundColor,justifyContent: 'center'}}>
        <Image resizeMode="contain" source={require('../assets/images/offline_mode.png')} style={[authStyles.authPoster, { height:250 }]} />
        <Text style={[globalStyles.headerTitle,{color:largeTextColor}]}>Check Your Connection</Text>
      </View>)
  }
}

export default AppNavigator;
