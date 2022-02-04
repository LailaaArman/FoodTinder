import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import Button from 'react-bootstrap/Button';

export default function App() {

  return (
    <View style={styles.container}>

      <Text>FoodTinder</Text>
      <TextInput 
      style={styles.input}
      placeholder='Username'/>

      <TextInput 
      style={styles.input}
      placeholder='Password'/>

<View>
<Button variant="primary">Primary</Button>{' '}
</View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: { 
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  }
});