import React, {useState} from "react";
import {Dimensions, StyleSheet, View, ScrollView, KeyboardAvoidingView, Platform} from "react-native";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers";
import {
    Avatar,
    Button,
    Text,
    TextInput,
    TouchableRipple,
    useTheme,
} from "react-native-paper";
import axios from "axios";
import {pickImage} from "../utils";
import {signUpSchema} from "../utils/validationSchemas";
import {BASE_API_URL} from "../constants";

export default function SignUp() {
    const {colors} = useTheme();
    const {width, height} = Dimensions.get("window");
    const [isLoading, setIsLoading] = useState(false);
    const [avatarMessage, setAvatarMessage] = useState("");
    let imageFormData;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
            padding: 20,
        },
        input: {
            padding: 5,
        },
        avatarContainer: {
            margin: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
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

    const {handleSubmit, errors, control} = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            email: "mrhazzoul@gmail.com",
            password: "12345678"
        },
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
        if (!image){
            setAvatarMessage("Please pick an avatar.")
            return;
        }
        const formData = new FormData();
        formData.append("name", data.fullName);
        formData.append("email", data.email);
        formData.append("password", data.password);
        formData.append("image", {
            uri: image.uri,
            name: image.name,
            type: image.type,
        });
        setIsLoading(true);
        try {
            const response = await axios.post(BASE_API_URL + "/register", formData, {
                "Content-Type": "multipart/form-data",
            });
            setIsLoading(false);
        } catch (err) {
            console.log(err.message);
            setIsLoading(false);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
            >

            <View style={styles.titleContainer}>
                <View>
                    <Text style={styles.title}>Create Account</Text>
                    <Text style={styles.subtitle}>Sign up to get started!</Text>
                </View>
                <View/>
            </View>
            <View>
                <View style={styles.avatarContainer}>
                    <Button icon="camera" error={avatarMessage} onPress={handleImageChange}>Pick an avatar </Button>
                    <Avatar.Image
                        size={80}
                        source={
                            image
                                ? {uri: image.uri}
                                : require("../assets/depositphotos_30256231-stock-photo-cinema-dog.jpg")
                        }
                    />
                </View>
                {avatarMessage ? <Text style={styles.textError}>{avatarMessage} </Text> : null}

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
                                style={styles.input}
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
                                style={styles.input}
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
                                style={styles.input}
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
                                style={styles.input}
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
            </View>
            <Button loading={isLoading} onPress={handleSubmit(onSubmit)} style={{margin: 10}}>
                Register
            </Button>
            </KeyboardAvoidingView>

        </ScrollView>
    );
}
