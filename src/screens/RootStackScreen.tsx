import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
//import SplashScreen from './SplashScreen';
import SplashScreen from './SplashScreen'
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import ForgotPassword from './ForgotPassword';
import AgeAndOthersScreen from './AgeAndOthersScreen';

const Stack = createStackNavigator();

function RootStackScreen() {
    return (

            <Stack.Navigator screenOptions={{
                gestureEnabled:true
                }}>
                <Stack.Screen  options={{headerShown: false}} name="Home" component={SplashScreen} />
                <Stack.Screen options={{ headerShown: false,}} name="SignInScreen" component={SignInScreen} />
                <Stack.Screen options={{ headerShown: false }} name="SignUpScreen" component={SignUpScreen} />
                <Stack.Screen options={{ headerShown: false}} name="ForgotScreen"  component={ForgotPassword} />
                <Stack.Screen  name="AgeAndOthersScreen" 
                options={{headerTitle: 'Test', headerShown: false}} 
                component={AgeAndOthersScreen} />
            </Stack.Navigator>

    );
}

export default RootStackScreen;