import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import counterSlice from "./counterSlice";
import globalSlice, { toggleSideBar } from "./globalSlice";

const reducer = combineReducers({
    counter: counterSlice,
    global: globalSlice,
})

const store = configureStore({
    reducer,
    middleware: (gDM) => gDM().concat(logger)
})

store.dispatch(toggleSideBar(true))

export default store;