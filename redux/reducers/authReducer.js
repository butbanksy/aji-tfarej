import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_FAIL,
    LOGIN_REQUEST_SUCCESS,
    REVOKE_TOKEN,
    SET_TOKEN
} from "../actions/actionTypes";

const initialState = {
    loading: false,
    isLoggedIn: false,
    token: "",
    error: "",
    theme: "light",
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN: {
            return {
                isLoggedIn: true,
                token: action.payload,
            }
        }
        case REVOKE_TOKEN: {
            return initialState
        }
        case LOGIN_REQUEST : {
            return {
                ...initialState,
                loading: true,
            }
        }
        case LOGIN_REQUEST_SUCCESS : {
            return {
                isLoggedIn: true,
                loading: false,
                token : action.payload,
                error: ""
            }
        }
        case LOGIN_REQUEST_FAIL : {
            return {
                ...state,
                loading: false,
                token: "",
                error: action.payload,
            }
        }
        default : {
            return state
        }
    }
}

export default authReducer
