import {put, takeLatest } from 'redux-saga/effects';
import {TEST_ACTION_REQUESTED,testAction} from "./form-generator-actions";



function* loadTestAction(action){
    yield put(testAction(action.payload));
}


export function* watchTestAction(){

    yield takeLatest(TEST_ACTION_REQUESTED, loadTestAction);

}