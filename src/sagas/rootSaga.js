import { all, fork } from "redux-saga/effects"
import newsSaga from "./news/saga"


export default function* rootSage(){
    yield all([fork(newsSaga)])
}