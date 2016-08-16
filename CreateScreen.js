import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class CreateScreen extends React.Component {

  constructor(props) {
   super(props);
   this.state = {isHelpExpanded: false};
  }
  onHelpPress = () => {
    this.setState({isHelpExpanded: !this.state.isHelpExpanded});
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this._onHelpPress}>
          <Text>See Help</Text>
        </TouchableOpacity>
        {this.state.isHelpExpanded &&
        <View>
          <Text>This is some help text</Text>
        </View>}
      </View>
    );
  }
}
