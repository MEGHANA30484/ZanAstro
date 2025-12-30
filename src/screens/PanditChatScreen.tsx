import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import PanditAvatar from '../components/PanditAvatar';
import { api } from '../services/api';
// import Icon from 'react-native-vector-icons/Ionicons';

export default function PanditChatScreen() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const askPandit = async () => {
    if (!question.trim()) return;
    const res: any = await api.sendChatQuestion(question);
    setAnswer(res.answer);
    setQuestion('');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <PanditAvatar />
        {/* <View style={{ marginLeft: 10 }}>
          <Text style={styles.name}>Pandit Ji</Text>
          <Text style={styles.status}>Always here to guide</Text>
        </View> */}
      </View>

      {/* Chat Area */}
      <View style={styles.chatArea}>
        <View style={styles.botBubble}>
          <Text style={styles.botText}>
            Namaste! I am your personal astrology guide.  
            How can I help you today? Please select a topic or ask me anything.
          </Text>
        </View>

        {answer ? (
          <View style={styles.botBubble}>
            <Text style={styles.botText}>{answer}</Text>
          </View>
        ) : null}

        {/* Topic Section */}
        <Text style={styles.topicTitle}>Select a topic:</Text>

        <View style={styles.topicRow}>
          {['Career', 'Marriage', 'Health', 'Finance'].map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.topicChip}
              onPress={() => setQuestion(item)}
            >
              <Text style={styles.topicText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Input Bar */}
      <View style={styles.inputBar}>
        <TextInput
          placeholder="Ask your question..."
          style={styles.input}
          value={question}
          onChangeText={setQuestion}
        />
        <TouchableOpacity style={styles.sendBtn} onPress={askPandit}>
          {/* <Icon name="send" size={18} color="#fff" /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },

  name: {
    fontSize: 16,
    fontWeight: '600',
  },

  status: {
    fontSize: 12,
    color: 'green',
  },

  chatArea: {
    flex: 1,
    padding: 16,
  },

  botBubble: {
    backgroundColor: '#f3f3f3',
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    maxWidth: '90%',
  },

  botText: {
    fontSize: 14,
    lineHeight: 20,
  },

  topicTitle: {
    marginTop: 16,
    marginBottom: 8,
    fontWeight: '600',
  },

  topicRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },

  topicChip: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },

  topicText: {
    fontSize: 13,
  },

  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderTopWidth: 1,
    borderColor: '#eee',
  },

  input: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 14,
  },

  sendBtn: {
    backgroundColor: '#983f96', // ZanAstro theme 💜
    marginLeft: 10,
    padding: 12,
    borderRadius: 50,
  },
});
