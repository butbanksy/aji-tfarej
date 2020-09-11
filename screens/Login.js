import React, {useEffect} from "react";
import {TextInput, Button, Text} from "react-native-paper";
import {StyleSheet, Dimensions} from "react-native";
import {Surface} from "react-native-paper";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../redux/actions/authActions";
import {changeTheme} from "../redux/actions/themeActions";

const {width} = Dimensions.get("window");

export default function Login() {
    const authState = useSelector(state => state.auth);
    const {theme} = useSelector(state => state.theme)
    const {register, handleSubmit, setValue} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        console.log(data);
        dispatch(login(data))
    };

    useEffect(() => {
        register("email");
        register("password");
    }, [register]);

    return (
        <Surface style={styles.container}>
            <TextInput
                label="Email"
                onChangeText={(text) => setValue("email", text)}
            />
            <TextInput
                secureTextEntry={true}
                label="Password"
                onChangeText={(text) => setValue("password", text)}
            />
            <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
            <Button onPress={() => dispatch(changeTheme(theme))}>Change Theme</Button>

            <Text style={{color: "red", textAlign: "center"}}>{authState.error}</Text>
        </Surface>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
    },
    buttons: {
        height: 100,
        width: width / 1.3,
        justifyContent: "center",
        alignContent: "center",
    },
});
