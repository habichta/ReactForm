import {combineReducers} from 'redux';
import {formGeneratorReducer} from "./FormGenerator/form-generator-reducers";


const rootReducer = combineReducers({
    forms: formGeneratorReducer,
});

export default rootReducer;