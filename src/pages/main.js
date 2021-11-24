import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import colors from '../colors';
import MyButton from '../components/MyButton';

const Main = ({navigation}) => {
  return (
    <View style={styles.container}>
      <MyButton
        text="Next"
        onPress={() => navigation.navigate('WheelofFortune')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Main;
