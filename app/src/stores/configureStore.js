import {createStore, applyMiddleware} from 'redux';
import rootReducer from './../reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './../sagas/index';

export default function configureStore(initialState){
    "use strict";

    const sagaMiddleWare = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(sagaMiddleWare),
        window.devToolsExtension ? window.devToolsExtension() : undefined
    );

    sagaMiddleWare.run(rootSaga);

    return store;
}
