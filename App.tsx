/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeComponent} from './src/screens/home';
import {DetailsComponent} from './src/screens/details';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeComponent}
          options={{title: 'Overview'}}
        />
        <Stack.Screen name="Details" component={DetailsComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
