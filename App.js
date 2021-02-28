import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from "./screens/WelcomeScreen";
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {AppTabNavigator} from "./components/AppTabNavigator"
import {AppDrawerNavigator} from './components/AppDrawerNavigator'

export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator=createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  Drawer:{screen:AppDrawerNavigator}
})

const AppContainer = createAppContainer(switchNavigator)