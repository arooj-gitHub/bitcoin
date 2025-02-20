import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const InputField = ({ placeholder, secureTextEntry }) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    placeholderTextColor="#aaa"
    secureTextEntry={secureTextEntry}
  />
);

const styles = StyleSheet.create({
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#FFA500',
    borderRadius: 5,
    marginBottom: 10,
    color: '#fff',
  },
});

export default InputField;