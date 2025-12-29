import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { AppInput } from '../components/AppInput';
import AppButton from '../components/AppButton';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { fonts } from '../theme/fonts';

const QuickSignupScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        {/* Card */}
        <View style={styles.card}>
          <Text style={styles.title}>Quick Registration</Text>
          <Text style={styles.subtitle}>
            Start instantly with minimal details
          </Text>

          <AppInput placeholder="Your Name" />
          <AppInput placeholder="Email or Mobile Number" />
          <AppInput secureTextEntry placeholder="Password" />
          <AppInput secureTextEntry placeholder="Confirm Password" />

          <AppButton title="Sign Up Now" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },

  header: {
    paddingHorizontal: spacing.l,
    paddingTop: spacing.m,
  },

  backText: {
    fontSize: fonts.size.m,
    color: colors.primary,
    fontWeight: fonts.weight.medium,
  },

  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: spacing.l,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: spacing.xl,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },

  title: {
    fontSize: fonts.size.xl,
    fontWeight: fonts.weight.bold,
    color: colors.textDark,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: fonts.size.s,
    color: '#666',
    textAlign: 'center',
    marginBottom: spacing.xl,
    marginTop: spacing.xs,
  },
});

export default QuickSignupScreen;
