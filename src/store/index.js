import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import todoReducer from '../reducer/todolist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const SagaMiddleware = createSagaMiddleware();

const store = createStore(
    todoReducer, applyMiddleware(SagaMiddleware, logger)
)

SagaMiddleware.run(rootSaga)//訂閱rootSaga


export default store;