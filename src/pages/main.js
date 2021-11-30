import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, Dimensions} from 'react-native';
import colors from '../colors';
import MyButton from '../components/MyButton';

const Main = ({navigation}) => {
  const [values, setValues] = useState('');
  const [many, setMany] = useState(1);
  const [array, setArray] = useState([]);
  const [temp, setTemp] = useState([]);
  const done = () => {
    var i,
      j,
      temporary,
      chunk = many;
    try {
      for (i = 0, j = array.length; i < j; i += chunk) {
        temporary = array.slice(i, i + chunk);
        setTemp(temp.push(temporary));
      }
    } catch (e) {
      alert(e.message);
    }
    console.log(temp[0]);
  };
  function print() {}
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <TextInput
          value={values}
          onChangeText={value => {
            setValues(value), setArray(values.split(' '));
          }}
          multiline={true}
          style={styles.textInput}
          placeholder="Enter"
        />
        <TextInput
          value={many}
          onChangeText={value => setMany(value)}
          placeholder="Enter"
          keyboardType="number-pad"
        />
        <MyButton text="Done" onPress={done} />
      </View>
      <View style={styles.bottom}>
        <MyButton
          text="Next"
          onPress={() => navigation.navigate('WheelofFortune')}
        />
      </View>
      <View style={styles.bottomView}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: 'white',
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.2,
    alignSelf: 'center',
    marginBottom: 20,
  },
  bottom: {
    alignSelf: 'center',
  },
  topView: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  bottomView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Main;
