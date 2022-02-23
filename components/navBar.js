import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Animated, Dimensions, Image } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DiscoverScreen from './discover';
import LikesScreen from './likes';
import CookbookScreen from './cookbook';
import AccountScreen from './account';
import { FontAwesome } from '@expo/vector-icons'; 

const Tab = createMaterialTopTabNavigator();

export default function navBar() {

    return (
        <Tab.Navigator swipeEnabled={false} style={{marginTop: 9}} >
            <Tab.Screen name="Discover" component={DiscoverScreen} options={{tabBarIcon: () => <FontAwesome name="search" size={17} color="black" />}} />
            <Tab.Screen name="Likes" component={LikesScreen} options={{tabBarIcon: () => <FontAwesome name="heart-o" size={17} color="black" />}}/>
            <Tab.Screen name="Cookbook" component={CookbookScreen} options={{tabBarIcon: () => <FontAwesome name="book" size={17} color="black" />}} />
            <Tab.Screen name="Account" component={AccountScreen} options={{tabBarIcon: () => <FontAwesome name="user" size={17} color="black" />}} />
        </Tab.Navigator>
  
    );
}
