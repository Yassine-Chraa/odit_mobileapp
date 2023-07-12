import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginView from './LoginView';
import StartView from './StartView';
import AfterStartView from './AfterStartView';

const Stack = createNativeStackNavigator();
const AuthStack = (): JSX.Element => {
    return (
        <Stack.Navigator initialRouteName='Start' screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Start" component={StartView} />
            <Stack.Screen name="AfterStart" component={AfterStartView} />
            <Stack.Screen name="Login" component={LoginView} />
        </Stack.Navigator>
    );
}

export default AuthStack;
