/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Alert,
} from 'react-native';

declare const global: {HermesInternal: null | {}};

let number = Math.round(Math.random() * 100);
let count =0
const App = () => {
  const [text, setText] = React.useState('');
  React.useEffect(() => {
    initNumber();
  }, []);
  function toGuess() {
    count ++
    const numberValue = parseInt(text);
    if(numberValue == number){
      Alert.alert(`猜中了，在${count}次猜中了`);
      initNumber();
    }else if(numberValue > number){
      Alert.alert('猜大了');
    }else if(numberValue < number){
      Alert.alert('猜小了');
    } 
  }
  function initNumber() {
    number = Math.round(Math.random() * 100);
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <TextInput style={styles.input} value={text} onChangeText={setText}></TextInput>
        <Button title="GUESS" onPress={toGuess}></Button>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  input:{
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 20,
    margin: 20,
    paddingLeft: 10,
  },
});

export default App;
