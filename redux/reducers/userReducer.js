import {LOAD_USER_INFOS} from "../actions/actionTypes";

const initialState = {
    user: {}
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_USER_INFOS: {
            return {
                user: {...action.payload},
            }
        }
        default: {
            return state
        }
    }
};

export default userReducer;


