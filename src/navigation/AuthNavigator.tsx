import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../screens/SignupScreen';
import QuickSignupScreen from '../screens/QuickSignupScreen';
import CompleteSignupScreen from '../screens/CompleteSignupScreen';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/LandingPage';
import PanditChatScreen from '../screens/PanditChatScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignupOptions" component={SignupScreen} />
      {/* These names MUST match the navigation.navigate('Name') call */}
      <Stack.Screen name="PanditChat" component={PanditChatScreen} />
      <Stack.Screen name = "LandingPage" component={WelcomeScreen} />
      <Stack.Screen name="QuickSignup" component={QuickSignupScreen} />
      <Stack.Screen name="CompleteSignup" component={CompleteSignupScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;