import React, { Component } from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import PropTypes from 'prop-types';
import { connectActionSheet } from '@expo/react-native-action-sheet';

// Delete this comment when using this code in project
// ---------------------------------------------------
// This component is passed a phone number string, along with a few styling properties.
// It returns text that when pressed, opens an action sheet giving the user an option to either call or text that number
// This requires use of the package "@expo/react-native-action-sheet".

const styles = StyleSheet.create({
  phoneText: {
      // If you have a desired font loaded, place it here as the "fontFamily" property.
  }
});

class PhoneNumber extends Component {

  _onOpenActionSheet = (phoneNo) => {
    // Same interface as https://facebook.github.io/react-native/docs/actionsheetios.html
    const options = [`Call:  ${phoneNo}`, `Text:  ${phoneNo}`, 'Cancel'];
    const cancelButtonIndex = 2;

    this.props.showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
      },
      buttonIndex => {
        // Do something here depending on the button index selected
        if (buttonIndex === 0) Linking.openURL(`tel:${phoneNo}`);
        if (buttonIndex === 1) Linking.openURL(`sms:${phoneNo}`);
      },
    );
  };

  render() {
    const { phoneNo, disallowFontScaling } = this.props;
    const { fontSize, color, lineHeight } = this.props;

    return (
      <View>
        <Text allowFontScaling={!disallowFontScaling} style={[styles.phoneText, { fontSize, color, lineHeight }]} onPress={() => this._onOpenActionSheet(phoneNo)}>{phoneNo}</Text>
      </View>
    );
    
  }
}

PhoneNumber.defaultProps = {
  fontSize: 12,
  color: '#333333',
  lineHeight: 14,
  phoneNo: '',
  disallowFontScaling: false,
}

PhoneNumber.propTypes = {
  fontSize: PropTypes.number,
  color: PropTypes.string,
  lineHeight: PropTypes.number,
  phoneNo: PropTypes.string,
  disallowFontScaling: PropTypes.bool,
}

const ConnectedPhone = connectActionSheet(PhoneNumber);

export default ConnectedPhone;
