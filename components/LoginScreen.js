'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

class LoginScreen extends Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>This is the Login Screen</Text>
        <Button
          title='Login'
          onPress={ () => this.props.navigation.navigate('Home') }
        />
      </View>
    );
  }
}

LoginScreen.navigationOptions = {
  title: 'Login',
  header: null
}

export default LoginScreen;
