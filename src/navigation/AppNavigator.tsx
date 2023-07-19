import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { darkNavigationTheme, lightNavigationTheme } from '../style/theme/navigationTheme';
import HomeView from '../views/HomeView';
import AuthStack from '../views/Auth';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux';
import ISettings from '../types/ISettings';
import TasksView from '../views/Tasks';

const Stack = createNativeStackNavigator();

const AppNavigator = (): JSX.Element => {
  const insets = useSafeAreaInsets();
  const darkMode = useSelector((state: { settings: ISettings }) => state.settings.darkMode)
  return (
    <NavigationContainer theme={darkMode?darkNavigationTheme:lightNavigationTheme}>
      {true ?
        (
          <Stack.Navigator initialRouteName='Tasks' screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Tasks" component={TasksView} />
          </Stack.Navigator>
        ) :
        <AuthStack />
      }

    </NavigationContainer>
  );
}

export default AppNavigator;
