import React from 'react';
import { TextInput, StyleSheet, TextInputProps, View, Text } from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { fonts } from '../theme/fonts';

interface AppInputProps extends TextInputProps {
  label?: string; 
}

export const AppInput: React.FC<AppInputProps> = ({label, ...props}) => {
  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        placeholderTextColor={colors.textDark || '#888'}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: spacing.m,
    width: '100%',
  },
  label: {
    marginBottom: 6,
    fontSize: 13,
    color: colors.textDark,
    fontWeight: '600',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
    paddingHorizontal: spacing.m,
    backgroundColor: colors.background,
    color: colors.textDark,
    fontSize: 16,
  },
});