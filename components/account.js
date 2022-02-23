import { StyleSheet, Text, View, Switch, FlatList } from 'react-native';
import React, { useState, useEffect, Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPreferences } from '../src/actions/preferences';
import { preferenceReducer } from '../src/reducers/preferenceReducer';

function renderPreferences() {
  const dispatch = useDispatch();
  // Get the current settings state
  const state = useSelector(state => state.preferenceReducer)

  const listPreferences = state.preferences.map((preference) => (
    <View key={preference.id} style={styles.setting}>
      <Text>{preference.name}</Text>
      <Switch
          value={preference.value}
          onValueChange={() => {
              preference.value = !preference.value
              dispatch(setPreferences(state))
          }}
      />
    </View>
  ));

  return listPreferences;
}

function AccountScreen(){
  return(
  <View style={styles.container}>
    {renderPreferences()}
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
