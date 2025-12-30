import { Text, View, StyleSheet, TouchableOpacity, TextBase } from 'react-native';
import { spacing } from '../theme/spacing';
import { useNavigation } from '@react-navigation/native';
import { fonts }from '../theme/fonts';
import { colors } from '../theme/colors';

export default function PanditAvatar() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.row}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.avatar}>🧘‍♂️</Text>
        <Text style={styles.text}>Pandit Ji</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.s,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    fontSize: 30,
    marginRight: 8,
  },

  text: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary
  },
});
