import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';


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
    // WriteLetter: writeletter,
    // Select: select,
  },
  {
    headerMode: "none"
  }
);

// const WriteSwitch = createAnimatedSwitchNavigator(
//   {
//     To: to,
//     Subject: subject,
//     Content: content,
//     Letter: letter,
//   },
//   {
//     // The previous screen will slide to the bottom while the next screen will fade in
//     transition: (
//       <Transition.Together>
        
//       {/* <Transition.Change interpolation="easeOutIn" /> */}
//         <Transition.In 
//         type="slide-right" 
//         durationMs={400}
//         interpolation="easeOut"
//          />
//         <Transition.Out
//         // delayMs={100}
//           type="fade"
//           durationMs={300}
//           // interpolation="easeIn"
//         />

//       </Transition.Together>
//     ),
//     transitionViewStyle: { backgroundColor: '#0B345C' },
//   }
// );

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
    // WriteSwitch,
    ReadStack,
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);