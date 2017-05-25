'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import GreenScreen from './components/GreenScreen.js';
import RedScreen from './components/RedScreen.js';
import PurpleScreen from './components/PurpleScreen.js';
import YellowScreen from './components/YellowScreen.js';
import BlueScreen from './components/BlueScreen.js';

class ReactNav extends Component {
  render() {
    return (
      <RootNavigator/>
    );
  }
}

const Stack = {
  Red: { screen: RedScreen },
  Blue: { screen: BlueScreen },
  Yellow: { screen: YellowScreen },
  Purple: { screen: PurpleScreen }
};

const DrawerRoutes = {
	Red: {
		name: 'Red',
		screen: StackNavigator(Stack, { initialRouteName: 'Red' })
	},
	Blue: {
		name: 'Blue',
		screen: StackNavigator(Stack, { initialRouteName: 'Blue' })
	},
	Yellow: {
		name: 'Yellow',
		screen: StackNavigator(Stack, { initialRouteName: 'Yellow' })
	},
};

const RootNavigator =
	StackNavigator({
    Stack: {
      name: 'Green', screen: GreenScreen
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
