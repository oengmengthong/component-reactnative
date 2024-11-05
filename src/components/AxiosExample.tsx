// src/components/AxiosExample.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
}

const AxiosExample: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    axios
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setData(response.data.slice(0, 10)); // Get the first 10 posts
        setLoading(false);
      })
      .catch((err) => {
        setError('An error occurred while fetching data');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading data...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.title}>
            {item.id}. {item.title}
          </Text>
        </View>
      )}
    />
  );
};

export default AxiosExample;

const styles = StyleSheet.create({
  container: { padding: 16 },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: { fontSize: 16 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  errorText: { color: 'red', fontSize: 18 },
});