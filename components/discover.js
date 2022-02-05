import { StyleSheet, Text, View, TextInput, Animated, Dimensions, Image, } from "react-native";
import React, { useState } from 'react';
import {PanGestureHandler} from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addDish } from '../src/actions/dish'



const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const dishes = [
  {
    id: 0,
    name: "tacos",
    price: "80kr",
    instructions: "slice some cucumber",
    uri: require("../assets/dishes/tacos.jpg"),
  },
  {
    id: 1,
    name: "Stuvade makaroner",
    price: "70kr",
    instructions: "stuva makaronerna",
    uri: require("../assets/dishes/stuvademakaroner.jpg"),
  },
  {
    id: 2,
    name: "Ris med wok",
    price: "85kr",
    instructions: "wooka grönsakerna",
    uri: require("../assets/dishes/wok.jpeg"),
  },
];

function renderDishes() {
  const [dish, setDish] = useState(dishes[0]);
  const dispatch = useDispatch();
  
  const handleSwipe=({nativeEvent}) =>{
      //swiping right
      if (dish != undefined) {
        let index = dish.id;
        if(nativeEvent.translationX < -225){
          console.log("Swiped Right")
          dispatch(addDish(dish))
          index++
          setDish(dishes[index])
        }
        //swiping left
        else if(nativeEvent.translationX > 225){
          console.log("Swiped Left")
          index++
          setDish(dishes[index])
        }
      }
      
    }
    if (dish != undefined) {
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
    else {
      return (
          <Animated.View
            style={{
              padding: 10,
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              backgroundColor: "#6D49CF",
            }}
          >
            <Text>
              <div>No more dishes</div>
            </Text>
          </Animated.View>
      );
    }
  
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