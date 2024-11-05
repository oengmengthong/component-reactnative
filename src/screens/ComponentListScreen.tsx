import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from './types';

type Props = StackScreenProps<RootStackParamList, 'ComponentList'>;

const components = [
  {name: 'Login Form 1', file: 'LoginForm1Example', tag: 'Page'},
  {name: 'Login Form 2', file: 'LoginForm2Example', tag: 'Page'},
  {name: 'Login Form 3', file: 'LoginForm3Example', tag: 'Page'},
  {name: 'Login Form 4', file: 'LoginForm4Example', tag: 'Page'},
  {name: 'Button', file: 'ButtonExample', tag: 'RN'},
  {name: 'TextInput', file: 'TextInputExample', tag: 'RN'},
  {name: 'Image', file: 'ImageExample', tag: 'RN'},
  {name: 'FlatList', file: 'FlatListExample', tag: 'RN'},
  {name: 'Switch', file: 'SwitchExample', tag: 'RN'},
  {name: 'ActivityIndicator', file: 'ActivityIndicatorExample', tag: 'RN'},
  {name: 'TouchableOpacity', file: 'TouchableOpacityExample', tag: 'RN'},
  {name: 'ScrollView', file: 'ScrollViewExample', tag: 'RN'},
  {name: 'SectionList', file: 'SectionListExample', tag: 'RN'},
  {name: 'Alert', file: 'AlertExample', tag: 'RN'},
  {name: 'Image Background', file: 'ImageBackgroundExample', tag: 'RN'},
  {
    name: 'Keyboard Avoiding View',
    file: 'KeyboardAvoidingViewExample',
    tag: 'RN',
  },
  {name: 'Modal', file: 'ModalExample', tag: 'RN'},
  {name: 'Pressable', file: 'PressableExample', tag: 'RN'},
  {name: 'RefreshControl', file: 'RefreshControlExample', tag: 'RN'},
  {name: 'StatusBar', file: 'StatusBarExample', tag: 'RN'},
  {name: 'Text', file: 'TextExample', tag: 'RN'},
  {name: 'TouchableHighlight', file: 'TouchableHighlightExample', tag: 'RN'},
  {
    name: 'Touchable Without Feedback',
    file: 'TouchableWithoutFeedbackExample',
    tag: 'RN',
  },
  {name: 'VirtualizedList', file: 'VirtualizedListExample', tag: 'RN'},
  {name: 'DrawerLayout Android', file: 'DrawerLayoutAndroidExample', tag: 'RN'},
  {
    name: 'Touchable Native Feedback Android',
    file: 'TouchableNativeFeedbackAndroidExample',
    tag: 'RN',
  },
  {name: 'InputAccessoryView', file: 'InputAccessoryViewExample', tag: 'RN'},
  {name: 'SafeAreaView', file: 'SafeAreaViewExample', tag: 'RN'},
  {name: 'Image Resize Modes', file: 'ImageResizeModesExample', tag: 'RN'},
  {
    name: 'Image Style Border Width and Border Color',
    file: 'ImageStyleBorderWidthAndBorderColorExample',
    tag: 'RN',
  },
  {
    name: 'Image Style Border Radius',
    file: 'ImageStyleBorderRadiusExample',
    tag: 'RN',
  },
  {
    name: 'Image Style tintColor Function Component',
    file: 'ImageStyletintColorFunctionComponentExample',
    tag: 'RN',
  },
  {name: 'Layout Props', file: 'LayoutPropsExample', tag: 'RN'},
  {name: 'Shadow Props', file: 'ShadowPropsExample', tag: 'RN'},
  {name: 'Text Style Props', file: 'TextStylePropsExample', tag: 'RN'},
  {name: 'ViewStyle Props', file: 'ViewStylePropsExample', tag: 'RN'},
  {name: 'AccessibilityInfo', file: 'AccessibilityInfoExample', tag: 'RN'},
  {name: 'Animated', file: 'AnimatedExample', tag: 'RN'},
  {name: 'AnimatedValueXY', file: 'AnimatedValueXYExample', tag: 'RN'},
  {name: 'AppState', file: 'AppStateExample', tag: 'RN'},
  {name: 'Dimensions', file: 'DimensionsExample', tag: 'RN'},
  {name: 'Easing Demo', file: 'EasingDemoExample', tag: 'RN'},
  {
    name: 'Interaction Manager',
    file: 'InteractionManagerFunctionExample',
    tag: 'RN',
  },
  {name: 'Keyboard', file: 'KeyboardExample', tag: 'RN'},
  {name: 'Layout Animation', file: 'LayoutAnimationExample', tag: 'RN'},
  {name: 'Linking', file: 'LinkingExample', tag: 'RN'},
  {name: 'Linking Custom', file: 'LinkingCustomExample', tag: 'RN'},
  {name: 'Linking Deep Link', file: 'LinkingDeepLinkExample', tag: 'RN'},
  {
    name: 'Linking Send Intents Android',
    file: 'LinkingSendIntentsAndroidExample',
    tag: 'RN',
  },
  {name: 'Pan Responder', file: 'PanResponderExample', tag: 'RN'},
  {name: 'Pixel Ratio', file: 'PixelRatioExample', tag: 'RN'},
  {name: 'Platform API', file: 'PlatformAPIExample', tag: 'RN'},
  {name: 'Platform Color', file: 'PlatformColorExample', tag: 'RN'},
  {name: 'Share', file: 'ShareExample', tag: 'RN'},
  {name: 'StyleSheet', file: 'StyleSheetExample', tag: 'RN'},
  {name: 'StyleSheet Compose', file: 'StyleSheetComposeExample', tag: 'RN'},
  {name: 'StyleSheet Flatten', file: 'StyleSheetFlattenExample', tag: 'RN'},
  {
    name: 'StyleSheet AbsoluteFill',
    file: 'StyleSheetabsoluteFillExample',
    tag: 'RN',
  },
  {
    name: 'StyleSheet AbsoluteFill Object',
    file: 'StyleSheetabsoluteFillObject',
    tag: 'RN',
  },
  {
    name: 'StyleSheet HairlineWidth',
    file: 'StyleSheethairlineWidth',
    tag: 'RN',
  },
  {name: 'Systrace', file: 'SystraceExample', tag: 'RN'},
  {name: 'Transforms', file: 'TransformsExample', tag: 'RN'},
  {name: 'Transform Origin', file: 'TransformOriginExample', tag: 'RN'},
  {name: 'Vibration', file: 'VibrationExample', tag: 'RN'},
  {name: 'useColorScheme', file: 'useColorSchemeExample', tag: 'RN'},
  {name: 'useWindowDimensions', file: 'useWindowDimensionsExample', tag: 'RN'},
  {name: 'BackHandler', file: 'BackHandlerExample', tag: 'RN'},
  {name: 'PermissionsAndroid', file: 'PermissionsAndroidExample', tag: 'RN'},
  {name: 'ToastAndroid', file: 'ToastAndroidExample', tag: 'RN'},
  {name: 'ActionSheetIOS', file: 'ActionSheetIOSExample', tag: 'RN'},
  {name: 'Settings', file: 'SettingsExample', tag: 'RN'},
  {name: 'Axios', file: 'AxiosExample', tag: 'NPM'},
  {name: 'Masonry List', file: 'MasonryListExample'},
];

