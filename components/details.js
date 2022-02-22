import { StyleSheet, Text, View, TextInput, Button, FlatList, Image} from 'react-native';
import React, { useState, useEffect, Component } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { addToFavourites } from '../src/actions/cookbook'

export default function DetailsScreen(props) {

    const dispatch = useDispatch();
    if (props.dish != null) {
        return (
            <View>
                <Image
                style={{
                  height: 400,
                  width: 500,
                  borderRadius: 20,
                }}
                source={props.dish.image}
              />
                <Text>{props.dish.title}</Text>
                <FontAwesome name="star-o" size={24} color="white" onPress={() => dispatch(addToFavourites(props.dish))}/>
                <Button title="back" onPress={() => props.setShowDishDetails(false)}/>
            </View>
        );
    }
    else {
        return (
            <View>
                <Text>Ingen dish</Text>
            </View>
        )
    }

    
}
