import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class Button extends Component {
  static propTypes = {
    text: React.PropTypes.string,
  };
  // TODO props
  render() {
    return (
      <TouchableOpacity style={styles.button}>
        <Text>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'gray',
    padding: 10,
  }
});
