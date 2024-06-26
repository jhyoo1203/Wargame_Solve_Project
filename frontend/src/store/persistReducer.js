import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist';
import user from '../module/user'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"],
}

const rootReducer = combineReducers({ user });

export default persistReducer(persistConfig, rootReducer);