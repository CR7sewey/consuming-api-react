import {legacy_createStore as createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
// recebe o reducer, que escuta as açoes que estao sendo disparadas e executa uma acap

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
