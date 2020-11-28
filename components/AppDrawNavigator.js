import React from "react"
import {createDrawerNavigator} from "react-navigation-drawer"
import {AppTabNavigator} from "./AppTabNavigator"
import  CustomSideBarMenu from "./CustomSideBarMenu"
import SettingsScreen from "../screens/SettingsScreen"

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{screen:AppTabNavigator},
    settings:{screen:SettingsScreen}
},
{
    contentComponent:CustomSideBarMenu,
},
{
    initialRouteName:"Home"
    
}
)