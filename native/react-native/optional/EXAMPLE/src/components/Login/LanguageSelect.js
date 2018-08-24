import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet, Text, View,
  Image, ImageBackground
} from 'react-native';
import LoginButton from './LoginButton';
import { setEnglish } from '../../redux/actions';

const bg = require('../../assets/backgrounds/Login.png');
const logo = require('../../assets/logos/splash-logo.png');

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  languageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginLeft: 40,
    maxHeight: '60%',
    resizeMode: 'contain',
    width: '80%'
  },
  logoContainer: {
    flex: 1,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%'
  },
  buttonStyles: {
    color: 'black',
    backgroundColor: 'red',
  },
  copyrightContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  copyrightText: {
    color: '#FFF',
    fontFamily: 'firaSansLight',
    fontSize: 11
  }
});

const mapStateToProps = state => ({
  isEnglish: state.userState.isEnglish
});

const mapActionsToProps = dispatch => ({
  setEnglish(bool) {
    return dispatch(setEnglish(bool));
  }
});

class LanguageSelect extends Component {
  constructor(props) {
    super(props);
    const { isEnglish, navigation } = this.props;
    if (isEnglish !== null) navigation.navigate('Auth');
    // TODO check if logged in, and if so nav to Home in appstack
  }

  handleClick(bool) {
    const { navigation, setEnglish } = this.props;
    setEnglish(bool);
    navigation.navigate('Auth');
  }

  render() {
    return (
      <ImageBackground source={bg} style={{ width: '100%', height: '100%' }}>
        <View style={styles.languageContainer}>
          <Image
            source={logo}
            style={styles.logo}
          />
          <View style={styles.buttonsContainer}>
            <LoginButton
              onPress={() => this.handleClick(true)}
              text="ENGLISH"
              height="35%"
              width="47%"
              fontSize={20}
            />
            <LoginButton
              onPress={() => this.handleClick(false)}
              text="ESPAÑOL"
              height="35%"
              width="47%"
              fontSize={20}
            />
          </View>
        </View>
        <View style={styles.copyrightContainer}>
          <Text style={styles.copyrightText}>
            © 2018 Copyright Secrets Unsealed
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

export default connect(mapStateToProps, mapActionsToProps)(LanguageSelect);
