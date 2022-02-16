import { StyleSheet, Text, View, Switch, List} from 'react-native';
import React, { useState, useEffect, Component } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';

function renderSettings() {
  const [settings, setSettings] = useState([
    {id: 0, name: "Breakfast",    value: true},
    {id: 1, name: "Lunch",        value: true},
    {id: 2, name: "Dinner",       value: true},
    {id: 3, name: "Vegetarian",   value: true},
    {id: 4, name: "Vegan",        value: true},
    {id: 5, name: "Lactose free", value: true},
    {id: 6, name: "Nut free",     value: true}
  ])

  const listSettings = settings.map((item) => (
    <View key={item.id} style={styles.setting}>
      <Text>{item.name}</Text>
      <Switch
          value={item.value}
          onValueChange={() => {
              item.value = !item.value;
              setSettings([...settings]);
              console.log(settings);
          }}
      />
    </View>
  ));
  return listSettings;
}

function AccountScreen(){
  return(
  <View style={styles.container}>
    {renderSettings()}
  </View>
  );
}
export default AccountScreen;

const styles = StyleSheet.create({
  container: {
      backgroundColor: "#6D49CF",
      flex: 1,
      alignItems: "center",
      paddingTop: 40
  },
  setting: {
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


// const settingsArray = [
//   {id: 0, name: "Breakfast", value: true},
//   {id: 1, name: "Lunch", value: true},
//   {id: 2, name: "Dinner", value: true},
//   {id: 3, name: "Vegetarian", value: true},
//   {id: 4, name: "Vegan", value: true},
//   {id: 5, name: "Lactose free", value: true},
//   {id: 6, name: "Nut free", value: true}
// ]

// const [breakfast, setBreakfast] = useState(settings[0].value);
// const [lunch, setLunch] = useState(settings[1].value);
// const [dinner, setDinner] = useState(settings[2].value);
// const [vegetarian, setVegetarian] = useState(settings[3].value);
// const [vegan, setBreakfast] = useState(settings[4].value);
// const [lactoseFree, setLactoseFree] = useState(settings[5].value);
// const [nutFree,setNutFree] = useState(settings[6].value);
