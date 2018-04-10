import * as actions from './form-generator-actions';


export function formGeneratorReducer(state=null, action) {


    switch (action.type) {

        case actions.TEST: {

            return {
                ...state,
                test: action.payload,
            };
        }

        default:
            return {...state}

    }

}