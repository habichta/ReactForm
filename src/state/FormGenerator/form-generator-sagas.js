import { all } from 'redux-saga/effects';
import {watchTestAction} from "./form-generator-saga-test";


export function* formGeneratorSagas(){

    yield all([
        watchTestAction(),
    ])


}