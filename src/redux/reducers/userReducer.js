import { SET_USER,
    SET_ERRORS
 } from '../actions/type';

const initialState = {
    errors: null,
    login: false
}

export default (state = initialState, action) => {
    switch (action.type){
        case SET_ERRORS:
            return{
                ...state,
                errors: action.payload
            };
        case SET_USER:
            return{
                ...state,
                login: true,
                errors: {}
            };
        default:
            return state;
    }
}