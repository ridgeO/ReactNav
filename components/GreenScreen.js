'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';

class GreenScreen extends Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'}}>
        <Text style={{fontSize: 20, color: 'white'}}>This is the Green Screen</Text>
        <TouchableHighlight
          onPress={ () => this.props.navigation.navigate('Red') }
          style={{backgroundColor: 'white', padding: 20, marginTop: 20, borderRadius: 9}}
          underlayColor='white'
        >
          <Text style={{fontSize: 20}}>Go to Red</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

GreenScreen.navigationOptions = {
  title: 'Login',
  header: null
}

export default GreenScreen;
