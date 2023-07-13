import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginView from './LoginView';
import StartView from './StartView';
import AfterStartView from './AfterStartView';
import SignupView from './SignupView';
import ConfirmationView from './ConfirmationView';

const Stack = createNativeStackNavigator();
const AuthStack = (): JSX.Element => {
    return (
        <Stack.Navigator initialRouteName='Start' screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Start" component={StartView} />
            <Stack.Screen name="AfterStart" component={AfterStartView} />
            <Stack.Screen name="Signup" component={SignupView} />
            <Stack.Screen name="Confirmation" component={ConfirmationView} />
            <Stack.Screen name="Login" component={LoginView} />
        </Stack.Navigator>
    );
}

export default AuthStack;
