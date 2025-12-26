import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PanditChatScreen from '../screens/PanditChatScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="PanditChat"
        component={PanditChatScreen}
      />
    </Stack.Navigator>
  );
}
