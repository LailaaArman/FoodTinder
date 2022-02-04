import { StyleSheet, Text, View, TextInput} from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavBar from './components/navBar';



export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <NavBar />
      </NavigationContainer>
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});