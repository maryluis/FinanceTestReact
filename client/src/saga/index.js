
import {all} from 'redux-saga/effects';
import createSagaMiddleware from "redux-saga";
import dataChecker from "./dataSaga";




function* rootSaga(){ //корневая
    yield all([
        dataChecker(),
    ])
}


const SagaMiddleware = createSagaMiddleware();


export {SagaMiddleware, rootSaga};