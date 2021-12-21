import React from 'react';
import {View, StyleSheet, Image, ScrollView} from 'react-native';
import ImageBox from './components/Images';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../src/patikaflowers.png')}
        />
      </View>
      <View style={styles.body}>
        <ImageBox linkk="https://image.freepik.com/free-photo/top-view-roses-flowers_23-2148860033.jpg" />
        <ImageBox linkk="https://image.freepik.com/free-photo/purple-bouquet_1160-656.jpg" />
        <ImageBox linkk="https://image.freepik.com/free-photo/vase-with-roses-table-copy-space_23-2148860030.jpg" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e1e1',
  },
  header: {
    marginTop: 30,
    flex: 0.1,
    alignItems: 'center',
  },
  body: {
    flex: 0.8,
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    marginTop: 10,
    width: 110,
    height: 90,
    resizeMode: 'contain',
  },
});

export default App;
