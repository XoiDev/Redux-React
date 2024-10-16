import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import counterSlice from "./counterSlice";
import globalSlice, { toggleSideBar } from "./globalSlice";
import createSagaMiddleware from 'redux-saga'


const sagaMiddleware = createSagaMiddleware()
const reducer = combineReducers({
    counter: counterSlice,
    global: globalSlice,
})

const store = configureStore({
    reducer: reducer,
    middleware: (gDM) => gDM().concat(logger, sagaMiddleware)
})

store.dispatch(toggleSideBar(true))
// sagaMiddleware.run(mySaga)

export default store;