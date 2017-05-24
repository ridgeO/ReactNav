'use strict';
import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import LoginScreen from './components/LoginScreen.js';
import HomeScreen from './components/HomeScreen.js';
import NextCard from './components/NextCard.js';

const ReactNav = StackNavigator(
  {
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen },
    Next: { screen: NextCard }
  }
);

AppRegistry.registerComponent('ReactNav', () => ReactNav);
