import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import colors from '../colors';

const Header = ({text}) => (
  <View style={styles.header}>
    <Text style={styles.headText}>{text}</Text>
  </View>
);
const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.main_light,
    alignSelf: 'center',
    padding: 5,
    margin: 20,
    borderRadius: 15,
  },
  headText: {
    fontSize: 25,
    color: colors.open,
    fontWeight: 'bold',
  },
});
export default Header;
