'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

class PurpleScreen extends Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'purple'}}>
        <Text style={{fontSize: 20, color: 'white'}}>This is the Purple Screen</Text>
      </View>
    );
  }
}

PurpleScreen.navigationOptions = {
  title: 'Purple'
};

export default PurpleScreen;
