import { StyleSheet, Text, View, TextInput} from 'react-native';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


function LikesScreen() {
  const likedDishes = useSelector((state) => state.dishReducer.likedDishes)
  console.log(likedDishes);
  const listItems = likedDishes.map((dish) => <li key={dish.data.id}>{dish.data.name}</li>);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {listItems}
      </View>
    );
  }

export default LikesScreen;