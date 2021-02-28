import React from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {AppTabNavigator} from '../components/AppTabNavigator'
import CustomSideDrawerMenu from '../components/CustomSideBarMenu'
import SettingsScreen from '../screens/SettingsScreen'

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
    Settings:{
        screen:SettingsScreen
    }
    
},
{
    contentComponent:CustomSideDrawerMenu
},
{
    initialRouteName:'Home'
}

)

