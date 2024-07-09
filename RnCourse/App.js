import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [value, onChangeText] = useState('Useless Multiline Placeholder');
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={value} placeholder='Your Goal' />
        <Button title='Add' />
      </View>
      <View style={styles.goalsContainer}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
    padding: 10
  },
  goalsContainer :{
    
  }

});
