import React from "react"
import {createStackNavigator} from "@react-navigation/stack";
import Login from "../../screens/Login";
import SignUp from "../../screens/SignUp";

export default function AuthStack(props) {

    const {Navigator, Screen} = createStackNavigator();

    return (
        <Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Screen name="Login" component={Login}/>
            <Screen name="SignUp" component={SignUp}/>
        </Navigator>
    )
}
