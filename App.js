import { StyleSheet, Text, View, TextInput} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createMaterialTopTabNavigator();
function DiscoverScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Discover!</Text>
    </View>
  );
}

function LikesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Your Likes!</Text>
    </View>
  );
}

function CookbookScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cookbook!</Text>
    </View>
  );
}

function AccountScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Account!</Text>
    </View>
  );
}
export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Discover" component={DiscoverScreen} />
        <Tab.Screen name="Likes" component={LikesScreen} />
        <Tab.Screen name="Cookbook" component={CookbookScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({

});