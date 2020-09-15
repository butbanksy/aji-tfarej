import React, {useEffect} from "react";
import {Dimensions, StyleSheet, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import * as Permissions from "expo-permissions";
import {Avatar, Text, TouchableRipple, useTheme} from "react-native-paper";
import {BASE_URL} from "../../constants";
import {setUserInfosRequest} from "../../redux/actions/userActions";
import {pickImage, uploadUserPicture} from "../../utils";

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
            color: "white",
        },
        name: {
            fontSize: 19,
            fontFamily: "Inter_900Black",
            paddingBottom: 20,
            color: "white",
        },
    });

    const userState = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    const handleImageChange = () => {
        const formData = pickImage()
            .then((formData) => uploadUserPicture(formData))
            .then((userInfos) => dispatch(setUserInfosRequest(userInfos.data)))
            .catch((err) => console.log("There was en error: ", err));
    };

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

    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <TouchableRipple
                onPress={handleImageChange}
                rippleColor="rgba(0, 0, 0, .0)"
            >
                <Avatar.Image size={80} source={{uri: BASE_URL + userState.image}}/>
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
