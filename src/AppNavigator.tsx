import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ComponentListScreen from './screens/ComponentListScreen';
import ComponentDetailScreen from './screens/ComponentDetailScreen';
import {RootStackParamList} from './screens/types';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="ComponentList">
      <Stack.Screen
        name="ComponentList"
        component={ComponentListScreen}
        options={{title: 'ReactNative Components'}}
      />
      <Stack.Screen
        name="ComponentDetail"
        component={ComponentDetailScreen}
        options={{title: 'Component Details'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
