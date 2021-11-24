import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../colors';

const MyButton = ({text, onPress}) => (
  <TouchableOpacity style={styles.myButton} onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  myButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.main_light,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: colors.open,
    fontSize: 18,
  },
});

export default MyButton;
