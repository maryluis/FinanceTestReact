import {takeLeading, put, takeEvery, take, call} from 'redux-saga/effects';
import { actionGotData, actionPutData } from '../redux';
import {connectSocket, createCanalSocket} from "../tools";


function* dataConnect() {  
    const socket = yield call(connectSocket);
    const canal = yield call(createCanalSocket, socket);
    while(true) {
        const data = yield take(canal);
        yield put(actionGotData(data))
    }
}


function* putData(data) {
    yield put(actionPutData(data.data))
}


function* dataChecker(){ //watcher saga
    yield takeLeading('DO_CONNECT', dataConnect); //
    yield takeEvery("GOT_DATA", putData);
}

export default dataChecker;