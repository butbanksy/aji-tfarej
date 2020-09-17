import * as Yup from "yup";

export const signUpSchema = () =>
    Yup.object().shape({
        fullName: Yup.string()
            .required("The full name is required")
            .min(5, "The full name must be at least 5 characters long"),
        email: Yup.string()
            .email("Please enter a valid email")
            .required("The email is required"),
        password: Yup.string()
            .required("The password is required")
            .min(6, "The password must be at least 6 characters long"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords do not match")
            .required("Password confirmation is required"),
    });

export const loginSchema = () =>
    Yup.object().shape({
        email: Yup.string()
            .email("Please enter a valid email")
            .required("The email is required"),
        password: Yup.string()
            .required("The password is required")
            .min(6, "The password must be at least 6 characters long"),
    });
