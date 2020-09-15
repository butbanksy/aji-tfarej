import React from "react";
import {View, StyleSheet} from "react-native";
import {List, Switch, Divider} from "react-native-paper";
import ThemeSwitch from "./ThemeSwitch";
import {useDispatch} from "react-redux";
import {revokeToken} from "../../redux/actions/authActions";

const ListSettings = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(revokeToken());
    };

    return (
        <View>
            <List.Item
                title="Theme"
                description="Enable dark theme"
                left={(props) => <List.Icon {...props} icon="brightness-4"/>}
                right={() => <ThemeSwitch/>}
                onPress={()=>("")}
            />
            <Divider/>
            <List.Item
                title="Edit Profile"
                description="Edit your profile name, email address, password..."
                left={(props) => <List.Icon {...props} icon="account-edit"/>}
                onPress={()=>("")}
            />
            <Divider/>
            <List.Item
                title="Log out"
                description="Log out from current session"
                left={(props) => <List.Icon {...props} icon="logout"/>}
                onPress={handleLogout}
            />
            <Divider/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default ListSettings;
