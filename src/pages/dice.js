import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Easing,
  Animated,
  TouchableOpacity,
} from 'react-native';
import colors from '../colors';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      uri: require('../images/dice1.png'),
      uri2: require('../images/dice1.png'),
      randomNumber: 1,
      randomNumber2: 1,
      fadeAnim: new Animated.Value(0),

      visible: false,
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
  fadeIn = () => {
    Animated.spring(this.state.fadeAnim, {
      toValue: 1,
      duration: 200,
      easing: Easing.cubic,
      useNativeDriver: true,
    }).start(({finished}) => {
      if (finished) {
        this.setState({
          fadeAnim: new Animated.Value(0),
        });
      }
    });
  };

  setDiceImage = () => {
    var randNum = this.getRandomNumber();
    switch (randNum) {
      case 1:
        this.setState({
          uri: require('../images/dice1.png'),
        });
        break;

      case 2:
        this.setState({
          uri: require('../images/dice2.png'),
        });
        break;

      case 3:
        this.setState({
          uri: require('../images/dice3.png'),
        });
        break;

      case 4:
        this.setState({
          uri: require('../images/dice4.png'),
        });
        break;

      case 5:
        this.setState({
          uri: require('../images/dice5.png'),
        });
        break;

      case 6:
        this.setState({
          uri: require('../images/dice6.png'),
        });
        break;

      default:
    }
  };
  set2DiceImage = () => {
    var randNum = this.getRandomNumber2();
    switch (randNum) {
      case 1:
        this.setState({
          uri2: require('../images/dice1.png'),
        });
        break;

      case 2:
        this.setState({
          uri2: require('../images/dice2.png'),
        });
        break;

      case 3:
        this.setState({
          uri2: require('../images/dice3.png'),
        });
        break;

      case 4:
        this.setState({
          uri2: require('../images/dice4.png'),
        });
        break;

      case 5:
        this.setState({
          uri2: require('../images/dice5.png'),
        });
        break;

      case 6:
        this.setState({
          uri2: require('../images/dice6.png'),
        });
        break;

      default:
    }
  };

  diceButtonPressed = () => {
    //  this.diceHistory();
    this.fadeIn();
    this.setDiceImage();
    this.set2DiceImage();
  };

  render() {
    const spin = this.state.fadeAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <View style={styles.container}>
        <Text style={styles.diceText}>
          You Rolled a {this.state.randomNumber} - {this.state.randomNumber2}
        </Text>

        <View style={styles.body}>
          <Animated.Image
            style={[styles.image, {transform: [{rotateX: spin}]}]}
            source={this.state.uri}
          />
          <Animated.Image
            style={[styles.image, {transform: [{rotateY: spin}]}]}
            source={this.state.uri2}
          />
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.buton}
            onPress={() => navigation.navigate('Roulette')}>
            <Text style={styles.diceText}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buton}
            onPress={this.diceButtonPressed}>
            <Text style={styles.diceText}>Roll</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
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
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.open,
    marginTop: 50,
  },
  historyText: {
    color: '#CCCCCC',
    marginTop: 30,
    fontSize: 14,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.main_light,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});
