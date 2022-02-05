import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, { useState, useEffect, Component } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteDish } from '../src/actions/dish'


function renderList() {
  const likedDishes = useSelector((state) => state.dishReducer.likedDishes)
  const dispatch = useDispatch();

  console.log(likedDishes);
  const listItems = likedDishes.map((dish) => <li key={dish.data.id}>{dish.data.name} 
      <Button onPress={() => dispatch(deleteDish(dish.key))}>
        
      </Button>
    </li>);
    return listItems;
}

function LikesScreen() {
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {renderList()}
      </View>
    );
  }

export default LikesScreen;