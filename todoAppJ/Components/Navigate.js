import React from 'react';
import {createBottomTabNavigator, StackNavigator  } from 'react-navigation'; // Version can be specified in package.json
import All from './All';
import Checked from './Checked';
import Active from './Active';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default Nav = createBottomTabNavigator ({
  Actives: Active ,
  Alls: All,
  Checkeds: Checked,
},
{
  navigationOptions: ({ navigation }) => ({
    initialRouteName: "All",
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Alls') {
        iconName = `ios-menu${focused ? '' : '-outline'}`;
      } else if (routeName === 'Actives') {
        iconName = `ios-flash${focused ? '' : '-outline'}`;
      } else if (routeName === 'Checkeds') {
        iconName = `ios-checkbox${focused ? '' : '-outline'}`;
      }
       return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'violet',
    inactiveTintColor: 'gray',
  },
}
);