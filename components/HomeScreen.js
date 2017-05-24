'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

class HomeScreen extends Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>This is the Home Screen</Text>
        <Button
          title='Go Back'
          onPress={ () => this.props.navigation.goBack() }
        />
      </View>
    );
  }
}

HomeScreen.navigationOptions = props => {
  const { navigation } = props;
  return {
    headerTitle: 'Home',
    headerLeft: (<Button title='Drawer' onPress={ () => navigation.navigate('Next') }/>),
    headerRight: (<Button title='NextCard' onPress={ () => navigation.navigate('Next') }/>)
  }
};

export default HomeScreen;
