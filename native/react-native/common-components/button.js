import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 5,
    marginBottom: 5
  },
  text: {
    color: '#FFF',
    fontFamily: 'oswald'
  },
  icon: {
    position: 'absolute',
    right: '85%'
  }
});


 const Button = props => {
  const { onPress, text, icon } = props;
  let { backgroundColor, fontSize, width, height } = props;
  if (!backgroundColor) backgroundColor = '#334B80';
  if (!width) width = '80%';
  if (!height) height = '8%';
  if (!fontSize) fontSize = 20;
  return (
    <TouchableOpacity
      style={[styles.button, { height, width, backgroundColor }]}
      onPress={onPress}
    >
      {icon ? <Image style={styles.icon} source={icon} /> : null}
      <Text style={[styles.text, { fontSize }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string,
  icon: PropTypes.object,
  backgroundColor: PropTypes.string,
  fontSize: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

export default Button