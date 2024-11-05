// src/components/SwitchExample.tsx
import React, { useState } from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';

const SwitchExample: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Switch is {isEnabled ? 'On' : 'Off'}</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default SwitchExample;

const styles = StyleSheet.create({
  container: { padding: 16, alignItems: 'center' },
  text: { fontSize: 18, marginBottom: 10 },
});