import React from 'react';
import {
  AppRegistry,
  View,
  Button,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class NextScreen extends React.Component {
  static navigationOptions = {
    title: 'Next',
  };
  render() {
    return (
      <View>
        <Text>This is the NextScreen</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Navigation!</Text>
        <Button
          onPress={() => navigate('Next')}
          title="Next Screen"
        />
      </View>
    );
  }
}

const ReactNav = StackNavigator({
  Home: { screen: HomeScreen },
  Next: { screen: NextScreen }
});

AppRegistry.registerComponent('ReactNav', () => ReactNav);
