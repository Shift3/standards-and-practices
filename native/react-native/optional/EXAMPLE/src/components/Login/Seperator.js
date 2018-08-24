import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  seperatorContainer: {
    display: 'flex',
    height: '10%',
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  seperatorSide: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '45%'
  },
  seperatorLine: {
    display: 'flex',
    height: '50%',
    width: '90%',
    borderBottomColor: '#334B80',
    borderBottomWidth: 0.4
  },
  textContainer: {
    display: 'flex',
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'firaSans',
    color: '#334B80',
    fontSize: 16
  }
});


export default props => (
  <View style={styles.seperatorContainer}>
    <View style={styles.seperatorSide}>
      <View style={styles.seperatorLine} />
    </View>
    <View style={styles.textContainer}>
      <Text style={[styles.text]}>
        {props.text}
      </Text>
    </View>
    <View style={styles.seperatorSide}>
      <View style={styles.seperatorLine} />
    </View>
  </View>
);
