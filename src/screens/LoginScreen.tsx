import { View, Text } from 'react-native';
import AppButton from '../components/AppButton';

export default function LoginScreen() {
  return (
    <View>
      <Text>Welcome to ZanAstro</Text>
      <AppButton title="Continue with Mobile / Email" />
      <AppButton title="Continue with Google" />
    </View>
  );
}
