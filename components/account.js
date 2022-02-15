import { StyleSheet, Text, View, Switch} from 'react-native';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import * as Settings from '../src/actions/settings';

// State management
function renderSettings() {
  const [lunch, setLunch] = useState(false);
  const toggleLunch = () => setLunch(previousState => !previousState);
  const dispatch = useDispatch();

  return (
    <View style={styles.setting}>
      <Text>Lunch</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleLunch}
        value={isEnabled}
      />
    </View>
  )
}

function AccountScreen() {
  return (
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
