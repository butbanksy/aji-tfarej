import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {useSelector} from "react-redux";
import HomeStack from "./stacks/HomeStack";
import AuthStack from "./stacks/AuthStack";

export const AppNavigator = () => {
    const authState = useSelector((state) => state.auth);
    return (
        <NavigationContainer>
            {!authState.isLoggedIn ? <HomeStack/> : <AuthStack/>}
        </NavigationContainer>
    );
};
