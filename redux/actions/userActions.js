import {LOAD_USER_INFOS} from "./actionTypes";
import {UPLOAD_USER_PICTURE} from "./actionTypes";
import axios from "axios";

export const setUserInfosRequest = (userInfos) => {
    return {
        type: LOAD_USER_INFOS,
        payload: userInfos,
    };
};
