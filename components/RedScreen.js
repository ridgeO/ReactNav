'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

class RedScreen extends Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red'}}>
        <Text style={{color: 'white', fontSize: 20}}>This is the Red Screen</Text>
      </View>
    );
  }
}

RedScreen.navigationOptions = props => {
  const { navigation } = props;
  return {
    headerTitle: 'Red',
    headerLeft: (<Button title='Drawer' onPress={ () => navigation.navigate('DrawerOpen') }/>),
    headerRight: (<Button title='Purple' onPress={ () => navigation.navigate('Purple') }/>)
  }
};

export default RedScreen;
