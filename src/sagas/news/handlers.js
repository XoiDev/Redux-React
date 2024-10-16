import { call, put } from "redux-saga/effects";
import requestGetnews from "./requests";
import { setLoading, setNews } from "./newsSlice";


export default function* handleGetNews({payload, type}) {
    console.log(payload);
    try {
        yield put(setLoading(true))
        const response = yield call(requestGetnews, payload);
        const { hits } = response.data;
        yield put(setNews(hits))
        yield put(setLoading(false))
    } catch (error) {
        console.log(error);
        
    }
}

