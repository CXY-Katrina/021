import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import home from './screens/home';
import readletter from './screens/readletter';
import writeletter from './screens/writeletter';
import select from './screens/select';
import login from './screens/login';

const AppNavigator = createStackNavigator(
  {
    Home: home,
    ReadLetter: readletter,
    WriteLetter: writeletter,
    Select: select,
    Login: login
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);