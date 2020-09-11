import {LOAD_USER_INFOS} from "./actionTypes";

export const setUserInfosRequest = (userInfos) => {
    return {
        type: LOAD_USER_INFOS,
        payload: userInfos,
    };
};
