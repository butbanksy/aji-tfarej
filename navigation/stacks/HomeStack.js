import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "../../screens/Home";
import Profile from "../../screens/Profile";

const {Navigator, Screen} = createStackNavigator();

const HomeStack = () => (
    <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Screen name="Home" component={Home}/>
        <Screen name="Profile" component={Profile}/>
    </Navigator>
);
export default HomeStack;
