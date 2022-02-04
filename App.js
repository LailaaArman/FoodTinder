import { StyleSheet, Text, View, TextInput} from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavBar from './components/navBar';





export default function App() {

  return (
    <NavigationContainer>
      <NavBar />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({

});