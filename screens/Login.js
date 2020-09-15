import React, {useEffect} from "react";
import {Button, Text, TextInput, TouchableRipple, useTheme} from "react-native-paper";
import {Dimensions, Image, KeyboardAvoidingView, ScrollView, StyleSheet, View,} from "react-native";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../redux/actions/authActions";

export default function Login({navigation}) {
    const {colors} = useTheme();
    const {width, height} = Dimensions.get("window");

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
            padding: 20,
        },
        titleContainer: {
            height: height / 5,
            paddingTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
        buttonContainer: {
            paddingTop: 10,
        },
        inputContainer: {
            justifyContent: "center",
            paddingTop: 50,
        },
        footerContainer: {
            width: "100%",
            alignItems: "center",
        },
        title: {
            fontFamily: "Inter_600SemiBold",
            fontSize: 35,
            paddingTop: 30,
        },
        subtitle: {
            fontFamily: "Inter_500Medium",
            fontSize: 23,
            paddingTop: 2,
            color: "#8a8585",
        },
        passwordReset: {
            textAlign: "right",
            fontSize: 13,
            margin: 5,
            fontFamily: "Inter_500Medium",
        },
        input: {
            padding: 5,
        },
        signUpText: {
            margin: 30,
            fontFamily: "Inter_600SemiBold",
            fontSize: 16,
        },
    });

    const authState = useSelector((state) => state.auth);
    const {register, handleSubmit, setValue} = useForm({
        defaultValues: {
            email: "mrhazzoul@gmail.com",
            password: "12345678"
        }
    });
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        console.log(data);
        dispatch(login(data));
    };

    useEffect(() => {
        register("email");
        register("password");
    }, [register]);

    return (
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <View>
                    <View style={styles.titleContainer}>
                        <View>
                            <Text style={styles.title}>Welcome,</Text>
                            <Text style={styles.subtitle}>Sign in to continue!</Text>
                        </View>
                        <View>
                            <Image
                                style={{width: width / 5, height: width / 5}}
                                resizeMode={"contain"}
                                source={require("../assets/unnamed.png")}
                            />
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            mode="outlined"
                            label="Email"
                            onChangeText={(text) => setValue("email", text)}
                            placeholder="Enter email address..."
                        />
                        <TextInput
                            style={styles.input}
                            mode="outlined"
                            label="Password"
                            placeholder="Enter password..."
                            onChangeText={(text) => setValue("password", text)}
                            secureTextEntry={true}
                        />
                        <Text style={styles.passwordReset}>Forgot Password?</Text>
                        <View style={styles.buttonContainer}>
                            <Button
                                mode="text"
                                onPress={handleSubmit(onSubmit)}
                                loading={authState.loading}
                            >
                                Login
                            </Button>
                            <Button icon="facebook" mode="text" onPress={() => ""}>
                                Login with Facebook
                            </Button>
                        </View>
                    </View>
                </View>

                <View style={styles.footerContainer}>
                    <TouchableRipple
                        rippleColor="rgba(0, 0, 0, .3)"
                        onPress={() => navigation.navigate("SignUp")}>
                        <Text style={styles.signUpText}>
                            Don't have an account?{" "}
                            <Text style={[styles.signUpText, {color: colors.primary}]}>
                                Sign Up.
                            </Text>
                        </Text>
                    </TouchableRipple>
                </View>
            </KeyboardAvoidingView>
);
}
