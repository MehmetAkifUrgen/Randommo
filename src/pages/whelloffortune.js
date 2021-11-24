import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Text,
  Dimensions,
  KeyboardAvoidingView,
  Animated,
  Easing,
} from 'react-native';

import WheelOfFortune from 'react-native-wheel-of-fortune';
import colors from '../colors';
import MyButton from '../components/MyButton';

class App extends Component {
  constructor(props) {
    super(props);
    navigation = this.props.navigation;
    this.state = {
      winnerValue: null,
      winnerIndex: null,
      started: false,
      deger: '',
      exe: '',
      visible: false,
      datas: [],
      fadeAnim: new Animated.Value(0),
    };

    this.child = null;
  }
  componentDidMount() {
    this.fadeIn();
  }
  componentWillUnmount() {
    this.setState({deger: ''});
    this.fadeIn();
  }

  fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.loop(
      Animated.timing(this.state.fadeAnim, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  };

  buttonPress = () => {
    this.setState({
      started: true,
    });
    this.child._onPress();
  };
  veriler = () => {
    var wheelOptions = {
      rewards: this.state.deger.split(' '),
      knobSize: 30,
      borderWidth: 5,
      borderColor: '#fff',
      innerRadius: 30,
      duration: 6000,
      backgroundColor: 'transparent',
      textAngle: 'horizontal',
      knobSource: require('../../assets/images/knob.png'),
      onRef: ref => (this.child = ref),
    };
    return wheelOptions;
  };
  wheel = () => {
    return (
      <KeyboardAvoidingView
        behavior="height"
        enabled={false}
        style={styles.teker}>
        <WheelOfFortune
          options={this.veriler()}
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
      </KeyboardAvoidingView>
    );
  };
  done = () => {
    this.setState({
      visible: true,
      datas: this.state.deger.split(' '),
    });
  };

  render() {
    console.log('deger:', this.state.datas);
    const spin = this.state.fadeAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <KeyboardAvoidingView
        behavior="height"
        enabled={false}
        style={styles.container}>
        <StatusBar barStyle={'light-content'} />

        <KeyboardAvoidingView
          behavior="height"
          enabled={false}
          style={styles.inputView}>
          <TextInput
            multiline={true}
            style={styles.input}
            onChangeText={value => this.setState({deger: value})}
            value={this.state.deger}
            placeholder="Enter the racer.."
            placeholderTextColor={colors.open}
            onPressIn={() => {
              this.setState({
                visible: false,
                datas: this.state.deger.split(' '),
              });
            }}
          />
          <MyButton text="Done" onPress={this.done} />
        </KeyboardAvoidingView>

        {this.state.visible ? (
          this.wheel()
        ) : (
          <Animated.Image
            source={require('../../assets/images/whell.png')}
            style={[styles.image, {transform: [{rotate: spin}]}]}
          />
        )}
        <View style={styles.bottom}>
          <MyButton text="Next" onPress={() => navigation.navigate('Dice')} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
  teker: {
    flex: 8,

    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    color: colors.open,
    borderColor: colors.open,
    width: Dimensions.get('window').width * 0.9,
  },
  inputView: {
    marginTop: 30,
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  startButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: colors.main_light,
    marginTop: 50,
    padding: 5,
    borderRadius: 10,
  },
  startButtonText: {
    fontSize: 25,
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
  image: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height / 2,
    alignSelf: 'center',
    marginTop: 100,
  },
  button: {
    alignSelf: 'center',
    borderRadius: 10,
  },
});
