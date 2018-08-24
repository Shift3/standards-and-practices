import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

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


export default (props) => {
  const { height, width, onPress, fontSize, text, icon } = props;
  let { backgroundColor } = props;
  if (!backgroundColor) backgroundColor = '#334B80';
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
