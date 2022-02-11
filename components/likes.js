import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import React, { useState, useEffect, Component } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteDish } from '../src/actions/dish'
import { FontAwesome } from '@expo/vector-icons';
import DetailsScreen from './details'


function renderList() {
  const likedDishes = useSelector((state) => state.dishReducer.likedDishes)
  const dispatch = useDispatch();
  const [dishDetails, setDishDetails] = useState(false);
  const [dish, setDish] = useState(null);

  const showDetails = (item) => {
    setDish(item);
    setDishDetails(true);
  }

    if(dishDetails) {
      return (
        <DetailsScreen setShowDishDetails={(p) => setDishDetails(p)} dish={dish.data}/>
      )
    }
    else {
      const listItems = likedDishes.map((item) => (
        <View key={item.data.id} style={styles.listItem}>
          <TouchableHighlight style={{width: '90%', height: '100%'}} onPress={() => showDetails(item)}>
          <Text>{item.data.name}</Text>
          </TouchableHighlight>
          
          <FontAwesome name="remove" size={24} color="black" onPress={() => dispatch(deleteDish(item.key))} />
        </View>
      ));
      return listItems;
    }
    
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
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
  }
})