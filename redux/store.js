import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {createLogger} from "redux-logger";
import AsyncStorage from "@react-native-community/async-storage";
import {persistStore, persistReducer} from "redux-persist";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import themeReducer from "./reducers/themeReducer";
import userReducer from "./reducers/userReducer";

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
};

const rootReducer = combineReducers({
    auth: authReducer,
    theme: themeReducer,
    user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    persistedReducer,
    composeEnhancer(applyMiddleware(thunk))
);

let persistor = persistStore(store);

export {store, persistor};
