import React, {useEffect, useState} from "react";
import {Dimensions, StyleSheet, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import {Avatar, Text, TouchableRipple, useTheme} from "react-native-paper";
import {BASE_URL} from "../../constants";
import axios from "axios";
import {setUserInfosRequest} from "../../redux/actions/userActions";

const ProfileBanner = () => {
    const {colors} = useTheme();
    const {width} = Dimensions.get("window");
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: "center",
            backgroundColor: colors.background,
        },
        secondContainer: {
            backgroundColor: colors.background,
        },
        defaultBackground: {
            backgroundColor: colors.background,
        },
        actionsCounter: {
            width: "80%",
            flexDirection: "row",
            justifyContent: "space-between",
        },
        text: {
            fontFamily: "Inter_600SemiBold",
            fontSize: 14,
            color: "white"
        },
        name: {
            fontSize: 19,
            fontFamily: "Inter_900Black",
            paddingBottom: 20,
            color: "white"

        },
    });

    const [image, setImage] = useState(null);
    const userState = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    useEffect(() => {
        getPermissionAsync();
    }, []);

    const getPermissionAsync = async () => {
        if (Platform.OS !== "web") {
            const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== "granted") {
                alert("Sorry, we need camera roll permissions to make this work!");
            }
        }
    };

    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });
            if (!result.cancelled) {
                setImage(result.uri);

                // ImagePicker saves the taken photo to disk and returns a local URI to it
                let localUri = result.uri;
                console.log(result.uri);
                let filename = localUri.split("/").pop();
                console.log(filename);

                // Infer the type of the image
                let match = /\.(\w+)$/.exec(filename);
                let type = match ? `image/${match[1]}` : `image`;

                // Upload the image using the fetch and FormData APIs
                let formData = new FormData();
                // Assume "photo" is the name of the form field the server expects
                formData.append("image", {uri: localUri, name: "test", type});

                return axios
                    .post("/photo", formData, {
                        "Content-Type": "multipart/form-data",
                    })
                    .then((resp) => dispatch(setUserInfosRequest(resp.data)));
            }
        } catch (E) {
            console.log(E);
        }
    };
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <TouchableRipple onPress={pickImage} rippleColor="rgba(0, 0, 0, .0)">
                <Avatar.Image
                    size={80}
                    source={image ? {uri: image} : {uri: BASE_URL + userState.image}}
                />
            </TouchableRipple>
            <View style={{marginTop: 10}}>
                <Text style={styles.name}>{userState.name}</Text>
            </View>
            <View style={styles.actionsCounter}>
                <Text style={styles.text}>Saved</Text>
                <Text style={styles.text}>Watch Later</Text>
                <Text style={styles.text}>Reviews</Text>
            </View>
            <View style={styles.actionsCounter}>
                <Text style={styles.text}>20</Text>
                <Text style={styles.text}>5</Text>
                <Text style={styles.text}>25</Text>
            </View>
        </View>
    );
};

export default ProfileBanner;
