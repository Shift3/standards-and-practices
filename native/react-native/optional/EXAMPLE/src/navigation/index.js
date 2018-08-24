import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { LanguageSelect, AuthSelect, LoginInput, NoteView } from '../components';

const LoginStack = createStackNavigator({
  LanguageSelect: {
    screen: LanguageSelect,
  },
  Auth: {
    screen: AuthSelect
  },
  Input: {
    screen: LoginInput
  }
}, {
  initialRouteName: 'LanguageSelect',
  headerMode: 'none'
});

const AppStack = createStackNavigator({
  Home: {
    screen: AuthSelect,
  },
  Newsletter: {
    screen: AuthSelect,
  },
  Notes: {
    screen: NoteView
  }
}, {
  initialRouteName: 'Notes',
  headerMode: 'none'
});

const RootStack = createStackNavigator({
  // TODO: add app stack. potentially break app stack into sub stacks.
  // ex: study notes stack, etc
  Login: { screen: LoginStack },
  App: { screen: AppStack }
}, {
  headerMode: 'none',
  initialRouteName: 'Login'
});


export default RootStack;
