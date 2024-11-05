import ShadowPropsExample from "../components/ShadowPropsExample";

// src/code/index.ts
export const codeMap: {[key: string]: string} = {
  ButtonExample: `
      import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
const Separator = () => <View style={styles.separator} />;


const ButtonExample = () => (
    <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        The title and onPress handler are required. It is recommended to set
        accessibilityLabel to help make your app usable by everyone.
      </Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Adjust the color in a way that looks standard on each platform. On iOS,
        the color prop controls the color of the text. On Android, the color
        adjusts the background color of the button.
      </Text>
      <Button
        title="Press me"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        All interaction for the component are disabled.
      </Text>
      <Button
        title="Press me"
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        This layout strategy lets the title define the width of the button.
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Left button"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="Right button"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
    </View>
  </SafeAreaView>
);

export default ButtonExample;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });
    `,
  TextInputExample: `
      import React, { useState } from 'react';
      import { View, TextInput, Text, StyleSheet } from 'react-native';
  
      const TextInputExample = () => {
        const [text, setText] = useState('');
  
        return (
          <View style={styles.container}>
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
    `,
  ImageExample: `
    import React from 'react';
    import { View, Image, StyleSheet } from 'react-native';

    const ImageExample: React.FC = () => {
      return (
        <View style={styles.container}>
          <Image
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
            style={styles.image}
          />
        </View>
      );
    };

    export default ImageExample;

    const styles = StyleSheet.create({
      container: { padding: 16, alignItems: 'center' },
      image: { width: 100, height: 100 },
    });
  `,
  PickerExample: `
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
`,
  FlatListExample: `
import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const FlatListExample: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default FlatListExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

  `,
  SwitchExample: `
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
`,
  ActivityIndicatorExample: `
import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

const ActivityIndicatorExample: React.FC = () => {

  return (
    <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator />
    <ActivityIndicator size="large" />
    <ActivityIndicator size="small" color="#0000ff" />
    <ActivityIndicator size="large" color="#00ff00" />
  </View>
  );
};

export default ActivityIndicatorExample;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
  });
`,
  TouchableOpacityExample: `
import React from 'react';
import { View, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';

const TouchableOpacityExample: React.FC = () => {
  const onPress = () => Alert.alert('Button Pressed');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TouchableOpacityExample;

const styles = StyleSheet.create({
  container: { padding: 16, alignItems: 'center' },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: { color: '#fff', fontSize: 18 },
});
`,
  ScrollViewExample: `
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const ScrollViewExample: React.FC = () => {
  const items = Array.from({ length: 20 }, (_, i) => \`Item \${i + 1}\`);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {items.map((item) => (
        <View key={item} style={styles.item}>
          <Text style={styles.text}>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default ScrollViewExample;

const styles = StyleSheet.create({
  container: { padding: 16 },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  text: { fontSize: 18 },
});
`,
  SectionListExample: `
import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

const SectionListExample: React.FC = () => {
  const sections = [
    {
      title: 'Fruits',
      data: ['Apple', 'Banana', 'Orange'],
    },
    {
      title: 'Vegetables',
      data: ['Carrot', 'Potato', 'Broccoli'],
    },
  ];

  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
      contentContainerStyle={styles.container}
    />
  );
};

export default SectionListExample;

const styles = StyleSheet.create({
  container: { padding: 16 },
  header: {
    fontSize: 24,
    backgroundColor: '#f4f4f4',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  item: {
    fontSize: 18,
    padding: 10,
  },
});
`,
  AlertExample: `
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
`,
  ImageBackgroundExample: `
import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const ImageBackgroundExample = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default ImageBackgroundExample;
`,

  KeyboardAvoidingViewExample: `
// KeyboardAvoidingViewExamle.tsx

import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from 'react-native';

const KeyboardAvoidingViewExamle = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Header</Text>
          <TextInput placeholder="Username" style={styles.textInput} />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});

export default KeyboardAvoidingViewExamle;
`,
ModalExample: `
// ModalExample.tsx

import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

const ModalExample = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ModalExample;
`,
PressableExample: `
// PressableExample

import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const PressableExample = () => {
  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setTimesPressed(current => current + 1);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
        )}
      </Pressable>
      <View style={styles.logBox}>
        <Text testID="pressable_press_console">{textLog}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
});

export default PressableExample;
`,

RefreshControlExample: `
// RefreshControlExample.tsx

import React from 'react';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

const RefreshControlExample = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Text>Pull down to see RefreshControl indicator</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RefreshControlExample;
`,
StatusBarExample: `
// StatusBarExample.tsx

import React, {useState} from 'react';
import {
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import type {StatusBarStyle} from 'react-native';

const STYLES = ['default', 'dark-content', 'light-content'] as const;
const TRANSITIONS = ['fade', 'slide', 'none'] as const;

const StatusBarExample = () => {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
    STYLES[0],
  );
  const [statusBarTransition, setStatusBarTransition] = useState<
    'fade' | 'slide' | 'none'
  >(TRANSITIONS[0]);

  const changeStatusBarVisibility = () => setHidden(!hidden);

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
  };

  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    if (transition === TRANSITIONS.length) {
      setStatusBarTransition(TRANSITIONS[0]);
    } else {
      setStatusBarTransition(TRANSITIONS[transition]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      />
      <Text style={styles.textStyle}>
        StatusBar Visibility:{'\n'}
        {hidden ? 'Hidden' : 'Visible'}
      </Text>
      <Text style={styles.textStyle}>
        StatusBar Style:{'\n'}
        {statusBarStyle}
      </Text>
      {Platform.OS === 'ios' ? (
        <Text style={styles.textStyle}>
          StatusBar Transition:{'\n'}
          {statusBarTransition}
        </Text>
      ) : null}
      <View style={styles.buttonsContainer}>
        <Button title="Toggle StatusBar" onPress={changeStatusBarVisibility} />
        <Button title="Change StatusBar Style" onPress={changeStatusBarStyle} />
        {Platform.OS === 'ios' ? (
          <Button
            title="Change StatusBar Transition"
            onPress={changeStatusBarTransition}
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1',
  },
  buttonsContainer: {
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8,
  },
});

export default StatusBarExample;
`,

TextExample: `
// TextExample.tsx

import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';

const TextExample = () => {
  const [titleText, setTitleText] = useState("Bird's Nest");
  const bodyText = 'This is not really a bird nest.';

  const onPressTitle = () => {
    setTitleText("Bird's Nest [pressed]");
  };

  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
        {'\n'}
        {'\n'}
      </Text>
      <Text numberOfLines={5}>{bodyText}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TextExample;
`,

TouchableHighlightExample: `
// TouchableHighlightExample.tsx

import React, {useState} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const TouchableHighlightExample = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.button}>
          <Text>Touch Here</Text>
        </View>
      </TouchableHighlight>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>{count || null}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF',
  },
});

export default TouchableHighlightExample;
`,
TouchableWithoutFeedbackExample: `
// TouchableWithoutFeedbackExample.tsx

import React, {useState} from 'react';
import {StyleSheet, TouchableWithoutFeedback, Text, View} from 'react-native';

const TouchableWithoutFeedbackExample = () => {
  const [count, setCount] = useState(0);

  const onPress = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>Count: {count}</Text>
      </View>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.button}>
          <Text>Touch Here</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF',
  },
});

export default TouchableWithoutFeedbackExample;
`,
VirtualizedListExample: `
// VirtualizedListExample.tsx

import React from 'react';
import {
  SafeAreaView,
  View,
  VirtualizedList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

type ItemData = {
  id: string;
  title: string;
};

const getItem = (_data: unknown, index: number): ItemData => ({
  id: Math.random().toString(12).substring(0),
  title: \`Item \${index + 1}\`,
});

const getItemCount = (_data: unknown) => 50;

type ItemProps = {
  title: string;
};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <VirtualizedList
        initialNumToRender={4}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
`,
DrawerLayoutAndroidExample: `
// DrawerLayoutAndroidExample.tsx

import React, {useRef, useState} from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
} from 'react-native';

const DrawerLayoutAndroidExample = () => {
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const [drawerPosition, setDrawerPosition] = useState<'left' | 'right'>(
    'left',
  );
  const changeDrawerPosition = () => {
    if (drawerPosition === 'left') {
      setDrawerPosition('right');
    } else {
      setDrawerPosition('left');
    }
  };

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current?.closeDrawer()}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}>
      <View style={styles.container}>
        <Text style={styles.paragraph}>Drawer on the {drawerPosition}!</Text>
        <Button
          title="Change Drawer Position"
          onPress={() => changeDrawerPosition()}
        />
        <Text style={styles.paragraph}>
          Swipe from the side or press button below to see it!
        </Text>
        <Button
          title="Open drawer"
          onPress={() => drawer.current?.openDrawer()}
        />
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});

export default DrawerLayoutAndroidExample;
`,

TouchableNativeFeedbackAndroidExample: `
// TouchableNativeFeedbackAndroidExample.tsx

import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  StatusBar,
} from 'react-native';

const TouchableNativeFeedbackAndroidExample = () => {
  const [rippleColor, setRippleColor] = useState(randomHexColor());
  const [rippleOverflow, setRippleOverflow] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        onPress={() => {
          setRippleColor(randomHexColor());
          setRippleOverflow(!rippleOverflow);
        }}
        background={TouchableNativeFeedback.Ripple(
          rippleColor,
          rippleOverflow,
        )}>
        <View style={styles.touchable}>
          <Text style={styles.text}>TouchableNativeFeedback</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const randomHexColor = () => {
  return '#000000'.replace(/0/g, function () {
    return Math.round(Math.random() * 16).toString(16);
  });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  touchable: {flex: 0.5, borderColor: 'black', borderWidth: 1},
  text: {alignSelf: 'center'},
});

export default TouchableNativeFeedbackAndroidExample;
`,

InputAccessoryViewExample: `
// InputAccessoryViewExample.tsx

import React, {useState} from 'react';
import {Button, InputAccessoryView, ScrollView, TextInput} from 'react-native';

const InputAccessoryViewExample = () => {
  const inputAccessoryViewID = 'uniqueID';
  const initialText = '';
  const [text, setText] = useState(initialText);

  return (
    <>
      <ScrollView keyboardDismissMode="interactive">
        <TextInput
          style={{
            padding: 16,
            marginTop: 50,
          }}
          inputAccessoryViewID={inputAccessoryViewID}
          onChangeText={setText}
          value={text}
          placeholder={'Please type here…'}
        />
      </ScrollView>
      <InputAccessoryView nativeID={inputAccessoryViewID}>
        <Button onPress={() => setText(initialText)} title="Clear text" />
      </InputAccessoryView>
    </>
  );
};

export default InputAccessoryViewExample;
`,
SafeAreaViewExample: `
// SafeAreaViewExample.tsx

import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';

const SafeAreaViewExample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Page content</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});

export default SafeAreaViewExample;
`,

ImageResizeModesExample: `
// ImageResizeModesExample.tsx

import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ImageResizeModesExample = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{
            resizeMode: 'cover',
            height: 100,
            width: 200,
          }}
          source={require('@expo/snack-static/react-native-logo.png')}
        />
        <Text>resizeMode : cover</Text>
      </View>
      <View>
        <Image
          style={{
            resizeMode: 'contain',
            height: 100,
            width: 200,
          }}
          source={require('@expo/snack-static/react-native-logo.png')}
        />
        <Text>resizeMode : contain</Text>
      </View>
      <View>
        <Image
          style={{
            resizeMode: 'stretch',
            height: 100,
            width: 200,
          }}
          source={require('@expo/snack-static/react-native-logo.png')}
        />
        <Text>resizeMode : stretch</Text>
      </View>
      <View>
        <Image
          style={{
            resizeMode: 'repeat',
            height: 100,
            width: 200,
          }}
          source={require('@expo/snack-static/react-native-logo.png')}
        />
        <Text>resizeMode : repeat</Text>
      </View>
      <View>
        <Image
          style={{
            resizeMode: 'center',
            height: 100,
            width: 200,
          }}
          source={require('@expo/snack-static/react-native-logo.png')}
        />
        <Text>resizeMode : center</Text>
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

export default ImageResizeModesExample;
`,
ImageStyleBorderWidthAndBorderColorExample: `
// ImageStyleBorderWidthAndBorderColorExample.tsx

import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const ImageStyleBorderWidthAndBorderColorExample = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          borderColor: 'red',
          borderWidth: 5,
          height: 100,
          width: 200,
        }}
        source={require('@expo/snack-static/react-native-logo.png')}
      />
      <Text>borderColor & borderWidth</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
  },
});

export default ImageStyleBorderWidthAndBorderColorExample;
`,
ImageStyleBorderRadiusExample: `
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
`,

ImageStyletintColorFunctionComponentExample: `
// ImageStyletintColorFunctionComponentExample.tsx

import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const ImageStyletintColorFunctionComponentExample = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          tintColor: '#000000',
          resizeMode: 'contain',
          height: 100,
          width: 200,
        }}
        source={require('@expo/snack-static/react-native-logo.png')}
      />
      <Text>tintColor</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
  },
});

export default ImageStyletintColorFunctionComponentExample;
`,
LayoutPropsExample: `
// LayoutPropsExample.tsx

import React, {useState} from 'react';
import {
  Button,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const LayoutPropsExample = () => {
  const flexDirections = [
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ] as const;
  const justifyContents = [
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ] as const;
  const alignItemsArr = [
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'baseline',
  ] as const;
  const wraps = ['nowrap', 'wrap', 'wrap-reverse'] as const;
  const directions = ['inherit', 'ltr', 'rtl'] as const;
  const [flexDirection, setFlexDirection] = useState(0);
  const [justifyContent, setJustifyContent] = useState(0);
  const [alignItems, setAlignItems] = useState(0);
  const [direction, setDirection] = useState(0);
  const [wrap, setWrap] = useState(0);

  const hookedStyles = {
    flexDirection: flexDirections[flexDirection],
    justifyContent: justifyContents[justifyContent],
    alignItems: alignItemsArr[alignItems],
    direction: directions[direction],
    flexWrap: wraps[wrap],
  };

  const changeSetting = (
    value: number,
    options: readonly unknown[],
    setterFunction: (index: number) => void,
  ) => {
    if (value === options.length - 1) {
      setterFunction(0);
      return;
    }
    setterFunction(value + 1);
  };
  const [squares, setSquares] = useState([<Square />, <Square />, <Square />]);
  return (
    <>
      <View style={{paddingTop: StatusBar.currentHeight}} />
      <View style={[styles.container, styles.playingSpace, hookedStyles]}>
        {squares.map(elem => elem)}
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.controlSpace}>
          <View style={styles.buttonView}>
            <Button
              title="Change Flex Direction"
              onPress={() =>
                changeSetting(flexDirection, flexDirections, setFlexDirection)
              }
            />
            <Text style={styles.text}>{flexDirections[flexDirection]}</Text>
          </View>
          <View style={styles.buttonView}>
            <Button
              title="Change Justify Content"
              onPress={() =>
                changeSetting(
                  justifyContent,
                  justifyContents,
                  setJustifyContent,
                )
              }
            />
            <Text style={styles.text}>{justifyContents[justifyContent]}</Text>
          </View>
          <View style={styles.buttonView}>
            <Button
              title="Change Align Items"
              onPress={() =>
                changeSetting(alignItems, alignItemsArr, setAlignItems)
              }
            />
            <Text style={styles.text}>{alignItemsArr[alignItems]}</Text>
          </View>
          <View style={styles.buttonView}>
            <Button
              title="Change Direction"
              onPress={() => changeSetting(direction, directions, setDirection)}
            />
            <Text style={styles.text}>{directions[direction]}</Text>
          </View>
          <View style={styles.buttonView}>
            <Button
              title="Change Flex Wrap"
              onPress={() => changeSetting(wrap, wraps, setWrap)}
            />
            <Text style={styles.text}>{wraps[wrap]}</Text>
          </View>
          <View style={styles.buttonView}>
            <Button
              title="Add Square"
              onPress={() => setSquares([...squares, <Square />])}
            />
          </View>
          <View style={styles.buttonView}>
            <Button
              title="Delete Square"
              onPress={() =>
                setSquares(squares.filter((v, i) => i !== squares.length - 1))
              }
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '50%',
  },
  playingSpace: {
    backgroundColor: 'white',
    borderColor: 'blue',
    borderWidth: 3,
  },
  controlSpace: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F5F5F5',
  },
  buttonView: {
    width: '50%',
    padding: 10,
  },
  text: {textAlign: 'center'},
});

const Square = () => (
  <View
    style={{
      width: 50,
      height: 50,
      backgroundColor: randomHexColor(),
    }}
  />
);

const randomHexColor = () => {
  return '#000000'.replace(/0/g, () => {
    return Math.round(Math.random() * 16).toString(16);
  });
};

export default LayoutPropsExample;
`,

ShadowPropsExample: `
// ShadowPropsExample.tsx

import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';
import type {SliderProps} from '@react-native-community/slider';

type ShadowPropSliderProps = SliderProps & {
  label: string;
};

const ShadowPropSlider = ({label, value, ...props}: ShadowPropSliderProps) => {
  return (
    <>
      <Text>
        {label} ({value?.toFixed(2)})
      </Text>
      <Slider step={1} value={value} {...props} />
    </>
  );
};

const ShadowPropsExample = () => {
  const [shadowOffsetWidth, setShadowOffsetWidth] = useState(0);
  const [shadowOffsetHeight, setShadowOffsetHeight] = useState(0);
  const [shadowRadius, setShadowRadius] = useState(0);
  const [shadowOpacity, setShadowOpacity] = useState(0.1);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.square,
          {
            shadowOffset: {
              width: shadowOffsetWidth,
              height: -shadowOffsetHeight,
            },
            shadowOpacity,
            shadowRadius,
          },
        ]}
      />
      <View style={styles.controls}>
        <ShadowPropSlider
          label="shadowOffset - X"
          minimumValue={-50}
          maximumValue={50}
          value={shadowOffsetWidth}
          onValueChange={setShadowOffsetWidth}
        />
        <ShadowPropSlider
          label="shadowOffset - Y"
          minimumValue={-50}
          maximumValue={50}
          value={shadowOffsetHeight}
          onValueChange={setShadowOffsetHeight}
        />
        <ShadowPropSlider
          label="shadowRadius"
          minimumValue={0}
          maximumValue={100}
          value={shadowRadius}
          onValueChange={setShadowRadius}
        />
        <ShadowPropSlider
          label="shadowOpacity"
          minimumValue={0}
          maximumValue={1}
          step={0.05}
          value={shadowOpacity}
          onValueChange={(val: React.SetStateAction<number>) => setShadowOpacity(val)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  square: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 4,
    height: 150,
    shadowColor: 'black',
    width: 150,
  },
  controls: {
    paddingHorizontal: 12,
  },
});

export default ShadowPropsExample;
`,
TextStylePropsExample: `
// TextStylePropsExample.tsx

import React, {useState} from 'react';
import {
  FlatList,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Slider from '@react-native-community/slider';

const fontStyles = ['normal', 'italic'] as const;
const fontVariants = [
  undefined,
  'small-caps',
  'oldstyle-nums',
  'lining-nums',
  'tabular-nums',
  'proportional-nums',
] as const;
const fontWeights = [
  'normal',
  'bold',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
] as const;
const textAlignments = ['auto', 'left', 'right', 'center', 'justify'] as const;
const textDecorationLines = [
  'none',
  'underline',
  'line-through',
  'underline line-through',
] as const;
const textDecorationStyles = ['solid', 'double', 'dotted', 'dashed'] as const;
const textTransformations = [
  'none',
  'uppercase',
  'lowercase',
  'capitalize',
] as const;
const textAlignmentsVertical = ['auto', 'top', 'bottom', 'center'] as const;
const writingDirections = ['auto', 'ltr', 'rtl'] as const;

const TextStylePropsExample = () => {
  const [fontSize, setFontSize] = useState(10);
  const [fontStyleIdx, setFontStyleIdx] = useState(0);
  const [fontWeightIdx, setFontWeightIdx] = useState(0);
  const [lineHeight, setLineHeight] = useState(10);
  const [textAlignIdx, setTextAlignIdx] = useState(0);
  const [textDecorationLineIdx, setTextDecorationLineIdx] = useState(0);
  const [includeFontPadding, setIncludeFontPadding] = useState(false);
  const [textVerticalAlignIdx, setTextVerticalAlignIdx] = useState(0);
  const [fontVariantIdx, setFontVariantIdx] = useState(0);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [textDecorationStyleIdx, setTextDecorationStyleIdx] = useState(0);
  const [textTransformIdx, setTextTransformIdx] = useState(0);
  const [writingDirectionIdx, setWritingDirectionIdx] = useState(0);
  const [textShadowRadius, setTextShadowRadius] = useState(0);
  const [textShadowOffset, setTextShadowOffset] = useState({
    height: 0,
    width: 0,
  });

  const [, ...validFontVariants] = fontVariants;

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.paragraph,
          {
            fontSize,
            fontStyle: fontStyles[fontStyleIdx],
            fontWeight: fontWeights[fontWeightIdx],
            lineHeight,
            textAlign: textAlignments[textAlignIdx],
            textDecorationLine: textDecorationLines[textDecorationLineIdx],
            textTransform: textTransformations[textTransformIdx],
            textAlignVertical: textAlignmentsVertical[textVerticalAlignIdx],
            fontVariant:
              fontVariantIdx === 0
                ? undefined
                : [validFontVariants[fontVariantIdx - 1]],
            letterSpacing,
            includeFontPadding,
            textDecorationStyle: textDecorationStyles[textDecorationStyleIdx],
            writingDirection: writingDirections[writingDirectionIdx],
            textShadowOffset,
            textShadowRadius,
          },
        ]}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. 112 Likes
      </Text>
      <ScrollView>
        <View>
          <Text>Common platform properties</Text>
          <CustomSlider
            label="Text Shadow Offset - Height"
            value={textShadowOffset.height}
            minimumValue={-40}
            maximumValue={40}
            handleValueChange={(val: number) =>
              setTextShadowOffset(prev => ({...prev, height: val}))
            }
          />
          <CustomSlider
            label="Text Shadow Offset - Width"
            value={textShadowOffset.width}
            minimumValue={-40}
            maximumValue={40}
            handleValueChange={(val: number) =>
              setTextShadowOffset(prev => ({...prev, width: val}))
            }
          />
          <CustomSlider
            label="Font Size"
            value={fontSize}
            maximumValue={40}
            handleValueChange={setFontSize}
          />
          <CustomPicker
            label="Font Style"
            data={fontStyles}
            currentIndex={fontStyleIdx}
            onSelected={setFontStyleIdx}
          />
          <CustomPicker
            label="Font Weight"
            data={fontWeights}
            currentIndex={fontWeightIdx}
            onSelected={setFontWeightIdx}
          />
          <CustomSlider
            label="Line Height"
            value={lineHeight}
            minimumValue={10}
            maximumValue={50}
            handleValueChange={setLineHeight}
          />
          <CustomPicker
            label="Text Align"
            data={textAlignments}
            currentIndex={textAlignIdx}
            onSelected={setTextAlignIdx}
          />
          <CustomPicker
            label="Text Decoration Line"
            data={textDecorationLines}
            currentIndex={textDecorationLineIdx}
            onSelected={setTextDecorationLineIdx}
          />
          <CustomSlider
            label="Text Shadow Radius"
            value={textShadowRadius}
            handleValueChange={setTextShadowRadius}
          />
          <CustomPicker
            label="Font Variant"
            data={fontVariants}
            currentIndex={fontVariantIdx}
            onSelected={setFontVariantIdx}
          />
          <CustomSlider
            label="Letter Spacing"
            step={0.1}
            value={letterSpacing}
            handleValueChange={setLetterSpacing}
          />
          <CustomPicker
            label="Text Transform"
            data={textTransformations}
            currentIndex={textTransformIdx}
            onSelected={setTextTransformIdx}
          />
        </View>
        {Platform.OS === 'android' && (
          <View style={styles.platformContainer}>
            <Text style={styles.platformContainerTitle}>
              Android only properties
            </Text>
            <CustomPicker
              label="Text Vertical Align"
              data={textAlignmentsVertical}
              currentIndex={textVerticalAlignIdx}
              onSelected={setTextVerticalAlignIdx}
            />
            <CustomSwitch
              label="Include Font Padding"
              handleValueChange={setIncludeFontPadding}
              value={includeFontPadding}
            />
          </View>
        )}
        {Platform.OS === 'ios' && (
          <View style={styles.platformContainer}>
            <Text style={styles.platformContainerTitle}>
              iOS only properties
            </Text>
            <CustomPicker
              label="Text Decoration Style"
              data={textDecorationStyles}
              currentIndex={textDecorationStyleIdx}
              onSelected={setTextDecorationStyleIdx}
            />
            <CustomPicker
              label="Writing Direction"
              data={writingDirections}
              currentIndex={writingDirectionIdx}
              onSelected={setWritingDirectionIdx}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

type CustomSwitchProps = {
  label: string;
  handleValueChange: (value: boolean) => void;
  value: boolean;
};

const CustomSwitch = ({label, handleValueChange, value}: CustomSwitchProps) => {
  return (
    <>
      <Text style={styles.title}>{label}</Text>
      <View style={{alignItems: 'flex-start'}}>
        <Switch
          trackColor={{false: '#767577', true: '#DAA520'}}
          thumbColor={value ? '#DAA520' : '#f4f3f4'}
          onValueChange={handleValueChange}
          value={value}
        />
      </View>
    </>
  );
};

type CustomSliderProps = {
  label: string;
  handleValueChange: (value: number) => void;
  step?: number;
  minimumValue?: number;
  maximumValue?: number;
  value: number;
};

const CustomSlider = ({
  label,
  handleValueChange,
  step = 1,
  minimumValue = 0,
  maximumValue = 10,
  value,
}: CustomSliderProps) => {
  return (
    <>
      {label && (
        <Text style={styles.title}>{\`\${label} (\${value.toFixed(2)})\`}</Text>
      )}
      <View style={styles.wrapperHorizontal}>
        <Slider
          thumbTintColor="#DAA520"
          minimumTrackTintColor="#DAA520"
          minimumValue={minimumValue}
          maximumValue={maximumValue}
          step={step}
          onValueChange={handleValueChange}
          value={value}
        />
      </View>
    </>
  );
};

type CustomPickerProps = {
  label: string;
  data: ReadonlyArray<string | undefined>;
  currentIndex: number;
  onSelected: (index: number) => void;
};

const CustomPicker = ({
  label,
  data,
  currentIndex,
  onSelected,
}: CustomPickerProps) => {
  return (
    <>
      <Text style={styles.title}>{label}</Text>
      <View style={styles.wrapperHorizontal}>
        <FlatList
          bounces
          horizontal
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({item, index}) => {
            const selected = index === currentIndex;
            return (
              <TouchableWithoutFeedback onPress={() => onSelected(index)}>
                <View
                  style={[
                    styles.itemStyleHorizontal,
                    selected && styles.itemSelectedStyleHorizontal,
                  ]}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: selected ? 'black' : 'grey',
                      fontWeight: selected ? 'bold' : 'normal',
                    }}>
                    {item + ''}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            );
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    color: 'black',
    textDecorationColor: 'yellow',
    textShadowColor: 'red',
    textShadowRadius: 1,
    margin: 24,
  },
  wrapperHorizontal: {
    height: 54,
    justifyContent: 'center',
    color: 'black',
    marginBottom: 12,
  },
  itemStyleHorizontal: {
    marginRight: 10,
    height: 50,
    padding: 8,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 25,
    textAlign: 'center',
    justifyContent: 'center',
  },
  itemSelectedStyleHorizontal: {
    borderWidth: 2,
    borderColor: '#DAA520',
  },
  platformContainer: {
    marginTop: 8,
    borderTopWidth: 1,
  },
  platformContainerTitle: {
    marginTop: 8,
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 4,
  },
});

export default TextStylePropsExample;
`,

ViewStylePropsExample: `
// ViewStylePropsExample.tsx

import React from 'react';
import {View, StyleSheet} from 'react-native';

const ViewStylePropsExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top} />
      <View style={styles.middle} />
      <View style={styles.bottom} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
  },
  top: {
    flex: 0.3,
    backgroundColor: 'grey',
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  middle: {
    flex: 0.3,
    backgroundColor: 'beige',
    borderWidth: 5,
  },
  bottom: {
    flex: 0.3,
    backgroundColor: 'pink',
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default ViewStylePropsExample;
`,

AnimatedExample: `
// AnimatedExample.tsx

import React, {useRef} from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
} from 'react-native';

const AnimatedExample = () => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}>
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Fade In View" onPress={fadeIn} />
        <Button title="Fade Out View" onPress={fadeOut} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
});

export default AnimatedExample;
`,
AnimatedValueXYExample: `
// AnimatedValueXYExample.tsx

import React, {useRef} from 'react';
import {Animated, PanResponder, StyleSheet, View} from 'react-native';

const AnimatedValueXYExample = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      },
    ]),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {toValue: {x: 0, y: 0}, useNativeDriver: true}, // Back to zero
      ).start();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.box]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#61dafb',
    width: 80,
    height: 80,
    borderRadius: 4,
  },
});

export default AnimatedValueXYExample;
`,
AppStateExample: `
// AppStateExample.tsx

import React, {useRef, useState, useEffect} from 'react';
import {AppState, StyleSheet, Text, View} from 'react-native';

const AppStateExample = () => {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Current state is: {appStateVisible}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppStateExample;
`,
DimensionsExample: `
// DimensionsExample.tsx

import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

const DimensionsExample = () => {
  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({window, screen}) => {
        setDimensions({window, screen});
      },
    );
    return () => subscription?.remove();
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Window Dimensions</Text>
      {Object.entries(dimensions.window).map(([key, value]) => (
        <Text>
          {key} - {value}
        </Text>
      ))}
      <Text style={styles.header}>Screen Dimensions</Text>
      {Object.entries(dimensions.screen).map(([key, value]) => (
        <Text>
          {key} - {value}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 16,
    marginVertical: 10,
  },
});

export default DimensionsExample;
`,
EasingDemoExample: `
// EasingDemoExample.tsx

import React from 'react';
import {
  Animated,
  Easing,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import type {EasingFunction} from 'react-native';

const EasingDemoExample = () => {
  let opacity = new Animated.Value(0);

  const animate = (easing: EasingFunction) => {
    opacity.setValue(0);
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1200,
      easing,
      useNativeDriver: true,
    }).start();
  };

  const size = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 80],
  });

  const animatedStyles = [
    styles.box,
    {
      opacity,
      width: size,
      height: size,
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Text style={styles.title}>Press rows below to preview the Easing!</Text>
      <View style={styles.boxContainer}>
        <Animated.View style={animatedStyles} />
      </View>
      <SectionList
        style={styles.list}
        sections={SECTIONS}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => animate(item.easing)}
            style={styles.listRow}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.listHeader}>{title}</Text>
        )}
      />
    </View>
  );
};

const SECTIONS = [
  {
    title: 'Predefined animations',
    data: [
      {title: 'Bounce', easing: Easing.bounce},
      {title: 'Ease', easing: Easing.ease},
      {title: 'Elastic', easing: Easing.elastic(4)},
    ],
  },
  {
    title: 'Standard functions',
    data: [
      {title: 'Linear', easing: Easing.linear},
      {title: 'Quad', easing: Easing.quad},
      {title: 'Cubic', easing: Easing.cubic},
    ],
  },
  {
    title: 'Additional functions',
    data: [
      {
        title: 'Bezier',
        easing: Easing.bezier(0, 2, 1, -1),
      },
      {title: 'Circle', easing: Easing.circle},
      {title: 'Sin', easing: Easing.sin},
      {title: 'Exp', easing: Easing.exp},
    ],
  },
  {
    title: 'Combinations',
    data: [
      {
        title: 'In + Bounce',
        easing: Easing.in(Easing.bounce),
      },
      {
        title: 'Out + Exp',
        easing: Easing.out(Easing.exp),
      },
      {
        title: 'InOut + Elastic',
        easing: Easing.inOut(Easing.elastic(1)),
      },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#20232a',
  },
  title: {
    marginTop: 10,
    textAlign: 'center',
    color: '#61dafb',
  },
  boxContainer: {
    height: 160,
    alignItems: 'center',
  },
  box: {
    marginTop: 32,
    borderRadius: 4,
    backgroundColor: '#61dafb',
  },
  list: {
    backgroundColor: '#fff',
  },
  listHeader: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#f4f4f4',
    color: '#999',
    fontSize: 12,
    textTransform: 'uppercase',
  },
  listRow: {
    padding: 8,
  },
});

export default EasingDemoExample;
`,
InteractionManagerFunctionExample: `
// InteractionManagerFunctionExample.tsx

import React, {useState, useEffect} from 'react';
import {
  Alert,
  Animated,
  InteractionManager,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const useFadeIn = (duration = 5000) => {
  const [opacity] = useState(new Animated.Value(0));

  // Running the animation when the component is mounted
  useEffect(() => {
    // Animated.timing() create a interaction handle by default, if you want to disabled that
    // behaviour you can set isInteraction to false to disabled that.
    Animated.timing(opacity, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  }, [duration, opacity]);

  return opacity;
};

type BallProps = {
  onShown: () => void;
};

const Ball = ({onShown}: BallProps) => {
  const opacity = useFadeIn();

  // Running a method after the animation
  useEffect(() => {
    const interactionPromise = InteractionManager.runAfterInteractions(() =>
      onShown(),
    );
    return () => interactionPromise.cancel();
  }, [onShown]);

  return <Animated.View style={[styles.ball, {opacity}]} />;
};

const InteractionManagerFunctionExample = () => {
  return (
    <View style={styles.container}>
      <Text>{instructions}</Text>
      <Ball onShown={() => Alert.alert('Animation is done')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball: {
    width: 100,
    height: 100,
    backgroundColor: 'salmon',
    borderRadius: 100,
  },
});

export default InteractionManagerFunctionExample;
`,
KeyboardExample: `
// KeyboardExample.tsx

import React, {useState, useEffect} from 'react';
import {Keyboard, Text, TextInput, StyleSheet, View} from 'react-native';

const KeyboardExample = () => {
  const [keyboardStatus, setKeyboardStatus] = useState('');

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus('Keyboard Shown');
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus('Keyboard Hidden');
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        placeholder="Click here…"
        onSubmitEditing={Keyboard.dismiss}
      />
      <Text style={style.status}>{keyboardStatus}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 36,
  },
  input: {
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 4,
  },
  status: {
    padding: 10,
    textAlign: 'center',
  },
});

export default KeyboardExample;
`,
LayoutAnimationExample: `
// LayoutAnimationExample.tsx

import React, {useState} from 'react';
import {
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const LayoutAnimationExample = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
          setExpanded(!expanded);
        }}>
        <Text>Press me to {expanded ? 'collapse' : 'expand'}!</Text>
      </TouchableOpacity>
      {expanded && (
        <View style={style.tile}>
          <Text>I disappear sometimes!</Text>
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  tile: {
    backgroundColor: 'lightgrey',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});

export default LayoutAnimationExample;
`,
LinkingExample: `
// LinkingExample.tsx

import React, {useCallback} from 'react';
import {Alert, Button, Linking, StyleSheet, View} from 'react-native';

const supportedURL = 'https://google.com';

const unsupportedURL = 'slack://open?team=123456';

type OpenURLButtonProps = {
  url: string;
  children: string;
};

const OpenURLButton = ({url, children}: OpenURLButtonProps) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(\`Don't know how to open this URL: \${url}\`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const LinkingExample = () => {
  return (
    <View style={styles.container}>
      <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
      <OpenURLButton url={unsupportedURL}>Open Unsupported URL</OpenURLButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LinkingExample;
`,
LinkingCustomExample: `
// LinkingCustomExample.tsx

import React, {useCallback} from 'react';
import {Button, Linking, StyleSheet, View} from 'react-native';

type OpenSettingsButtonProps = {
  children: string;
};

const OpenSettingsButton = ({children}: OpenSettingsButtonProps) => {
  const handlePress = useCallback(async () => {
    // Open the custom settings if the app has one
    await Linking.openSettings();
  }, []);

  return <Button title={children} onPress={handlePress} />;
};

const LinkingCustomExample = () => {
  return (
    <View style={styles.container}>
      <OpenSettingsButton>Open Settings</OpenSettingsButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LinkingCustomExample;
`,
LinkingDeepLinkExample: `
// LinkingDeepLinkExample.tsx

import React, {useState, useEffect} from 'react';
import {Linking, StyleSheet, Text, View} from 'react-native';

const useInitialURL = () => {
  const [url, setUrl] = useState<string | null>(null);
  const [processing, setProcessing] = useState(true);

  useEffect(() => {
    const getUrlAsync = async () => {
      // Get the deep link used to open the app
      const initialUrl = await Linking.getInitialURL();

      // The setTimeout is just for testing purpose
      setTimeout(() => {
        setUrl(initialUrl);
        setProcessing(false);
      }, 1000);
    };

    getUrlAsync();
  }, []);

  return {url, processing};
};

const LinkingDeepLinkExample = () => {
  const {url: initialUrl, processing} = useInitialURL();

  return (
    <View style={styles.container}>
      <Text>
        {processing
          ? 'Processing the initial url from a deep link'
          : \`The deep link is: \${initialUrl || 'None'}\`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LinkingDeepLinkExample;
`,
LinkingSendIntentsAndroidExample: `
// LinkingSendIntentsAndroidExample.tsx

import React, {useCallback} from 'react';
import {Alert, Button, Linking, StyleSheet, View} from 'react-native';

type SendIntentButtonProps = {
  action: string;
  children: string;
  extras?: Array<{
    key: string;
    value: string | number | boolean;
  }>;
};

const SendIntentButton = ({
  action,
  extras,
  children,
}: SendIntentButtonProps) => {
  const handlePress = useCallback(async () => {
    try {
      await Linking.sendIntent(action, extras);
    } catch (e: any) {
      Alert.alert(e.message);
    }
  }, [action, extras]);

  return <Button title={children} onPress={handlePress} />;
};

const LinkingSendIntentsAndroidExample = () => {
  return (
    <View style={styles.container}>
      <SendIntentButton action="android.intent.action.POWER_USAGE_SUMMARY">
        Power Usage Summary
      </SendIntentButton>
      <SendIntentButton
        action="android.settings.APP_NOTIFICATION_SETTINGS"
        extras={[
          {
            key: 'android.provider.extra.APP_PACKAGE',
            value: 'com.facebook.katana',
          },
        ]}>
        App Notification Settings
      </SendIntentButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LinkingSendIntentsAndroidExample;`,
PanResponderExample: `// PanResponderExample.tsx

import React, {useRef} from 'react';
import {Animated, View, StyleSheet, PanResponder, Text} from 'react-native';

const PanResponderExample = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderRelease: () => {
        pan.extractOffset();
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Drag this box!</Text>
      <Animated.View
        style={{
          transform: [{translateX: pan.x}, {translateY: pan.y}],
        }}
        {...panResponder.panHandlers}>
        <View style={styles.box} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});

export default PanResponderExample;`,
PixelRatioExample: `// PixelRatioExample.tsx

import React from 'react';
import {
  Image,
  PixelRatio,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const size = 50;
const cat = {
  uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
  width: size,
  height: size,
};

const PixelRatioExample = () => (
  <ScrollView style={styles.scrollContainer}>
    <View style={styles.container}>
      <Text>Current Pixel Ratio is:</Text>
      <Text style={styles.value}>{PixelRatio.get()}</Text>
    </View>
    <View style={styles.container}>
      <Text>Current Font Scale is:</Text>
      <Text style={styles.value}>{PixelRatio.getFontScale()}</Text>
    </View>
    <View style={styles.container}>
      <Text>On this device images with a layout width of</Text>
      <Text style={styles.value}>{size} px</Text>
      <Image source={cat} />
    </View>
    <View style={styles.container}>
      <Text>require images with a pixel width of</Text>
      <Text style={styles.value}>
        {PixelRatio.getPixelSizeForLayoutSize(size)} px
      </Text>
      <Image
        source={cat}
        style={{
          width: PixelRatio.getPixelSizeForLayoutSize(size),
          height: PixelRatio.getPixelSizeForLayoutSize(size),
        }}
      />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    fontSize: 24,
    marginBottom: 12,
    marginTop: 4,
  },
});

export default PixelRatioExample;`,
PlatformAPIExample: `// PlatformAPIExample.tsx

import React from 'react';
import {Platform, StyleSheet, Text, ScrollView} from 'react-native';

const PlatformAPIExample = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>OS</Text>
      <Text style={styles.value}>{Platform.OS}</Text>
      <Text>OS Version</Text>
      <Text style={styles.value}>{Platform.Version}</Text>
      <Text>isTV</Text>
      <Text style={styles.value}>{Platform.isTV.toString()}</Text>
      {Platform.OS === 'ios' && (
        <>
          <Text>isPad</Text>
          <Text style={styles.value}>{Platform.isPad.toString()}</Text>
        </>
      )}
      <Text>Constants</Text>
      <Text style={styles.value}>
        {JSON.stringify(Platform.constants, null, 2)}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    fontWeight: '600',
    padding: 4,
    marginBottom: 8,
  },
});

export default PlatformAPIExample;`,
PlatformColorExample: `// PlatformColorExample.tsx

import React from 'react';
import {Platform, PlatformColor, StyleSheet, Text, View} from 'react-native';

const PlatformColorExample = () => (
  <View style={styles.container}>
    <Text style={styles.label}>I am a special label color!</Text>
  </View>
);

const styles = StyleSheet.create({
  label: {
    padding: 16,
    ...Platform.select({
      ios: {
        color: PlatformColor('label'),
        backgroundColor: PlatformColor('systemTealColor'),
      },
      android: {
        color: PlatformColor('?android:attr/textColor'),
        backgroundColor: PlatformColor('@android:color/holo_blue_bright'),
      },
      default: {color: 'black'},
    }),
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PlatformColorExample;`,
ShareExample: `// ShareExample.tsx

import React from 'react';
import {Alert, Share, View, Button} from 'react-native';

const ShareExample = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  return (
    <View style={{marginTop: 50}}>
      <Button onPress={onShare} title="Share" />
    </View>
  );
};

export default ShareExample;`,
StyleSheetExample: `// StyleSheetExample.tsx

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const StyleSheetExample = () => (
  <View style={styles.container}>
    <Text style={styles.title}>React Native</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default StyleSheetExample;`,
StyleSheetComposeExample: `// StyleSheetComposeExample.tsx

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const StyleSheetComposeExample = () => (
  <View style={container}>
    <Text style={text}>React Native</Text>
  </View>
);

const page = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 30,
    color: '#000',
  },
});

const lists = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: '#61dafb',
  },
  listItem: {
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});

const container = StyleSheet.compose(page.container, lists.listContainer);
const text = StyleSheet.compose(page.text, lists.listItem);

export default StyleSheetComposeExample;`,
StyleSheetFlattenExample: `// StyleSheetFlattenExample.tsx

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const StyleSheetFlattenExample = () => (
  <View style={page.container}>
    <Text style={flattenStyle}>React Native</Text>
    <Text>Flatten Style</Text>
    <Text style={page.code}>{JSON.stringify(flattenStyle, null, 2)}</Text>
  </View>
);

const page = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  code: {
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    color: '#666',
    backgroundColor: '#eaeaea',
  },
});

const typography = StyleSheet.create({
  header: {
    color: '#61dafb',
    fontSize: 30,
    marginBottom: 36,
  },
});

const flattenStyle = StyleSheet.flatten([page.text, typography.header]);

export default StyleSheetFlattenExample;`,
StyleSheetabsoluteFillExample: `// StyleSheetabsoluteFillExample.tsx

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const StyleSheetabsoluteFillExample = () => (
  <View style={styles.container}>
    <View style={styles.box1}>
      <Text style={styles.text}>1</Text>
    </View>
    <View style={[styles.box2, StyleSheet.absoluteFill]}>
      <Text style={styles.text}>2</Text>
    </View>
    <View style={styles.box3}>
      <Text style={styles.text}>3</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    position: 'absolute',
    top: 40,
    left: 40,
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
  box3: {
    position: 'absolute',
    top: 120,
    left: 120,
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
  text: {
    color: '#FFF',
    fontSize: 80,
  },
});

export default StyleSheetabsoluteFillExample;`,
StyleSheetabsoluteFillObject: `// StyleSheetabsoluteFillObject.tsx

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const StyleSheetabsoluteFillObject = () => (
  <View style={styles.container}>
    <View style={styles.box1}>
      <Text style={styles.text}>1</Text>
    </View>
    <View style={styles.box2}>
      <Text style={styles.text}>2</Text>
    </View>
    <View style={styles.box3}>
      <Text style={styles.text}>3</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    position: 'absolute',
    top: 40,
    left: 40,
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  box2: {
    ...StyleSheet.absoluteFillObject,
    top: 120,
    left: 50,
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
  box3: {
    ...StyleSheet.absoluteFillObject,
    top: 120,
    left: 120,
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
  text: {
    color: '#FFF',
    fontSize: 80,
  },
});

export default StyleSheetabsoluteFillObject;`,
StyleSheethairlineWidth: `// StyleSheethairlineWidth.tsx

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const StyleSheethairlineWidth = () => (
  <View style={styles.container}>
    <Text style={styles.row}>React</Text>
    <Text style={styles.row}>Native</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  row: {
    padding: 4,
    borderBottomColor: 'red',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default StyleSheethairlineWidth;`,
SystraceExample: `// SystraceExample.tsx

import React from 'react';
import {
  Button,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Systrace,
} from 'react-native';

const SystraceExample = () => {
  const enableProfiling = () => {
    Systrace.setEnabled(true); // Call setEnabled to turn on the profiling.
    Systrace.beginEvent('event_label');
    Systrace.counterEvent('event_label', 10);
  };

  const stopProfiling = () => {
    Systrace.endEvent();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.header, styles.paragraph]}>
        React Native Systrace API
      </Text>
      <View style={styles.buttonRow}>
        <Button
          title="Capture the non-Timed JS events in EasyProfiler"
          onPress={() => enableProfiling()}
        />
        <Button
          title="Stop capturing"
          onPress={() => stopProfiling()}
          color="#FF0000"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 44,
    padding: 8,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 25,
    textAlign: 'center',
  },
  buttonRow: {
    flexBasis: 150,
    marginVertical: 16,
    justifyContent: 'space-evenly',
  },
});

export default SystraceExample;`,
TransformsExample: `
// TransformsExample.tsx

import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

const TransformsExample = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContentContainer}>
      <View style={styles.box}>
        <Text style={styles.text}>Original Object</Text>
      </View>

      <View
        style={[
          styles.box,
          {
            transform: [{scale: 2}],
          },
        ]}>
        <Text style={styles.text}>Scale by 2</Text>
      </View>

      <View
        style={[
          styles.box,
          {
            transform: [{scaleX: 2}],
          },
        ]}>
        <Text style={styles.text}>ScaleX by 2</Text>
      </View>

      <View
        style={[
          styles.box,
          {
            transform: [{scaleY: 2}],
          },
        ]}>
        <Text style={styles.text}>ScaleY by 2</Text>
      </View>

      <View
        style={[
          styles.box,
          {
            transform: [{rotate: '45deg'}],
          },
        ]}>
        <Text style={styles.text}>Rotate by 45 deg</Text>
      </View>

      <View
        style={[
          styles.box,
          {
            transform: [{rotateX: '45deg'}, {rotateZ: '45deg'}],
          },
        ]}>
        <Text style={styles.text}>Rotate X&Z by 45 deg</Text>
      </View>

      <View
        style={[
          styles.box,
          {
            transform: [{rotateY: '45deg'}, {rotateZ: '45deg'}],
          },
        ]}>
        <Text style={styles.text}>Rotate Y&Z by 45 deg</Text>
      </View>

      <View
        style={[
          styles.box,
          {
            transform: [{skewX: '45deg'}],
          },
        ]}>
        <Text style={styles.text}>SkewX by 45 deg</Text>
      </View>

      <View
        style={[
          styles.box,
          {
            transform: [{skewY: '45deg'}],
          },
        ]}>
        <Text style={styles.text}>SkewY by 45 deg</Text>
      </View>

      <View
        style={[
          styles.box,
          {
            transform: [{skewX: '30deg'}, {skewY: '30deg'}],
          },
        ]}>
        <Text style={styles.text}>Skew X&Y by 30 deg</Text>
      </View>

      <View
        style={[
          styles.box,
          {
            transform: [{translateX: -50}],
          },
        ]}>
        <Text style={styles.text}>TranslateX by -50 </Text>
      </View>

      <View
        style={[
          styles.box,
          {
            transform: [{translateY: 50}],
          },
        ]}>
        <Text style={styles.text}>TranslateY by 50 </Text>
      </View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContentContainer: {
    alignItems: 'center',
    paddingBottom: 60,
  },
  box: {
    height: 100,
    width: 100,
    borderRadius: 5,
    marginVertical: 40,
    backgroundColor: '#61dafb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 8,
    color: '#000',
    textAlign: 'center',
  },
});

export default TransformsExample;`,
TransformOriginExample: `// TransformOriginExample.tsx

import React, {useRef, useEffect} from 'react';
import {Animated, View, StyleSheet, SafeAreaView, Easing} from 'react-native';

const TransformOriginExample = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [rotateAnim]);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.transformOriginWrapper}>
        <Animated.View
          style={[
            styles.transformOriginView,
            {
              transform: [{rotate: spin}],
            },
          ]}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  transformOriginWrapper: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.5)',
  },
  transformOriginView: {
    backgroundColor: 'pink',
    width: 100,
    height: 100,
    transformOrigin: 'top',
  },
});

export default TransformOriginExample;`,
VibrationExample: `// VibrationExample.tsx

import React from 'react';
import {
  Button,
  Platform,
  Text,
  Vibration,
  View,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const Separator = () => {
  return <View style={Platform.OS === 'android' ? styles.separator : null} />;
};

const VibrationExample = () => {
  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS,
  ];

  const PATTERN_DESC =
    Platform.OS === 'android'
      ? 'wait 1s, vibrate 2s, wait 3s'
      : 'wait 1s, vibrate, wait 2s, vibrate, wait 3s';

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.header, styles.paragraph]}>Vibration API</Text>
      <View>
        <Button title="Vibrate once" onPress={() => Vibration.vibrate()} />
      </View>
      <Separator />
      {Platform.OS === 'android'
        ? [
            <View>
              <Button
                title="Vibrate for 10 seconds"
                onPress={() => Vibration.vibrate(10 * ONE_SECOND_IN_MS)}
              />
            </View>,
            <Separator />,
          ]
        : null}
      <Text style={styles.paragraph}>Pattern: {PATTERN_DESC}</Text>
      <Button
        title="Vibrate with pattern"
        onPress={() => Vibration.vibrate(PATTERN)}
      />
      <Separator />
      <Button
        title="Vibrate with pattern until cancelled"
        onPress={() => Vibration.vibrate(PATTERN, true)}
      />
      <Separator />
      <Button
        title="Stop vibration pattern"
        onPress={() => Vibration.cancel()}
        color="#FF0000"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 44,
    padding: 8,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    margin: 24,
    textAlign: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default VibrationExample;`,
useColorSchemeExample: `// useColorSchemeExample.tsx

import React from 'react';
import {Text, StyleSheet, useColorScheme, View} from 'react-native';

const useColorSchemeExample = () => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <Text>useColorScheme(): {colorScheme}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default useColorSchemeExample;`,
useWindowDimensionsExample: `// useWindowDimensionsExample.tsx

import React from 'react';
import {View, StyleSheet, Text, useWindowDimensions} from 'react-native';

const useWindowDimensionsExample = () => {
  const {height, width, scale, fontScale} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Window Dimension Data</Text>
      <Text>Height: {height}</Text>
      <Text>Width: {width}</Text>
      <Text>Font scale: {fontScale}</Text>
      <Text>Pixel ratio: {scale}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    marginBottom: 12,
  },
});

export default useWindowDimensionsExample;`,
BackHandlerExample: `// BackHandlerExample.tsx

import React, {useEffect} from 'react';
import {Text, View, StyleSheet, BackHandler, Alert} from 'react-native';

const BackHandlerExample = () => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Click Back button!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BackHandlerExample;`,
PermissionsAndroidExample: `// PermissionsAndroidExample.tsx

import React from 'react';
import {
  Button,
  PermissionsAndroid,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

const PermissionsAndroidExample = () => (
  <View style={styles.container}>
    <Text style={styles.item}>Try permissions</Text>
    <Button title="request permissions" onPress={requestCameraPermission} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  item: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PermissionsAndroidExample;`,
ToastAndroidExample: `// ToastAndroidExample.tsx

import React from 'react';
import {View, StyleSheet, ToastAndroid, Button, StatusBar} from 'react-native';

const ToastAndroidExample = () => {
  const showToast = () => {
    ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
  };

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      'All Your Base Are Belong To Us',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      'A wild toast appeared!',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Toggle Toast" onPress={() => showToast()} />
      <Button
        title="Toggle Toast With Gravity"
        onPress={() => showToastWithGravity()}
      />
      <Button
        title="Toggle Toast With Gravity & Offset"
        onPress={() => showToastWithGravityAndOffset()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#888888',
    padding: 8,
  },
});

export default ToastAndroidExample;`,
ActionSheetIOSExample: `// ActionSheetIOSExample.tsx

import React, {useState} from 'react';
import {ActionSheetIOS, Button, StyleSheet, Text, View} from 'react-native';

const ActionSheetIOSExample = () => {
  const [result, setResult] = useState('🔮');

  const onPress = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Generate number', 'Reset'],
        destructiveButtonIndex: 2,
        cancelButtonIndex: 0,
        userInterfaceStyle: 'dark',
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          setResult(String(Math.floor(Math.random() * 100) + 1));
        } else if (buttonIndex === 2) {
          setResult('🔮');
        }
      },
    );

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{result}</Text>
      <Button onPress={onPress} title="Show Action Sheet" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  result: {
    fontSize: 64,
    textAlign: 'center',
  },
});

export default ActionSheetIOSExample;`,
SettingsExample: `// SettingsExample.tsx

import React, {useState} from 'react';
import {Button, Settings, StyleSheet, Text, View} from 'react-native';

const SettingsExample = () => {
  const [data, setData] = useState(() => Settings.get('data'));

  return (
    <View style={styles.container}>
      <Text>Stored value:</Text>
      <Text style={styles.value}>{data}</Text>
      <Button
        onPress={() => {
          Settings.set({data: 'React'});
          setData(Settings.get('data'));
        }}
        title="Store 'React'"
      />
      <Button
        onPress={() => {
          Settings.set({data: 'Native'});
          setData(Settings.get('data'));
        }}
        title="Store 'Native'"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    fontSize: 24,
    marginVertical: 12,
  },
});

export default SettingsExample;`,
AccessibilityInfoExample: `// AccessibilityInfoExample.tsx

import React, {useState, useEffect} from 'react';
import {AccessibilityInfo, View, Text, StyleSheet} from 'react-native';

const AccessibilityInfoExample = () => {
  const [reduceMotionEnabled, setReduceMotionEnabled] = useState(false);
  const [screenReaderEnabled, setScreenReaderEnabled] = useState(false);

  useEffect(() => {
    const reduceMotionChangedSubscription = AccessibilityInfo.addEventListener(
      'reduceMotionChanged',
      isReduceMotionEnabled => {
        setReduceMotionEnabled(isReduceMotionEnabled);
      },
    );
    const screenReaderChangedSubscription = AccessibilityInfo.addEventListener(
      'screenReaderChanged',
      isScreenReaderEnabled => {
        setScreenReaderEnabled(isScreenReaderEnabled);
      },
    );

    AccessibilityInfo.isReduceMotionEnabled().then(isReduceMotionEnabled => {
      setReduceMotionEnabled(isReduceMotionEnabled);
    });
    AccessibilityInfo.isScreenReaderEnabled().then(isScreenReaderEnabled => {
      setScreenReaderEnabled(isScreenReaderEnabled);
    });

    return () => {
      reduceMotionChangedSubscription.remove();
      screenReaderChangedSubscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.status}>
        The reduce motion is {reduceMotionEnabled ? 'enabled' : 'disabled'}.
      </Text>
      <Text style={styles.status}>
        The screen reader is {screenReaderEnabled ? 'enabled' : 'disabled'}.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  status: {
    margin: 30,
  },
});

export default AccessibilityInfoExample;`,
AxiosExample: `// src/components/AxiosExample.tsx
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
});`,
MasonryListExample: `
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

const data: MasonryItem[] = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  uri: \`https://picsum.photos/id/\${index + 10}/200/300\`,
  title: \`Image \${index + 1}\`,
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
});`,
LoginForm1Example: `
// LoginForm1Example.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const LoginForm1Example: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async () => {
        try {
            // Fake API call
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                email,
                password,
            });

            if (response.status === 201) {
                setMessage('Login successful!');
            } else {
                setMessage('Login failed!');
            }
        } catch (error) {
            setMessage('Login failed!');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />
            {message ? <Text style={styles.message}>{message}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    message: {
        marginTop: 16,
        textAlign: 'center',
        color: 'red',
    },
});

export default LoginForm1Example;
`,
LoginForm2Example: `import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Text } from '@rneui/themed';
import { ActivityIndicator } from 'react-native';

const LoginForm2Example: React.FC = () => {
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setLoading(true);
        // Simulate an API call
        setTimeout(() => {
            setLoading(false);
            alert('Logged in successfully!');
        }, 2000);
    };

    return (
        <View style={styles.container}>
            <Text h4 style={styles.title}>Login</Text>
            <Input
                placeholder="Phone Number"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
                containerStyle={styles.input}
            />
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <Button title="Login" onPress={handleLogin} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        marginBottom: 16,
    },
});

export default LoginForm2Example;
function alert(arg0: string) {
    throw new Error('Function not implemented.');
}
`,
LoginForm3Example: `
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const LoginForm3Example: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>Logo</Text>
            </View>
            <View style={styles.formContainer}>
                <TextInput style={styles.input} placeholder="Username" />
                <TextInput style={styles.input} placeholder="Password" secureTextEntry />
                <Button title="Login" onPress={() => {}} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoContainer: {
        height: height * 0.3,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    formContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default LoginForm3Example;

`,
LoginForm4Example: `
// LoginForm4Example.tsx

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const LoginForm4Example: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#aaa"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#aaa"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: 20,
    },
    title: {
        fontSize: 32,
        marginBottom: 20,
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
        color: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
});

export default LoginForm4Example;`,
};
