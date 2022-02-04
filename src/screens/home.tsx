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

export const HomeComponent = (props: any) => {
  const isDarkMode = useColorScheme() === 'dark';

  const onCLick = () => {
    console.log('clicked...');
    props?.navigation?.navigate('Details');
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
        <Text>
          this is anuj's first app
          <Button title="Go to Details" onPress={onCLick}></Button>
          <Image
            style={styles.image}
            source={{
              uri: 'https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
            }}></Image>
        </Text>
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
