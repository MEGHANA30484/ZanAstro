import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { fonts } from '../theme/fonts';

const SignupOptionsScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Choose Your Path</Text>
        <Text style={styles.subtitle}>Start your astrological journey today</Text>

        <TouchableOpacity style={styles.optionCard}
        onPress={() => navigation.navigate('QuickSignup')}>
          <View style={[styles.iconCircle, { backgroundColor: colors.secondary }]}>
            <Text style={styles.iconEmoji}>⚡</Text>
          </View>
          <View style={styles.optionTextContent}>
            <Text style={styles.optionTitle}>Quick Login</Text>
            <Text style={styles.optionDesc}>Get started in seconds with minimal info.</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.optionCard, styles.primaryCard]}
        onPress={() => navigation.navigate('CompleteSignup')}>
          <View style={[styles.iconCircle, { backgroundColor: '#fff' }]}>
            <Text style={styles.iconEmoji}>✨</Text>
          </View>
          <View style={styles.optionTextContent}>
            <Text style={[styles.optionTitle, { color: '#fff' }]}>Complete Login</Text>
            <Text style={[styles.optionDesc, { color: '#f0f0f0' }]}>Set up a full profile for detailed readings.</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: spacing.m,
  },
  backText: {
    color: colors.primary,
    fontSize: fonts.size.m,
    fontWeight: fonts.weight.medium,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.l,
    paddingTop: spacing.m,
  },
  title: {
    fontSize: fonts.size.xl,
    fontWeight: fonts.weight.bold,
    color: colors.textDark,
  },
  subtitle: {
    fontSize: fonts.size.m,
    color: '#666',
    marginBottom: spacing.xxl,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.l,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: spacing.m,
    backgroundColor: '#fff',
    // Elevation for Android
    elevation: 3,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  primaryCard: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.m,
  },
  iconEmoji: {
    fontSize: 24,
  },
  optionTextContent: {
    flex: 1,
  },
  optionTitle: {
    fontSize: fonts.size.l,
    fontWeight: fonts.weight.bold,
    color: colors.textDark,
  },
  optionDesc: {
    fontSize: fonts.size.s,
    color: '#666',
    marginTop: 4,
  },
});

export default SignupOptionsScreen;