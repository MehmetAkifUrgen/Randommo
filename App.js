import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
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
      deger: null,
      exe: '',
      visible: false,
      datas: ['A', 'B', 'C'],
    };
    this.child = null;
  }
  componentWillUnmount() {
    this.setState({deger: null});
  }

  buttonPress = () => {
    this.setState({
      started: true,
    });
    this.child._onPress();
  };
  onPressOut = () => {
    this.setState({visible: true});
    console.log(this.state.visible);

    this.inputs;
  };
  inputs = () => {
    var values = [];
    for (let index = 0; index < this.state.deger; index++) {
      return (
        <TextInput
          style={styles.input}
          onChangeText={value => this.setState({exe: value})}
          value={this.state.exe}
          placeholder="How many people ?"
        />
      );
    }
    this.setState({datas: values});
    console.log(this.state.datas.length);
  };

  render() {
    console.log(this.state.deger);
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
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <StatusBar barStyle={'light-content'} />
        <View style={styles.header}>
          <Text style={styles.headText}>Wheel of Fortune</Text>
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            onChangeText={value => this.setState({deger: value})}
            value={this.state.deger}
            placeholder="How many people ?"
            keyboardType="numeric"
            onPressOut={this.onPressOut}
          />
          {this.state.deger > 1 ? this.inputs() : null}
        </View>

        {/* <View style={styles.teker}>
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
        </View> */}
      </KeyboardAvoidingView>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#ffffff',
  },
  teker: {
    flex: 8,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputView: {
    marginTop: 30,
    flex: 10,
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
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 200,
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
