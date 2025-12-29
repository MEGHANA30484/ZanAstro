import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  KeyboardAvoidingView, 
  Platform,
  Alert
} from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { fonts } from '../theme/fonts';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  const handleLogin = () => {
    // Basic Validation
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }
    
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    // Logic for existing user login
    console.log('Attempting Login:', { email, password });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inner}
      >
        <View style={styles.logoContainer}>
          <Image 
            source={require('../assets/images/logo.png')} 
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.form}>
          <Text style={styles.title}>Welcome to ZanAstro</Text>
          
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="example@mail.com"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter your password"
              placeholderTextColor="#aaa"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={secureText}
              autoCapitalize="none"
            />
            <TouchableOpacity 
              onPress={() => setSecureText(!secureText)}
              style={styles.eyeButton}
            >
              <Text style={styles.eyeText}>{secureText ? 'Show' : 'Hide'}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.signupLink} 
            onPress={() => navigation.navigate('SignupOptions')}
          >
            <Text style={styles.linkText}>
              New user? <Text style={styles.linkHighlight}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background, // Uses #fff from colors.ts
  },
  inner: {
    flex: 1,
    padding: spacing.l,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },
  logo: {
    width: 160,
    height: 160,
  },
  title: {
    fontSize: fonts.size.xl,
    fontWeight: fonts.weight.bold,
    color: colors.primary, // Uses #983f96 from colors.ts
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  form: {
    width: '100%',
  },
  label: {
    fontSize: fonts.size.s,
    color: colors.textDark, // Uses #222 from colors.ts
    marginBottom: spacing.xs,
    fontWeight: fonts.weight.medium,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    padding: spacing.m,
    borderRadius: 12,
    marginBottom: spacing.m,
    color: colors.textDark,
    fontSize: fonts.size.m,
    backgroundColor: '#f9f9f9',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    marginBottom: spacing.l,
    backgroundColor: '#f9f9f9',
  },
  passwordInput: {
    flex: 1,
    padding: spacing.m,
    color: colors.textDark,
    fontSize: fonts.size.m,
  },
  eyeButton: {
    paddingHorizontal: spacing.m,
  },
  eyeText: {
    color: colors.primary,
    fontWeight: fonts.weight.bold,
    fontSize: fonts.size.s,
  },
  loginButton: {
    backgroundColor: colors.primary,
    padding: spacing.m,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: spacing.s,
    // Simple shadow for primary button
    elevation: 4,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: fonts.size.m,
    fontWeight: fonts.weight.bold,
  },
  signupLink: {
    marginTop: spacing.l,
    alignItems: 'center',
  },
  linkText: {
    color: colors.textDark,
    fontSize: fonts.size.m,
  },
  linkHighlight: {
    color: colors.primary,
    fontWeight: fonts.weight.bold,
  },
});

export default LoginScreen;