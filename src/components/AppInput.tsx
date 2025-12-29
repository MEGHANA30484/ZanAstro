import React from 'react';
import { TextInput, StyleSheet, TextInputProps, View } from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

interface AppInputProps extends TextInputProps {
  label?: string; 
}

export const AppInput: React.FC<AppInputProps> = (props) => {
  return (
    <View style={styles.wrapper}>
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