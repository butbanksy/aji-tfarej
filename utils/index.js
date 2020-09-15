import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import * as Yup from "yup"
import {setUserInfosRequest} from "../redux/actions/userActions";


//For uploading an image to the server
export const pickImage = async () => {
    try {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
        if (!result.cancelled) {

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

            return await formData
        }
    } catch (E) {
        console.log(E);
    }
};


export const uploadUserPicture = async (formData) => {
     return await axios.post("/photo", formData, {
        "Content-Type": "multipart/form-data",
    });

}


// Validation schemas

export const signUpSchema = () => Yup.object().shape({
    fullName: Yup.string()
        .required("The full name is required")
        .min(5, "The full name must be at least 5 characters long"),
    email: Yup.string().email("Please enter a valid email").required("The email is required"),
    password: Yup.string()
        .required("The password is required")
        .min(6, "The password must be at least 6 characters long"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords do not match")
        .required("Password confirmation is required"),
});
