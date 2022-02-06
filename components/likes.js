import { StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';
import React, { useState, useEffect, Component } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteDish } from '../src/actions/dish'
import { FontAwesome } from '@expo/vector-icons';


function renderList() {
  const likedDishes = useSelector((state) => state.dishReducer.likedDishes)
  const dispatch = useDispatch();

  console.log(likedDishes);
  // const listItems = likedDishes.map((dish) => <li key={dish.data.id}>{dish.data.name} 
  //     <Button onPress={() => dispatch(deleteDish(dish.key))}>
        
  //     </Button>
  //   </li>);
    const listItems = likedDishes.map((item) => (
      <View key={item.data.id} style={styles.listItem}>
        <Text>{item.data.name}</Text>
        <FontAwesome name="remove" size={24} color="black" onPress={() => dispatch(deleteDish(item.key))} />
      </View>
    ));
    return listItems;
}

function LikesScreen() {
    return (
      <View style={styles.container}>
        {renderList()}
      </View>
    );
  }

export default LikesScreen;

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