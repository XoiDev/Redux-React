import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { reducer } from "./reducer";
import newsSaga from "./news/saga";


const sagaMiddleware = createSagaMiddleware()


const store = configureStore({
    reducer: reducer,
    middleware: (gDM) => gDM().concat(logger, sagaMiddleware)
})

sagaMiddleware.run(newsSaga)
export default store;