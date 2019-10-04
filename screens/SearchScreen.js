import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import GestureRecognizer from 'react-native-swipe-gestures';

const SearchSreen = ({ navigation }) => (
  <GestureRecognizer
    onSwipeRight={() => navigation.navigate('Messages')}
    onSwipeLeft={() => navigation.navigate('Settings')}
    config={{
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    }}
    style={{flex: 1}}
  >
    <ScrollView style={styles.container}>
      {/**
      * Go ahead and delete ExpoLinksView and replace it with your content;
      * we just wanted to provide you with some helpful links.
      */}
      <ExpoLinksView />
    </ScrollView>
  </GestureRecognizer>
);

SearchSreen.navigationOptions = {
  title: 'Поиск',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

export default SearchSreen