import * as actionTypes from '../actions/actionsTypes';

import {updatedObject} from '../../shared/utility';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/'
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.AUTH_START: 
            return updatedObject(state, {error: null, loading: true});
        case actionTypes.AUTH_SUCESS: 
            return updatedObject(state, {
                token: action.token,
                userId: action.userId,
                error: null,
                loading: false
            });
        case actionTypes.AUTH_FAIL: 
            return updatedObject(state, {
                error: action.error,
                loading: false
            })
        case actionTypes.AUTH_LOGOUT: 
            return updatedObject(state, {token: null, userId: null});
        case actionTypes.SET_AUTH_REDIRECT_PATH:
            return updatedObject(state, {authRedirectPath: action.path});
        default: return state;
    }
}

export default reducer;