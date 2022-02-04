import React from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const DetailsComponent = (props: any) => {
  const isDarkMode = useColorScheme() === 'dark';

  const onCLick = () => {
    console.log('clicked...');
    props?.navigation?.navigate('Home');
  };
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
    paddingTop: 20,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={true ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Text>Details page</Text>
        <Button title="Go to Home" onPress={onCLick}></Button>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  image: {
    height: 200,
    width: 400,
    flex: 1,
  },
});
