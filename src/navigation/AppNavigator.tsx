import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { darkNavigationTheme, lightNavigationTheme } from '../style/theme/navigationTheme';
import AuthStack from '../views/Auth';
import { useSelector } from 'react-redux';
import ISettings from '../types/ISettings';
import TabNavigator from './TabNavigator';
import TasksView from '../views/TaskView';
import RoomView from '../views/RoomView';
import RoomDetails from '../views/RoomView/RoomDetails';
import HomeView from '../views/HomeView';
import TaskDetails from '../views/TaskView/TaskDetails';
import ProjectView from '../views/ProjectView';
import ProjectDetails from '../views/ProjectView/ProjectDetails';
import AddRoom from '../views/RoomView/AddRoom';
import Toast from 'react-native-toast-message';
import  AddProject from '../views/ProjectView/AddProject';
import ProjectMembers from '../views/ProjectView/ProjectMembers';

const Stack = createNativeStackNavigator();

const AppNavigator = (): JSX.Element => {
  const darkMode = useSelector((state: { settings: ISettings }) => state.settings.darkMode);
  return (
    <NavigationContainer theme={darkMode?darkNavigationTheme:lightNavigationTheme}>
      {true ?
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
          </Stack.Navigator>
        ) :
        <AuthStack />
      }
                  <Toast />

      </NavigationContainer>
  );
}

export default AppNavigator;
