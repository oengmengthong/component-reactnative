import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  useColorScheme,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from './types';
import {componentMap} from '../components';
import {codeMap} from '../code';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/src/styles/prism';

type Props = StackScreenProps<RootStackParamList, 'ComponentDetail'>;

const ComponentDetailScreen: React.FC<Props> = ({route, navigation}) => {
  const {componentName, name} = route.params;
  const colorScheme = useColorScheme();

  const Component = componentMap[componentName];
  const code = codeMap[componentName];

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'component', title: 'Component'},
    {key: 'code', title: 'Code'},
  ]);

  useEffect(() => {
    navigation.setOptions({
      title: `${name} Example`,
    });
  }, [navigation, name]);

  useEffect(() => {
    if (!Component) {
      console.warn(`Component "${componentName}" not found.`);
    }
  }, [Component, componentName]);

  if (!Component || !code) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          Component "{componentName}" not found.
        </Text>
      </View>
    );
  }

  const renderScene = SceneMap({
    component: () => (
      <SafeAreaView style={styles.container}>
        <View style={styles.componentContainer}>
          <Component />
        </View>
      </SafeAreaView>
    ),
    code: () => (
      <View style={styles.codeContainer}>
        <SyntaxHighlighter
          language='typescript'
          highlighter="prism"
          style={oneDark}
        >
          {code}
        </SyntaxHighlighter>
      </View>
    ),
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: Dimensions.get('window').width}}
      renderTabBar={props => (
        <TabBar
          {...props}
          indicatorStyle={{backgroundColor: 'white'}}
          style={{backgroundColor: colorScheme === 'dark' ? '#000' : '#fff'}}
          labelStyle={{color: colorScheme === 'dark' ? '#fff' : '#000'}}
          activeColor={colorScheme === 'dark' ? '#ff0' : '#00f'}
          inactiveColor={colorScheme === 'dark' ? '#888' : '#aaa'}
        />
      )}
    />
  );
};

export default ComponentDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  componentContainer: { flex: 1},
  codeLight: {backgroundColor: '#f5f5f5', color: '#000'},
  codeDark: {backgroundColor: '#2d2d2d', color: '#fff'},
  errorContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  errorText: {fontSize: 18, color: 'red'},
  codeContainer: {
    minWidth: '100%',
  },
});
