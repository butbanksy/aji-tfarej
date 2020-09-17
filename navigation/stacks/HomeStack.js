import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "../../screens/Home";
import Profile from "../../screens/Profile";
import Movie from "../../screens/Movie";

const {Navigator, Screen} = createStackNavigator();

const HomeStack = () => (
    <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Screen name="Home" component={Home}/>
        <Screen name="Profile" component={Profile}/>
        <Screen name="Movie" component={Movie}/>
    </Navigator>
);
export default HomeStack;
