import React, { useEffect } from 'react';
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
import EditProfile from '../views/ProfileView/edit';
import privacyPolicy from '../views/ProfileView/privacyPolicy';
import useAppNavigatorController from '../viewcontrollers/useAppNavigatorController';

const Stack = createNativeStackNavigator();

const AppNavigator = (): JSX.Element => {
  const { darkMode, tokens } = useAppNavigatorController();

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
            <Stack.Screen name="editProfile" component={EditProfile} />
            <Stack.Screen name="privacypolicy" component={privacyPolicy} />
          </Stack.Navigator>
        ) :
        <AuthStack />
      }
      <Toast />

    </NavigationContainer>
  );
}

export default AppNavigator;
