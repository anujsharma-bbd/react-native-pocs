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
  RefreshControl,
  TouchableOpacity
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export const HomeComponent = (props: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const onCLick = () => {
    debugger
    console.log('clicked...');
    props?.navigation?.navigate('Details');
  };
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
    paddingTop: 20,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={'blue'} colors={['blue']} progressBackgroundColor={'red'} />}
      >
        <Text>
          <Text>this is anuj's first app</Text>
        </Text>
        <Button title="Go to Details" onPress={onCLick}></Button>
        <TouchableOpacity onPress={onCLick} style={{ padding: 10, backgroundColor: '#ddd' }} ><Text>Touch Me</Text></TouchableOpacity>
        <Image
          style={styles.image}
          source={{
            uri: 'https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
          }}></Image>
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
    marginTop: 10,
  },
});
