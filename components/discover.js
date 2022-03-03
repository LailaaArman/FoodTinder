import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Animated,
  Dimensions,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import { PanGestureHandler } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addDish } from "../src/actions/dish";
import { FontAwesome } from "@expo/vector-icons";
import DetailsScreen from "./details";
import spoonacularApi from "../src/spoonacularApi";
import { preferenceReducer } from "../src/reducers/preferenceReducer";

const deviceWindowSize = Dimensions.get("window");

function renderDishes() {
  const [dish, setDish] = useState(null);
  const [searchedDishes, setSearchedDishes] = useState([]);
  const [showDetailsView, setShowDishDetails] = useState(false);
  const [search, setSearch] = useState(true);
  const dispatch = useDispatch();
  // preferences states
  const preferencesState = useSelector((state) => state.preferenceReducer);

  const handleSwipe = ({ nativeEvent }) => {
    //swiping right
    if (dish != undefined) {
      let index = dish.id;
      if (nativeEvent.translationX < -225) {
        console.log("Swiped Right");
        dispatch(addDish(dish));
        index++;
        setDish(dishes[index]);
      }
      //swiping left
      else if (nativeEvent.translationX > 225) {
        console.log("Swiped Left");
        index++;
        setDish(dishes[index]);
      }
    }
  };

  const like = () => {
    console.log("Liked");
    dispatch(addDish(dish));
    setDish(searchedDishes.shift());
    if (searchedDishes.length < 1) {
      setSearch(true);
    }
  };

  const dislike = () => {
    console.log("Disliked");
    setDish(searchedDishes.shift());
    if (searchedDishes.length < 1) {
      setSearch(true);
    }
  };

  const searchDishes = (params) => {
    spoonacularApi.getNewDishes(params).then((response) => {
      // block repeated api calls if no results are found with the current settings
      if (response.length > 1) {
        setDish(response.shift());
        setSearchedDishes(response);
      } else {
        setSearch(false);
      }
    });
  };

  console.log(dish);
  console.log(searchedDishes);
  console.log(search);
  if (searchedDishes.length < 1) {
    if (search) {
      searchDishes(preferencesState);
      setSearch(false);
    }
  }

  const showDetails = (dish) => {
    console.log(dish);
    setShowDishDetails(true);
  };

  if (showDetailsView) {
    return (
      <DetailsScreen
        likeable={true}
        setShowDishDetails={(p) => setShowDishDetails(p)}
        dish={dish}
      />
    );
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
          <TouchableHighlight onPress={() => showDetails(dish)}>
            <Image
              style={{
                height: deviceWindowSize.height * 0.6,
                width: deviceWindowSize.width * 0.95,
                borderRadius: 20,
              }}
              source={{ uri: dish.image }}
            />
          </TouchableHighlight>
          <Text style={{ fontWeight: "bold" }}>{dish.aggregateLikes}</Text>
          <Text style={{ fontWeight: "bold" }}>{dish.title} </Text>
          <Text style={{ fontWeight: "bold" }}>{dish.readyInMinutes} min</Text>
          <Text style={{ fontWeight: "bold" }}>
            <FontAwesome name="money" size={24} />{" "}
            <FontAwesome name="money" size={24} />{" "}
            <FontAwesome name="money" size={24} />
          </Text>

          <View style={{ flexDirection: "row" }}>
            <View style={styles.roundButtonsRight}>
              <FontAwesome
                name="remove"
                size={24}
                color="white"
                onPress={() => dislike()}
              />
            </View>
            <View style={styles.roundButtonsLeft}>
              <FontAwesome
                name="heart-o"
                size={24}
                color="white"
                onPress={() => like()}
              />
            </View>
          </View>
        </Animated.View>
      </PanGestureHandler>
    );
  } else {
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
        <Text>Change your preferences to try and search again.</Text>
        <Text>
          Have you already changed your preferences? Press on the search below
          to try again.
        </Text>
        <FontAwesome
          name="search"
          size={24}
          color="white"
          onPress={() => searchDishes(preferencesState)}
        />
      </Animated.View>
    );
  }
}

function DiscoverScreen() {
  return <View style={styles.container}>{renderDishes()}</View>;
}

export default DiscoverScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6D49CF",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    paddingLeft: 50,
    paddingRight: 50,
  },
  roundButtonsLeft: {
    width: 90,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "orange",
    marginLeft: 10,
  },
  roundButtonsRight: {
    width: 90,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "orange",
    marginRight: 10,
  },
});
