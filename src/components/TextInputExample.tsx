// TextInputExample.tsx
import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const TextInputExample: React.FC = () => {
  const [text, setText] = useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Type here"
        onChangeText={(value) => setText(value)}
        value={text}
      />
      <Text style={styles.output}>You typed: {text}</Text>
    </View>
  );
};

export default TextInputExample;

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  output: { fontSize: 16 },
});
