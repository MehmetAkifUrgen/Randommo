// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dice from './pages/dice';
import Roulette from './pages/roullette';
import WhellofFortune from './pages/whelloffortune';
import colors from './colors';
import Main from './pages/main';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Main"
          component={Main}
        />
        <Stack.Screen
          options={{
            headerTitle: 'WhellofFortune',

            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
              color: colors.open,
            },
            headerStyle: {
              backgroundColor: colors.main_light,
            },
            animation: 'fade',
            animationTypeForReplace: 'pop',
            headerTintColor: colors.open,
          }}
          name="WheelofFortune"
          component={WhellofFortune}
        />
        <Stack.Screen
          options={{
            headerTitle: 'Dice',

            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
              color: colors.open,
            },
            headerStyle: {
              backgroundColor: colors.main_light,
            },
            animation: 'fade',
            animationTypeForReplace: 'pop',
            headerTintColor: colors.open,
          }}
          name="Dice"
          component={Dice}
        />
        <Stack.Screen
          options={{
            headerTitle: 'Roulette',

            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
              color: colors.open,
            },
            headerStyle: {
              backgroundColor: colors.main_light,
            },
            animation: 'fade',
            animationTypeForReplace: 'pop',
            headerTintColor: colors.open,
          }}
          name="Roulette"
          component={Roulette}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
