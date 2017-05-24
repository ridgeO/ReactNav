'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import LoginScreen from './components/LoginScreen.js';
import HomeScreen from './components/HomeScreen.js';
import NextCard from './components/NextCard.js';
import Settings from './components/Settings.js';
import Profile from './components/Profile.js';

class ReactNav extends Component {
  render() {
    return (
      <RootNavigator/>
    );
  }
}

const Stack = {
  Home: { screen: HomeScreen },
  Profile: { screen: Profile },
  Settings: { screen: Settings },
  Next: { screen: NextCard }
};

const DrawerRoutes = {
	Home: {
		name: 'Home',
		screen: StackNavigator(Stack, { initialRouteName: 'Home' })
	},
	Profile: {
		name: 'Profile',
		screen: StackNavigator(Stack, { initialRouteName: 'Profile' })
	},
	Settings: {
		name: 'Settings',
		screen: StackNavigator(Stack, { initialRouteName: 'Settings' })
	},
};

const RootNavigator =
	StackNavigator({
    Stack: {
      name: 'Login', screen: LoginScreen
    },
		Drawer: {
			name: 'Drawer',
			screen: DrawerNavigator(
				DrawerRoutes,
			),
		}
	},
		{
			headerMode: 'none'
		}
	);

AppRegistry.registerComponent('ReactNav', () => RootNavigator);
