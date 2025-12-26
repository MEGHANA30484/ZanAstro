import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';
import PanditAvatar from '../components/PanditAvatar';
import AppButton from '../components/AppButton';
import { api } from '../services/api';

export default function PanditChatScreen() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const askPandit = async () => {
    const res: any = await api.sendChatQuestion(question);
    setAnswer(res.answer);
  };

  return (
    <View style={styles.container}>
      <PanditAvatar />

      <TextInput
        placeholder="Ask about career, marriage, health..."
        style={styles.input}
        value={question}
        onChangeText={setQuestion}
      />

      <AppButton title="Ask Pandit" onPress={askPandit} />

      {answer ? <Text style={styles.answer}>{answer}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginVertical: 12,
  },
  answer: {
    marginTop: 16,
    fontSize: 15,
  },
});
