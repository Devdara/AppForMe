import React, { Component } from 'react';
import { View,Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {

  componentDidMount(){
    SplashScreen.hide();
  }

  render(){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>View Text Test</Text>
      </View>
    )
  }
}