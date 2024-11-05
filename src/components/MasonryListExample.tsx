// src/components/MasonryListExample.tsx
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';
import MasonryListRenderItem from '@react-native-seoul/masonry-list';

interface MasonryItem {
  id: number;
  uri: string;
  title: string;
}

const data: MasonryItem[] = Array.from({ length: 50 }, (_, index) => ({
  id: index,
  uri: `https://picsum.photos/id/${index + 10}/200/300`,
  title: `Image ${index + 1}`,
}));

const MasonryListExample: React.FC = () => {
  const renderItem = ({ item, i }: { item: unknown; i: number }) => {
    const masonryItem = item as MasonryItem;
    return (
      <View style={styles.item}>
        <Image source={{ uri: masonryItem.uri }} style={styles.image} />
        <Text style={styles.text}>{masonryItem.title}</Text>
      </View>
    );
  };

  return (
    <MasonryList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem= {renderItem}
      numColumns={2}
    />
  );
};

export default MasonryListExample;

const styles = StyleSheet.create({
  item: {
    margin: 4,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    aspectRatio: 0.75,
  },
  text: {
    padding: 8,
    fontSize: 14,
  },
});
