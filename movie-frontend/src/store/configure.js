/**
 * 리덕스를 하나의 스토어에 저장하는 공간.
 * 리덕스 규칙 중 하나인 '스토어는 한 개'를 실천하기.
 */
import { createStore, applyMiddleware, compose, combineReducer } from 'redux';
import penderMiddelware from 'redux-pender';
import * as modules from './modules';

const reducers = combineReducer(modules); // 리덕스를 하나로 합침
const middleware = [penderMiddelware()];

// 개발 모드에서만 redux devtools를 사용
const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;

const configure = (preloadedState) => createStore(reducers, preloadedState, composeEnhancers(
    applyMiddleware(...middleware)
));

export default configure;