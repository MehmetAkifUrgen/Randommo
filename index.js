/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Dice from './src/dice';
import Coin from './src/coin';

AppRegistry.registerComponent(appName, () => Coin);
