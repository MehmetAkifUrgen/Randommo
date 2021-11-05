import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import WheelOfFortune from 'react-native-wheel-of-fortune';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winnerValue: null,
      winnerIndex: null,
      started: false,
      value: null,
      exe: '',
      visible: false,
      datas: ['A', 'B', 'C'],
    };
    this.child = null;
  }

  buttonPress = () => {
    this.setState({
      started: true,
    });
    this.child._onPress();
  };
  onPressOut = () => {
    this.setState({visible: true});
  };
  inputs = () => {
    var values = [];
    for (let index = 0; index < this.state.value; index++) {
      return (
        <ScrollView>
          <TextInput
            style={styles.input}
            onChangeText={value => this.setState({exe: value})}
            value={this.state.exe}
            placeholder="How many people ?"
          />
        </ScrollView>
      );
    }
    this.setState({datas: values});
  };

  render() {
    const wheelOptions = {
      rewards: this.state.datas,
      knobSize: 30,
      borderWidth: 5,
      borderColor: '#fff',
      innerRadius: 30,
      duration: 6000,
      backgroundColor: 'transparent',
      textAngle: 'horizontal',
      knobSource: require('./assets/images/knob.png'),
      onRef: ref => (this.child = ref),
    };
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <View style={styles.header}>
          <Text style={styles.headText}>Wheel of Fortune</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            onChangeText={value => this.setState({value: value})}
            value={this.state.value}
            placeholder="How many people ?"
            keyboardType="numeric"
            onPressOut={this.onPressOut}
          />
        </View>

        <WheelOfFortune
          options={wheelOptions}
          getWinner={(value, index) => {
            this.setState({winnerValue: value, winnerIndex: index});
          }}
        />
        {!this.state.started && (
          <View style={styles.startButtonView}>
            <TouchableOpacity
              onPress={() => this.buttonPress()}
              style={styles.startButton}>
              <Text style={styles.startButtonText}>Spin to win!</Text>
            </TouchableOpacity>
          </View>
        )}
        {this.state.winnerIndex != null && (
          <View style={styles.winnerView}>
            <Text style={styles.winnerText}>
              You win {this.state.datas[this.state.winnerIndex]}
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.setState({winnerIndex: null});
                this.child._tryAgain();
              }}
              style={styles.tryAgainButton}>
              <Text style={styles.tryAgainText}>TRY AGAIN</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#ffffff',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  headText: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  startButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: 'rgba(0,0,0,.5)',
    marginTop: 50,
    padding: 5,
  },
  startButtonText: {
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
  },
  winnerView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tryAgainButton: {
    padding: 10,
  },
  winnerText: {
    fontSize: 30,
  },
  tryAgainButton: {
    padding: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  tryAgainText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
