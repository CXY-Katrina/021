import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import 'react-native-gesture-handler'


import home from './screens/home';
import readletter from './screens/readletter';
import writeletter from './screens/writeletter';
import select from './screens/select';
import login from './screens/login';
import read from './screens/read';
import to from './screens/to';
import subject from './screens/subject';
import content from './screens/content';
import letter from './screens/letter';

const WriteStack = createStackNavigator(
  {
    To: to,
    Subject: subject,
    Content: content,
    Letter: letter,
  },
  {
    headerMode: "none"
  }
);

const ReadStack = createStackNavigator(
  {
    ReadLetter: readletter,
    Login: login,
    Read: read
  },
  {
    headerMode: "none",
  }
);

const AppNavigator = createStackNavigator(
  {
    Home: home,
    WriteStack,
    ReadStack,
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);