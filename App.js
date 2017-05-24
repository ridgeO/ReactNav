import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return <Text>Hello, Navigation!</Text>;
  }
}

const ReactNav = StackNavigator({
  Home: { screen: HomeScreen },
});

AppRegistry.registerComponent('ReactNav', () => ReactNav);
