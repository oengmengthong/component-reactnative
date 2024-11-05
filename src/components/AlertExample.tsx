// src/components/AlertExample.tsx
import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';

const AlertExample: React.FC = () => {
  const showAlert = () =>
    Alert.alert(
      'Alert Title',
      'This is an alert message.',
      [
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    );

  return (
    <View style={styles.container}>
      <Button title="Show Alert" onPress={showAlert} />
    </View>
  );
};

export default AlertExample;

const styles = StyleSheet.create({
  container: { padding: 16, alignItems: 'center' },
});