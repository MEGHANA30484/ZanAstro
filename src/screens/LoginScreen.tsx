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
import { AppInput } from '../components/AppInput';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inner}
      >

        {/* 1. ZanAstro Logo */}
        <View style={styles.brandContainer}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.brandLogo}
            resizeMode="contain"
          />
        </View>

        {/* 2. Pandit Avatar */}
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarCircle}>
            <Image
              source={require('../assets/images/pandit.png')}
              style={styles.avatar}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* 3. Form Card */}
        <View style={styles.formCard}>
          <Text style={styles.title}>Welcome to ZanAstro</Text>

          <Text style={styles.label}>Email Address</Text>
          <AppInput
            style={styles.input}
            placeholder="example@mail.com"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <AppInput
              style={styles.passwordInput}
              placeholder="Enter your password"
              placeholderTextColor="#aaa"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={secureText}
            />
            <TouchableOpacity onPress={() => setSecureText(!secureText)}>
              <Text style={styles.eyeText}>{secureText ? 'Show' : 'Hide'}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('LandingPage')}
          >
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
    padding: spacing.m,
    justifyContent: 'center',
  },
  brandContainer: {
    alignItems: 'center',
    marginTop: spacing.m,
  },

  brandLogo: {
    width: 160,
    height: 80,
  },
  avatarWrapper: {
    alignItems: 'center',
    marginTop: spacing.l,
  },

  avatarCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#f5eef6',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },

  avatar: {
    width: 100,
    height: 100,
  },

  formCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: spacing.l,
    marginTop: spacing.xl,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
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
    marginLeft: spacing.xl,
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