import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';


const sagaMiddleware = createSagaMiddleware();

const devToolsEnhancer = typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = devToolsEnhancer(
    applyMiddleware(sagaMiddleware),
);

const store = createStore(rootReducer, {}, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
