import {all} from 'redux-saga/effects';
import {formGeneratorSagas} from "./FormGenerator/form-generator-sagas";

export default function* rootSaga() {

    yield all([formGeneratorSagas()]);

}