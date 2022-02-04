import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Animated, Dimensions, Image } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DiscoverScreen from './discover';
import LikesScreen from './likes';
import CookbookScreen from './cookbook';
import AccountScreen from './account';


const Tab = createMaterialTopTabNavigator();

export default function navBar() {
    return (
        <Tab.Navigator swipeEnabled={false}>
            <Tab.Screen name="Discover" component={DiscoverScreen} />
            <Tab.Screen name="Likes" component={LikesScreen} />
            <Tab.Screen name="Cookbook" component={CookbookScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
    );
}
