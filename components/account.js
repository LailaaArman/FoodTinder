import { StyleSheet, Text, View, Switch, List} from 'react-native';
import React, { useState, useEffect, Component } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';

const settings = [
  {
    id: 0,
    name: "Breakfast",
    value: true
  },
  {
    id: 1,
    name: "Lunch",
    value: true
  },
  {
    id: 2,
    name: "Dinner",
    value: true
  },
  {
    id: 3,
    name: "Vegetarian",
    value: true
  },
  {
    id: 4,
    name: "Vegan",
    value: true
  },
  {
    id: 5,
    name: "Lactose free",
    value: true
  },
  {
    id: 6,
    name: "Nut free",
    value: true
  }
]

/*
const switchComponent = settingsState.map((item) => {
  const[switchState, setSwitchState] = useState(settings)
  return (
    <Switch value={switchState} onValueChange={ () => setSwitchState(prevState => !prevState)}/>
  )
})*/

function renderSettings() {
  const settingsState = settings;
  const[switchState, setSwitchState] = useState(settings)
  
  const listSettings = settingsState.map((item) => (
    
    <View key={item.id} style={styles.setting}>
      <Text>{item.name}</Text>
      <Switch
          onValueChange={()=> setSwitchState(prevState => !prevState)}
          value={switchState}
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
