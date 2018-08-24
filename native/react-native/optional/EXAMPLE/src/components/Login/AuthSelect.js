import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet, Text, View,
  Image, ImageBackground, TouchableOpacity
} from 'react-native';
import LoginButton from './LoginButton';
import { setLoginType } from '../../redux/actions';
import Seperator from './Seperator';

const bg = require('../../assets/backgrounds/Login.png');
const logo = require('../../assets/logos/SU-logo.png');
const twitter = require('../../assets/logos/twitter-logo.png');
const google = require('../../assets/logos/google-plus-logo.png');

const styles = StyleSheet.create({
  container: {
    flex: 13,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  logoContainer: {
    width: '100%',
    height: '45%',
  },
  logo: {
    display: 'flex',
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: '55%'
  },
  seperatorContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '5%',
    width: '100%',
    borderColor: 'red',
    borderWidth: 2
  },
  guestContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  guestText: {
    color: '#FFF',
    fontFamily: 'firaSans',
    fontSize: 20
  }
});

const mapStateToProps = state => ({
  isEnglish: state.userState.isEnglish
});

const mapActionsToProps = dispatch => ({
  // we use this type to do dynamic rendering in LoginInput.js
  setLoginType(type) {
    return dispatch(setLoginType(type));
  }
});

class AuthSelect extends Component {
  handleClick(type) {
    const { navigation, setLoginType } = this.props;
    setLoginType(type);
    navigation.navigate('Input');
  }

  render() {
    const { isEnglish, navigation} = this.props;
    return (
      <ImageBackground source={bg} style={{ width: '100%', height: '100%' }}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              source={logo}
              style={styles.logo}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <LoginButton
              onPress={() => this.handleClick('CREATE')}
              text={isEnglish ? 'CREATE ACCOUNT' : 'CREAR UNA CUENTA'}
              height="15%"
              width="98%"
              fontSize={20}
            />
            <LoginButton
              onPress={() => this.handleClick('EMAIL')}
              text={isEnglish ? 'LOGIN WITH EMAIL' : 'ENTRAR CON EMAIL'}
              height="15%"
              width="98%"
              fontSize={20}
            />
            <Seperator text={isEnglish ? 'OR' : 'O'} />
            <LoginButton
              onPress={() => this.handleClick('GOOGLE')}
              text={isEnglish ? 'LOGIN WITH GOOGLE' : 'ENTRAR CON GOOGLE'}
              height="15%"
              width="98%"
              fontSize={20}
              backgroundColor="#CC5541"
              icon={google}
            />
            <LoginButton
              onPress={() => this.handleClick('TWITTER')}
              text={isEnglish ? 'LOGIN WITH TWITTER' : 'ENTRAR CON TWITTER'}
              height="15%"
              width="98%"
              fontSize={20}
              backgroundColor="#4BA0EC"
              icon={twitter}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('App')}
          style={styles.guestContainer}
        >
          <Text style={styles.guestText}>
            {isEnglish ? 'ENTER AS GUEST' : 'INGRESAR COMO INVITADO'}
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

export default connect(mapStateToProps, mapActionsToProps)(AuthSelect);
