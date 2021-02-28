import React from 'react'
import {Image} from 'react-native'
import HomeScreen from '../screens/HomeScreen'
import ExchangeScreen from '../screens/ExchangeScreen'
import {createBottomTabNavigator} from 'react-navigation-tabs'


export const AppTabNavigator = createBottomTabNavigator({
    HomePage : {
        screen:HomeScreen,
        navigationOptions:{
            tabBarIcon:<Image source={require("../assets/img1.png")} style={{width:20,height:20}}/>,
            tabBarLabel:"Home Screen"
        }
    },
    exchangeItems : {
        screen:ExchangeScreen,
        navigationOptions:{
            tabBarIcon:<Image source={require("../assets/img2.png")} style={{width:20,height:20}}/>,
            tabBarLabel:"Exchange Items"
        }
    }
})