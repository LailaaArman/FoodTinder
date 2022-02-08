import { StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';
import React, { useState, useEffect, Component } from 'react';

export default function DetailsScreen(props) {
    
    console.log(props);
    return (
        <View>
            <Text>{props.dish.name}</Text>
            <Button onPress={() => props.setShowDishDetails(false)}/>
        </View>
    );
}