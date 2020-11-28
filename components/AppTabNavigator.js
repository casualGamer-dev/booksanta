import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import BookDonateScreen from "../screens/BookDonateScreen"
import BookRequestScreen from "../screens/BookRequestScreen"
import {createBottomTabNavigator} from "react-navigation-tabs"
export const AppTabNavigator=createBottomTabNavigator({
    DonateBooks:{
        screen:BookDonateScreen,
        navigationOptions:{
            tabBarIcon:<Image source={require("../assets/donation.jpg")}style={{width:20,height:20}}></Image>,
            tabBarLabel:"DONATE BOOKS"
        }
    },
     RequestBooks:{
        screen:BookRequestScreen,
        navigationOptions:{
            tabBarIcon:<Image source={require("../assets/BoOk.png")}style={{width:20,height:20}}></Image>,
            tabBarLabel:"REQUEST BOOKS"
        },
    }
})