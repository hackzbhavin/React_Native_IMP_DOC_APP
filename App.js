import React,{useState} from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';



import FirstScreen from './screens/Splash'
import LoginScreen from './screens/Login'
import DashboardScreen from './screens/Dashboard'
import DocumentsScreen from './screens/Documents'
import CameraScreen from './screens/Camera'

const Stack = createStackNavigator();




const App = () => {

  const config = {
    animation: 'timing',
    config: {
      stiffness: 2000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };


  return( 
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
        name='Home'
        component={FirstScreen}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
        },{headerShown: false}   } 
        />
                <Stack.Screen
        name='Dashboard'
        component={DashboardScreen}

        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
        },{headerShown: false}   } 
    
        />
                        <Stack.Screen
        name='Documents'
        component={DocumentsScreen}

        options={{headerShown: false}}
    
        />

<Stack.Screen
        name='Camera'
        component={CameraScreen}

        // options={{headerShown: false}}
    
        />
      </Stack.Navigator>
    </NavigationContainer>

  
  )
};

export default App;
