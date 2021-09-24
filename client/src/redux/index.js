import {createStore, combineReducers, applyMiddleware} from 'redux';
import {SagaMiddleware, rootSaga} from "../saga";
import { dataReducer, actionConnection, actionPutData, actionGotData } from './dataReducer';
import namesReducer from "./namesReducer";


const store = createStore(combineReducers({
    data: dataReducer,
    names: namesReducer,
}), applyMiddleware(SagaMiddleware))

SagaMiddleware.run(rootSaga)

export {store, dataReducer, actionConnection, actionPutData, actionGotData};