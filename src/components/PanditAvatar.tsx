import { Text, View, StyleSheet } from 'react-native';

export default function PanditAvatar() {
  return (
    <View style={styles.container}>
      <Text style={styles.avatar}>🧘‍♂️🔮</Text>
      <Text style={styles.text}>Pandit Ji</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginBottom: 16 },
  avatar: { fontSize: 64 },
  text: { fontSize: 16, fontWeight: '600' },
});
