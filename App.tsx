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

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeComponent } from './src/screens/home';
import { DetailsComponent } from './src/screens/details';
import { Text, View } from 'react-native';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Profile() {
  return (
    <View>
      <Text>profile screen</Text>
    </View>
  );
}
function Settings() {
  return (
    <View>
      <Text>Settings screen</Text>
    </View>
  );
}
function Home() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: true }}>
      <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon: () => <Text>A</Text> }} />
      <Tab.Screen name="Settings" component={Settings} options={{ tabBarIcon: () => <Text>B</Text> }} />
      <Tab.Screen name="Settings2" component={Settings} options={{ tabBarIcon: () => <Text>C</Text> }} />
      <Tab.Screen name="Settings3" component={Settings} options={{ tabBarIcon: () => <Text>D</Text> }} />
    </Tab.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        {/* <Stack.Screen
          name="Home"
          component={HomeComponent}
          options={{ title: 'Overview' }}
        /> */}
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name="Details"
          options={{
            title: 'details screen',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30,
              fontFamily: 'sans-serif-light'
            },
            headerTitleAlign: 'center'
          }}
          component={DetailsComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
