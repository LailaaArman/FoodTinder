import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import { NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavBar from './components/navBar';
import { Provider } from 'react-redux';
import { store } from './src/store';
import DiscoverScreen from './components/discover';
import PreferenceScreen from './components/preferences';




const App = (props) => {

    return (
      <Provider store={store} style={styles.container}>
          <NavigationContainer>
            <NavBar />
          </NavigationContainer>
      </Provider>
    );
  
}

export default App;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});