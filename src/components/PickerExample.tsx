// src/components/PickerExample.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const PickerExample: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState('java');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Selected: {selectedValue}</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 200 }}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="javascript" />
        <Picker.Item label="Python" value="python" />
        <Picker.Item label="C#" value="csharp" />
      </Picker>
    </View>
  );
};

export default PickerExample;

const styles = StyleSheet.create({
  container: { padding: 16, alignItems: 'center' },
  text: { fontSize: 18, marginBottom: 10 },
});