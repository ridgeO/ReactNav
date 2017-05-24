'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

class NextCard extends Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>This is the Next Card Screen</Text>
      </View>
    );
  }
}

NextCard.navigationOptions = {
  title: 'Next Card'
};

export default NextCard;
