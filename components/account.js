import { StyleSheet, Text, View, TextInput, TouchableHighlight} from 'react-native';
import * as React from 'react';
import PreferenceScreen from './preferences';
import DiscoverScreen from './discover';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRegistry } from 'react-native-web';
import { render } from 'react-dom';
 

const Stack = createStackNavigator();

function MyStack() {
  return (
    <View style={styles.listItem}>
    <Stack.Navigator>
       
      <Stack.Screen name="Preferences" component={PreferenceScreen} />
      <Stack.Screen name="Discover" component={DiscoverScreen} />
      
    </Stack.Navigator>
    </View>
  
  );
}

/*
function render() {
  return (
     <View style={styles.listItem}>
       {MyStack()}
    </View>
  );
}*/
  
function AccountScreen() {
    return (
      <View style={styles.container}>
        {MyStack()}
      </View>
    );
  }
export default AccountScreen;

const styles = StyleSheet.create({
  container: {
      backgroundColor: "#6D49CF",
      flex: 1, 
      alignItems: "center",
      paddingTop: 40
  },
  listItem: {
    display: "flex", 
    flexDirection: "row", 
    width: "90%", 
    height: 70,
    paddingLeft: 20, 
    paddingRight: 20,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: "10px",
    justifyContent: "space-between",
    alignItems: "center",
  }
})