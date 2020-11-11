import initialState from '../initailStates/initialState.json'
import * as actionsCodes from '../actions/actionTypes';
import update from 'immutability-helper';
const authReducer = (state = initialState.authSection, action) => {
    switch(action.type){
        case actionsCodes.SIGN_IN:
           return  update(state,{ErrorMessage:{$set:''}}); 
        case actionsCodes.SIGN_IN_FAILED:
           return  update(state,{ErrorMessage:{$set:action.error}});
        case actionsCodes.REGISTER:
            return  update(state,{ErrorMessage:{$set:''}}); 
        case actionsCodes.REGISTER_FAILED:
            return  update(state,{ErrorMessage:{$set:action.error}}); 
        case actionsCodes.SIGN_OUT:
            return  update(state,{ErrorMessage:{$set:''}}); 
        case actionsCodes.SIGN_OUT_FAILED:
            return  update(state,{ErrorMessage:{$set:action.error}}); 
            default:
             return state;
    }
}
export default authReducer
