import { StyleSheet, Text, View, TextInput, Animated, Dimensions, Image, } from "react-native";
import React, { useState } from 'react';
import {PanGestureHandler} from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addDish } from '../src/actions/dish'



const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;



function renderDishes() {

  const dishes = useSelector((state) => state.dishReducer.dishes)
  const selectedDishes = useSelector((state) => state.dishReducer.likedDishes)
  const dispatch = useDispatch();
  const [dish, setDish] = useState(dishes[0]);
  let index = dish.id;
  const handleSwipe=({nativeEvent}) =>{
      //swiping right
      if(nativeEvent.translationX < -225){
        console.log("Swiped Right")
        dispatch(addDish(dish))
        index++
        setDish(dishes[index%3])
        console.log(selectedDishes);
      }
      //swiping left
      else if(nativeEvent.translationX > 225){
        console.log("Swiped Left")
        index++
        setDish(dishes[index%3])
        console.log(selectedDishes);
      }
    }
    
  return (
    <PanGestureHandler onHandlerStateChange={handleSwipe}>
      <Animated.View
        key={dish.id}
        style={{
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          backgroundColor: "#6D49CF",
        }}
      >
        <Image
          style={{
            height: 400,
            width: 500,
            borderRadius: 20,
          }}
          source={dish.uri}
        />
        <Text>
          <div>{dish.price}</div>
          <div>{dish.instructions}</div>
        </Text>
      </Animated.View>
    </PanGestureHandler>
  );
}

function DiscoverScreen() {
  return (
    <View style={styles.container}>
      {renderDishes()}
    </View>
  );
}

export default DiscoverScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#6D49CF",
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center"
    }
})