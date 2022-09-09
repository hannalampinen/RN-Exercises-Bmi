import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(0);

  function calculate() {
    const weightWithDigit = weight.replace(',','.');
    const heightWithDigit = height.replace(',','.');
    const result = (weightWithDigit / Math.pow(heightWithDigit, 2)).toFixed(1);
    setBmi(result);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.field}>Weight</Text>
      <TextInput 
        style={styles.field}
        value={String(weight)} //changes string to numbers I assume??
        onChangeText={text => setWeight(text)}
        keyboard-type='decimal-pad'></TextInput>
      <Text style={styles.field}>Height</Text>
      <TextInput style={styles.field}
        value={String(height)}
        onChangeText={text => setHeight(text)}
        keyboard-type='decimal-pad'></TextInput>
      <Button onPress={calculate} title='Calculate'></Button> 
      <Text>BMI: {bmi}</Text>
    </View>
  );
}

// {/* <Button onPress={calculate} title='Calculate'></Button> */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  field: {
    marginBottom: 10
  }
});
