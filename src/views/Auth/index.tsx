import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginView from './LoginView';

const Stack = createNativeStackNavigator();
const AuthStack = (): JSX.Element => {
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Login" component={LoginView} />
        </Stack.Navigator>
    );
}

export default AuthStack;
