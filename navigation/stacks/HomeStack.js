import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "../../screens/Home";

const {Navigator, Screen} = createStackNavigator();

const HomeStack = () => (
    <Navigator initialRouteName="Login">
        <Screen name="Home" component={Home}/>
    </Navigator>
)
export default HomeStack
