import { StyleSheet, Text, View, TextInput, Animated, Dimensions, Image, } from "react-native";
import React, { useState } from 'react';
import {PanGestureHandler} from 'react-native-gesture-handler';

let dishes = [
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

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;



function renderDishes() {
  const [dish, setDish] = useState(dishes[0]);
  let index = dish.id;
  const handleSwipe=({nativeEvent}) =>{
      //swiping right
      if(nativeEvent.translationX < -225){
        console.log("Swiped Right")
        index++
        setDish(dishes[index%3])
      }
      //swiping left
      else if(nativeEvent.translationX > 225){
        console.log("Swiped Left")
        index++
        setDish(dishes[index%3])
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