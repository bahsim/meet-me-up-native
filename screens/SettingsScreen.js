import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import GestureRecognizer from 'react-native-swipe-gestures';

const SettingsScreen = ({ navigation }) => (
  <GestureRecognizer
    onSwipeRight={() => navigation.navigate('Search')}
    config={{
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    }}
    style={{flex: 1}}
  >
    {/**
    * Go ahead and delete ExpoConfigView and replace it with your content;
    * we just wanted to give you a quick view of your config.
    */}
    <ExpoConfigView />
  </GestureRecognizer>
)

SettingsScreen.navigationOptions = {
  title: 'app.json',
};

export default SettingsScreen