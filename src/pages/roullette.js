import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Roulette from 'react-native-casino-roulette';
import wheel from '../../assets/images/wheel.png';
import marker from '../../assets/images/marker.png';
import colors from '../colors';

//Roulette numbers
const numbers = [
  0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24,
  16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26,
];
const options = numbers.map(o => ({index: o}));
const customOptions = numbers.map(o => <Text index={o}>{o}</Text>);
export default class App extends Component {
  constructor(props) {
    super(props);
    this.onRotate = this.onRotate.bind(this);
    this.onRotateChange = this.onRotateChange.bind(this);
    this.onRotateCustom = this.onRotateCustom.bind(this);
    this.onRotateCustomChange = this.onRotateCustomChange.bind(this);
    this.state = {
      option: 'Option selected:',
      optionCustom: 'Option selected:',
      rouletteState: 'stop',
      rouletteCustomState: 'stop',
    };
  }
  render() {
    const {option, rouletteState, optionCustom, rouletteCustomState} =
      this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>{`Option selected: ${option}`}</Text>
        <Text
          style={
            styles.instructions
          }>{`Roulette state: ${rouletteState}`}</Text>
        <Roulette
          duration={5000}
          enableUserRotate={rouletteState == 'stop'}
          background={wheel}
          onRotate={this.onRotate}
          onRotateChange={this.onRotateChange}
          marker={marker}
          options={options}
          markerWidth={30}></Roulette>

        <Text
          style={
            styles.instructions
          }>{`Roulette state: ${rouletteCustomState}`}</Text>
      </View>
    );
  }

  onRotateChange(state) {
    this.setState({
      rouletteState: state,
    });
  }

  onRotate(option) {
    this.setState({
      option: option.index,
    });
  }

  onRotateCustomChange(state) {
    this.setState({
      rouletteCustomState: state,
    });
  }

  onRotateCustom(option) {
    this.setState({
      optionCustom: option.props.index,
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.open,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: colors.font,
    marginBottom: 5,
  },
});
