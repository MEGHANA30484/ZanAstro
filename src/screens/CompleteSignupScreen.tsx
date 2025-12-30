import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { AppInput } from '../components/AppInput';
import AppButton from '../components/AppButton';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { fonts } from '../theme/fonts';

const CompleteSignupScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backText}>← Back</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.formCard}>
            <Text style={styles.title}>Create Full Profile</Text>
            <Text style={styles.subtitle}>Please provide your birth details for accurate readings</Text>

            {/* Section 1: Personal Info */}
            <View style={styles.section}>
              <Text style={styles.sectionHeader}>Account Information</Text>
              <AppInput label="User Name" placeholder="John Doe" />
              <AppInput label="Email / Mobile" placeholder="example@mail.com" />
              
              <View style={styles.row}>
                <View style={styles.halfInput}>
                   <AppInput label="Password" placeholder="******" secureTextEntry />
                </View>
                <View style={styles.halfInput}>
                   <AppInput label="Confirm Password" placeholder="******" secureTextEntry />
                </View>
              </View>
            </View>

            {/* Section 2: Astrological Details */}
            <View style={styles.section}>
              <Text style={[styles.sectionHeader, { color: colors.secondary }]}>Astrological Data</Text>
              
              <AppInput label="Gender" placeholder="Select Gender" />
              
              <View style={styles.row}>
                <View style={styles.halfInput}>
                  <AppInput label="Date of Birth" placeholder="DD/MM/YYYY" />
                </View>
                <View style={styles.halfInput}>
                  <AppInput label="Time of Birth" placeholder="HH:MM AM/PM" />
                </View>
              </View>
              
              <AppInput label="Place of Birth" placeholder="City, Country" />
            </View>

            <View style={styles.submitBtn}>
              <AppButton 
                title="Begin Your Journey" 
                 onPress = {() => navigation.navigate('LandingPage')}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  header: { paddingHorizontal: spacing.l, paddingTop: spacing.m },
  backButton: { paddingVertical: spacing.s },
  backText: { fontSize: fonts.size.m, color: colors.primary, fontWeight: fonts.weight.medium },
  
  scrollContent: { padding: spacing.m, paddingBottom: spacing.xl },
  
  formCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: spacing.l,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    // Elevation for Android
    elevation: 5,
  },
  
  title: { fontSize: 24, fontWeight: 'bold', color: colors.primary, textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#666', textAlign: 'center', marginBottom: spacing.xl, marginTop: spacing.xs },
  
  section: { marginBottom: spacing.l },
  sectionHeader: { 
    fontSize: 14, 
    fontWeight: '700', 
    textTransform: 'uppercase', 
    letterSpacing: 1, 
    marginBottom: spacing.m,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 4
  },
  
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  halfInput: { width: '48%' },
  submitBtn: { marginTop: spacing.m, borderRadius: 12 }
});

export default CompleteSignupScreen;