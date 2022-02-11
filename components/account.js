import { StyleSheet, Text, View, TextInput, TouchableHighlight} from 'react-native';
import * as React from 'react';
import PreferenceScreen from './preferences';
 

function OptionScreen() {
    return (
       <View style={styles.listItem}>
         <TouchableHighlight onPress={() => this.props.navigation.navigate('Preference')}>
        <Text>Preferences</Text>
        </TouchableHighlight>
      </View>
    );
}
  
function AccountScreen() {
    return (
      <View style={styles.container}>
        {OptionScreen()}
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