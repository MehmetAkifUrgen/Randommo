import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      uri: require('./images/dice1.png'),
      uri2: require('./images/dice1.png'),
      randomNumber: 1,
      randomNumber2: 1,
      // numHistory: [1,2,3,4,5,6]
    };
  }
  getRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    this.setState({
      randomNumber: randomNumber,
    });
    return randomNumber;
  };
  getRandomNumber2 = () => {
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    this.setState({
      randomNumber2: randomNumber,
    });
    return randomNumber;
  };

  // diceHistory = () => {
  //   var numHistory = numHistory.push(this.state.randomNumber);
  //   numHistory.toString();

  //   return numHistory;
  // }

  setDiceImage = () => {
    randNum = this.getRandomNumber();
    switch (randNum) {
      case 1:
        this.setState({
          uri: require('./images/dice1.png'),
        });
        break;

      case 2:
        this.setState({
          uri: require('./images/dice2.png'),
        });
        break;

      case 3:
        this.setState({
          uri: require('./images/dice3.png'),
        });
        break;

      case 4:
        this.setState({
          uri: require('./images/dice4.png'),
        });
        break;

      case 5:
        this.setState({
          uri: require('./images/dice5.png'),
        });
        break;

      case 6:
        this.setState({
          uri: require('./images/dice6.png'),
        });
        break;

      default:
    }
  };
  set2DiceImage = () => {
    randNum = this.getRandomNumber2();
    switch (randNum) {
      case 1:
        this.setState({
          uri2: require('./images/dice1.png'),
        });
        break;

      case 2:
        this.setState({
          uri2: require('./images/dice2.png'),
        });
        break;

      case 3:
        this.setState({
          uri2: require('./images/dice3.png'),
        });
        break;

      case 4:
        this.setState({
          uri2: require('./images/dice4.png'),
        });
        break;

      case 5:
        this.setState({
          uri2: require('./images/dice5.png'),
        });
        break;

      case 6:
        this.setState({
          uri2: require('./images/dice6.png'),
        });
        break;

      default:
    }
  };

  diceButtonPressed = () => {
    //  this.diceHistory();
    this.setDiceImage();
    this.set2DiceImage();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.diceText}>
          You Rolled a {this.state.randomNumber} - {this.state.randomNumber2}
        </Text>

        <Image
          style={{width: 200, height: 200, marginBottom: 10}}
          source={this.state.uri}
        />
        <Image style={{width: 200, height: 200}} source={this.state.uri2} />
        <TouchableOpacity onPress={this.diceButtonPressed}>
          <Text style={styles.rollButton}>Roll Dice</Text>
        </TouchableOpacity>
        <Text style={styles.historyText}>Roll History:</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rollButton: {
    marginTop: 50,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#3880FF',
    color: '#fff',
    borderRadius: 5,
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  diceText: {
    marginBottom: 40,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1A1F38',
  },
  historyText: {
    color: '#CCCCCC',
    marginTop: 30,
    fontSize: 14,
  },
});
