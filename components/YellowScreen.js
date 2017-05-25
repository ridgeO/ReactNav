'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

class YellowScreen extends Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow'}}>
        <Text style={{fontSize: 20}}>This is the Yellow Screen</Text>
      </View>
    );
  }
}

YellowScreen.navigationOptions = {
  title: 'Yellow'
};

export default YellowScreen;
