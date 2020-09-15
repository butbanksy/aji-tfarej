import axios from 'axios';
import {BASE_API_URL} from "./index";

export const setAxiosToken = (token) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    axios.defaults.baseURL = BASE_API_URL;
    axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
}

export const revokeAxiosToken = () => {
    axios.defaults.baseURL = BASE_API_URL;
    axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
    console.log("Revooooooked");

}
