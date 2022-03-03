import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Dimensions,
  FlatList,
  Image,
} from "react-native";
import React, { useState, useEffect, Component } from "react";
import { useDispatch } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import { addToFavourites } from "../src/actions/cookbook";
import { ScrollView } from "react-native-gesture-handler";

const deviceWindowSize = Dimensions.get("window");

export default function DetailsScreen(props) {
  const dispatch = useDispatch();
  if (props.likeable) {
    if (props.dish != null) {
      return (
        <ScrollView
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            resizeMode={"cover"}
            style={{
              height: deviceWindowSize.height * 0.6,
              width: deviceWindowSize.width * 0.95,
              borderRadius: 20,
              margin: 30,
            }}
            source={{ uri: props.dish.image }}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            {props.dish.title}
            <FontAwesome
              name="star-o"
              size={24}
              color="white"
              onPress={() => dispatch(addToFavourites(props.dish))}
            />
            {"\n"}
            {props.dish.readyInMinutes} min
            {"\n"}
            <FontAwesome name="money" size={24} color="black" />{" "}
            <FontAwesome name="money" size={24} color="black" />{" "}
            <FontAwesome name="money" size={24} color="black" />
          </Text>
          <Text style={{ marginHorizontal: 15, marginVertical: 5 }}>
            {props.dish.instructions}{" "}
          </Text>
          <Button
            title="back"
            onPress={() => props.setShowDishDetails(false)}
          />
        </ScrollView>
      );
    } else {
      return (
        <View>
          <Text>No dish to show</Text>
        </View>
      );
    }
  } else {
    if (props.dish != null) {
      return (
        <View>
          <Image
            style={{
              height: 400,
              width: 500,
              borderRadius: 20,
            }}
            source={{ uri: props.dish.image }}
          />
          <Text>{props.dish.title}</Text>
          <Button
            title="back"
            onPress={() => props.setShowDishDetails(false)}
          />
        </View>
      );
    } else {
      return (
        <View>
          <Text>No dish to show</Text>
        </View>
      );
    }
  }
}
