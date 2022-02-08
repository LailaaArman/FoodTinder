import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import React, { useState, useEffect, Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { deleteFromFavourites } from '../src/actions/cookbook'
import DetailsScreen from './details'

function renderList() {
  const favouriteDishes = useSelector((state) => state.cookbookReducer.favouriteDishes)
  const dispatch = useDispatch();
  const [dishDetails, setDishDetails] = useState(false);
  const [dish, setDish] = useState(null);

  const showDetails = (item) => {
    setDish(item);
    setDishDetails(true);
  }
  console.log('testar')
  console.log(dish);
  if(dishDetails) {
    return (
      <DetailsScreen setShowDishDetails={(p) => setDishDetails(p)} dish={dish.data}/>
    )
  }
  else {
    const listItems = favouriteDishes.map((item) => (
      <View key={item.data.id} style={styles.listItem}>
        <TouchableHighlight style={{width: '90%', height: '100%'}} onPress={() => showDetails(item)}>
        <Text>{item.data.name}</Text>
        </TouchableHighlight>
        
        <FontAwesome name="remove" size={24} color="black" onPress={() => dispatch(deleteFromFavourites(item.key))} />
      </View>
    ));
    return listItems;
  }

}

export default function CookbookScreen() {
  return (
    <View style={styles.container}>
      {renderList()}
    </View>
  );
  }

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