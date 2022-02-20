import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import React, { useState, useEffect, Component } from "react";
import { useDispatch } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import { addToFavourites } from "../src/actions/cookbook";
import { getRandomRecipie } from "./API";

export default function DetailsScreen(props) {
  const dispatch = useDispatch();
  if (props.dish != null) {
    return (
      <View>
        <Text>{props.dish.title}</Text>
        <FontAwesome
          name="star-o"
          size={24}
          color="white"
          onPress={() => dispatch(addToFavourites(props.dish))}
        />
        <Button title="back" onPress={() => props.setShowDishDetails(false)} />
      </View>
    );
  } else {
    return (
      <View>
        <Text>Ingen dish</Text>
      </View>
    );
  }
}
