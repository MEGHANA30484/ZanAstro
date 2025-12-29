import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignupOptionsScreen from '../screens/SignupScreen';

export type RootStackParamList = {
  Login: undefined;
  SignupOptions: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignupOptions" component={SignupOptionsScreen} />
      </Stack.Navigator>

  );
};

export default AppNavigator;