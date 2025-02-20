import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';

const StartScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.logo}>Bitcoin-YAY</Text>
    <Button title="Continue with Google" onPress={() => {}} />
    <Button title="Register with phone number" onPress={() => navigation.navigate('PhoneNumberScreen')} />
    <Button title="Sign in with Apple" onPress={() => {}} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  logo: {
    fontSize: 24,
    color: '#FFA500',
    marginBottom: 20,
  },
});

export default StartScreen;