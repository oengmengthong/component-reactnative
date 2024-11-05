// ImageStyleBorderRadiusExample.tsx

import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

var image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlt-TGjHVh4qzymsShj8a9dkNKBG7rfq2wTg&s';


const ImageStyleBorderRadiusExample = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{
            borderTopRightRadius: 20,
            height: 100,
            width: 200,
          }}
          source={{uri: image}}
        />
        <Text>borderTopRightRadius</Text>
      </View>
      <View>
        <Image
          style={{
            borderBottomRightRadius: 20,
            height: 100,
            width: 200,
          }}
          source={{uri: image}}
        />
        <Text>borderBottomRightRadius</Text>
      </View>
      <View>
        <Image
          style={{
            borderBottomLeftRadius: 20,
            height: 100,
            width: 200,
          }}
          source={{uri: image}}
        />
        <Text>borderBottomLeftRadius</Text>
      </View>
      <View>
        <Image
          style={{
            borderTopLeftRadius: 20,
            height: 100,
            width: 200,
          }}
          source={{uri: image}}
        />
        <Text>borderTopLeftRadius</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
  },
});

export default ImageStyleBorderRadiusExample;