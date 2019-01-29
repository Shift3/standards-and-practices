import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Input from './Input';

class CreditCardInput extends Component {
  state = {
    ccDisplay: '',
    ccValue: ''
  }

  handleTextChange(displayedNum) {
    this.setState((prevState) => {
      let newValue = '';
      if (displayedNum.length > prevState.ccDisplay.length) {
        newValue = this.removeLetters(prevState.ccValue.concat(displayedNum.charAt(displayedNum.length - 1)));
      } else if (displayedNum.length < prevState.ccDisplay.length) {
        newValue = this.removeLetters(prevState.ccValue.slice(0, prevState.ccValue.length - 1));
      }
      const newDisplay = this.hideDigits(this.removeLetters(newValue));
      return { ccValue: newValue, ccDisplay: newDisplay };
    }, () => {
      if (this.props.onValueChange) this.props.onValueChange(this.state.ccValue);
    });
  }

  removeLetters(input) {
    // TODO: The state switch from the initial user input to the parsed string
    // does not cause a re-render of the input component
    // this can be alleviated using a set-timeout, but thats not optimal.
    return input.replace(/[^0-9]/g, '');
  }

  hideDigits(string) {
    let newString = '';
    for (let i = 0; i < string.length; i += 1) {
      if (i < 12) {
        newString += '*';
      } else {
        newString += string.charAt(i);
      }
    } // end for
    return newString;
  }

  render() {
    return (
      <View>
        <Input
          title={'Credit Card Number'}
          value={this.state.ccDisplay}
          onChangeText={val => this.handleTextChange(val)}
        />
      </View>
    );
  }
}

export default CreditCardInput;

CreditCardInput.PropTypes = {
    //These will depend on what you pass into this component. Below is an example and should be replaced with whatever you're using
    name: PropTypes.string.required
};