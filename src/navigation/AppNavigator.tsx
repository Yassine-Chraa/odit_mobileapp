import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { darkNavigationTheme, lightNavigationTheme } from '../style/theme/navigationTheme';
import AuthStack from '../views/Auth';
import { useSelector } from 'react-redux';
import ISettings from '../types/ISettings';
import TabNavigator from './TabNavigator';
import TasksView from '../views/TaskView';

const Stack = createNativeStackNavigator();

const AppNavigator = (): JSX.Element => {
  const darkMode = useSelector((state: { settings: ISettings }) => state.settings.darkMode);
  return (
      <NavigationContainer theme={darkMode ? darkNavigationTheme : lightNavigationTheme}>
        {true ?
          (
            <Stack.Navigator initialRouteName='Tab' screenOptions={{
              headerShown: false,
            }}>
              <Stack.Screen name="Tab" component={TabNavigator} />
              <Stack.Screen name="Tasks" component={TasksView} />
            </Stack.Navigator>
          ) :
          <AuthStack />
        }

      </NavigationContainer>
  );
}

export default AppNavigator;
