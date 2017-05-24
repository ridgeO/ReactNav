'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

class Settings extends Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow'}}>
        <Text style={{fontSize: 20}}>This is the Settings Screen</Text>
      </View>
    );
  }
}

Settings.navigationOptions = {
  title: 'Settings'
};

export default Settings;