const ComponentListScreen: React.FC<Props> = ({navigation}) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredComponents, setFilteredComponents] = useState(components);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setFilteredComponents(
      components.filter(component =>
        component.name.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    );
    setLoading(false);
  }, [searchQuery]);

  if (loading) {
    return (
      <View style={[styles.container, isDarkMode && styles.containerDark]}>
        <ActivityIndicator size="large" color={isDarkMode ? '#fff' : '#000'} />
      </View>
    );
  }

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <TextInput
        style={[styles.searchBar, isDarkMode && styles.searchBarDark]}
        placeholder="Search components..."
        placeholderTextColor={isDarkMode ? '#888' : '#aaa'}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredComponents}
        keyExtractor={item => item.file}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[styles.item, isDarkMode && styles.itemDark]}
            onPress={() =>
              navigation.navigate('ComponentDetail', {
                componentName: item.file,
                name: item.name,
              })
            }>
            <Text style={[styles.text, isDarkMode && styles.textDark]}>
              {item.name} #{item.tag}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ComponentListScreen;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, backgroundColor: '#fff'},
  containerDark: {backgroundColor: '#000'},
  searchBar: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#f0f0f0',
    marginBottom: 16,
  },
  searchBarDark: {backgroundColor: '#333'},
  item: {padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc'},
  itemDark: {borderBottomColor: '#444'},
  text: {fontSize: 18, color: '#000'},
  textDark: {color: '#fff'},
});
