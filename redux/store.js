import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import themeReducer from "./reducers/themeReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
