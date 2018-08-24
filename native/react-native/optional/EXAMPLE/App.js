import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { AppLoading, Font, Asset } from 'expo';
import reducers from './src/redux/reducers';
import RootStack from './src/navigation';

const firaSans = require('./src/assets/fonts/FiraSans-Regular.ttf');
const firaSansLight = require('./src/assets/fonts/FiraSans-Light.ttf');
const oswald = require('./src/assets/fonts/Oswald-Regular.ttf');
const oswaldLight = require('./src/assets/fonts/Oswald-Light.ttf');

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
