'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

class Profile extends Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue'}}>
        <Text style={{fontSize: 20, color: 'white'}}>This is the Profile Screen</Text>
      </View>
    );
  }
}

Profile.navigationOptions = {
  title: 'Profile'
};

export default Profile;
