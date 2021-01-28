import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';


import { createFluidNavigator } from 'react-navigation-fluid-transitions'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import Icon from 'react-native-vector-icons/Ionicons';


import ExploreScreen from '../screens/ExploreScreen';
import AccountScreen from '../screens/AccountScreen';

import SettingsScreen from '../screens/AccountScreen/Components/SettingsScreen';

//stacks
import {HomeStackScreen} from './Stacks'
import {DetailsStackScreen} from './Stacks'
import {AccountStack} from '../routes/Stacks'


import { createNativeStackNavigator } from "react-native-screens/native-stack";

import { View } from 'react-native-animatable';
import { Easing } from 'react-native-reanimated';
import { Platform } from 'react-native';

const Stack = createNativeStackNavigator();
// const Stack = createStackNavigator();
const DetailsStack = createStackNavigator();
//@ts-ignore
const StackShared = createSharedElementStackNavigator();
const options = {
  gestureEnabled: false,
  headerBackVisible: false,
  headerShown: false,
  transitionSpec: {
    open: {
      animation: 'timing',
      config: { duration: 400, easing: Easing.inOut(Easing.linear) }
    },
    close: {
      animation: 'timing',
      config: { duration: 400, easing: Easing.inOut(Easing.linear) }
    }
  },
  CardStyleInterpolator: ({ current: { progress } }) => {
    return {
      cardStyle: {
        opacity: progress
      }
    }
  }
}
const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-search" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: 'Explore',

        tabBarIcon: ({ color }) => (
          <Icon name="ios-aperture" color={color} size={26} />
        ),
      }}

    />
    <Tab.Screen
      name="Compte"
      component={AccountStack}
      options={{
        tabBarLabel: 'Compte',
        
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
        
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;




