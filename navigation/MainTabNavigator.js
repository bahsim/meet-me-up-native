import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import MessagesScreen from '../screens/MessagesScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const MessagesStack = createStackNavigator(
  {
    Messages: MessagesScreen,
  },
  config
);

MessagesStack.navigationOptions = {
  tabBarLabel: 'Сообщения',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS !== 'ios' ? 'ios-chatboxes' : 'md-chatboxes'}/>
  ),
};

MessagesStack.path = '';

const SearchStack = createStackNavigator(
  {
    Search: SearchScreen,
  },
  config
);

SearchStack.navigationOptions = {
  tabBarLabel: 'Поиск',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS !== 'ios' ? 'ios-search' : 'md-search'} />
  ),
};

SearchStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Профиль',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS !== 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  MessagesStack,
  SearchStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
