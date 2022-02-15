import React, { Component } from 'react';

import DiscoverScreen from './components/discover';
import PreferenceScreen from './components/preferences';

import { createStackNavigator } from '@react-navigation/stack';

export const Navigator = new StackNavigator({
  Discover: { screen: Discover },
  Preference: { screen: Preference},
},{
  initialRouteName: 'Discover',
})

class Nav extends Component {
  render() {
    return (
      <Navigator />
    )
  }
}
      
export default Nav;