import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import globalTheme from '../style/theme/navigationTheme';
import useAppNavigatorController from '../viewcontrollers/useAppNavigatorController'
import HomeView from '../views/HomeView';
import AuthStack from '../views/Auth';
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Stack = createNativeStackNavigator();

const AppNavigator = (): JSX.Element => {
  const insets = useSafeAreaInsets();
  return (
    <NavigationContainer theme={globalTheme}>
      {false ?
        (
          <Stack.Navigator initialRouteName='Home' screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Home" component={HomeView} />
          </Stack.Navigator>
        ) :
        <AuthStack />
      }

    </NavigationContainer>
  );
}

export default AppNavigator;
