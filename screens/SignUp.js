import React, {useState} from "react";
import {Dimensions, StyleSheet, View} from "react-native";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers";
import {Avatar, Button, Text, TextInput, TouchableRipple, useTheme,} from "react-native-paper";
import axios from "axios";
import {pickImage, signUpSchema} from "../utils";
import {BASE_API_URL} from "../constants";

export default function SignUp() {
    const {colors} = useTheme();
    const {width, height} = Dimensions.get("window");
    let imageFormData;

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
        textError: {
            fontFamily: "Inter_400Regular",
            color: colors.error,
            fontSize: 12,
        },
    });

    const validationSchema = signUpSchema();
    const [image, setImage] = useState(null);

    const {register, handleSubmit, errors, control} = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {},
    });

    const handleImageChange = () => {
        pickImage().then((formData) => {
            // We set the image in the avatar for clarity
            setImage({
                uri: formData.getParts()[0].uri,
                name: formData.getParts()[0].name,
                type: formData.getParts()[0].type,
            });
            // We assign the form data containing our picture to send to the server
            imageFormData = formData;
            console.log("The picked image form data: ", imageFormData);
        });
    };

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("name", data.fullName);
        formData.append("email", data.email);
        formData.append("password", data.password);
        formData.append("image", {
            uri: image.uri,
            name: image.name,
            type: image.type,
        });

        const response = await axios.post(BASE_API_URL + "/register", formData, {
            "Content-Type": "multipart/form-data",
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <View>
                    <Text style={styles.title}>Create Account</Text>
                    <Text style={styles.subtitle}>Sign up to get started!</Text>
                </View>
                <View/>
            </View>
            <View>
                <Controller
                    name="fullName"
                    control={control}
                    defaultValue=""
                    render={({onChange}) => (
                        <>
                            <TextInput
                                onChangeText={(value) => {
                                    onChange(value);
                                }}
                                mode="outlined"
                                label="Full Name"
                                error={errors.fullName}
                            />
                            {errors.fullName ? (
                                <Text style={styles.textError}>{errors.fullName.message}</Text>
                            ) : null}
                        </>
                    )}
                />
                <Controller
                    name="email"
                    defaultValue=""
                    control={control}
                    render={({onChange}) => (
                        <>
                            <TextInput
                                onChangeText={(value) => {
                                    onChange(value);
                                }}
                                mode="outlined"
                                label="Email"
                                error={errors.email}
                            />
                            {errors.email ? (
                                <Text style={styles.textError}>{errors.email.message}</Text>
                            ) : null}
                        </>
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({onChange}) => (
                        <>
                            <TextInput
                                onChangeText={(value) => {
                                    onChange(value);
                                }}
                                mode="outlined"
                                label="Password"
                                error={errors.password}
                                secureTextEntry={true}
                            />
                            {errors.password ? (
                                <Text style={styles.textError}>{errors.password.message}</Text>
                            ) : null}
                        </>
                    )}
                />
                <Controller
                    name="confirmPassword"
                    control={control}
                    defaultValue=""
                    render={({onChange}) => (
                        <>
                            <TextInput
                                onChangeText={(value) => {
                                    onChange(value);
                                }}
                                mode="outlined"
                                label="Confirm password"
                                error={errors.confirmPassword}
                                secureTextEntry={true}
                            />
                            {errors.confirmPassword ? (
                                <Text style={styles.textError}>
                                    {errors.confirmPassword.message}
                                </Text>
                            ) : null}
                        </>
                    )}
                />

                <View style={{width: "100%", alignItems: "center"}}>
                    <TouchableRipple
                        onPress={handleImageChange}
                        rippleColor="rgba(0, 0, 0, .0)"
                    >
                        <Avatar.Image
                            size={80}
                            source={
                                image
                                    ? {uri: image.uri}
                                    : require("../assets/depositphotos_30256231-stock-photo-cinema-dog.jpg")
                            }
                        />
                    </TouchableRipple>
                </View>
            </View>
            <Button onPress={handleSubmit(onSubmit)}>Register</Button>
        </View>
    );
}
