import React, {useEffect, useState} from "react";
import {Button, Text, Surface} from "react-native-paper";
import {StyleSheet} from "react-native";
import {useSelector} from "react-redux";
import {BASE_URL, headersConfig} from "../constants";
import {useDispatch} from "react-redux";
import axios from "axios";
import {revokeToken} from "../redux/actions/authActions";

export default function Home(props) {
    console.log(props);

    const dispatch = useDispatch();

    const [message, setMessage] = useState("");
    const authState = useSelector((state) => state.auth);
    console.log(authState);

    const config = headersConfig(authState.token);

    useEffect(() => {
        axios
            .get(BASE_URL + "/movies", config)
            .then((resp) => setMessage(resp.data.message));
    }, []);

    return (
        <Surface>
            <Text>This is the home screen {message}</Text>
            <Button onPress={() => dispatch(revokeToken())}>Logout</Button>
        </Surface>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    },
});
