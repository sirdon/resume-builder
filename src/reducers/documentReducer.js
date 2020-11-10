import initialState from '../initailStates/initialState.json'
import * as actionsCodes from '../actions/actionTypes'
import update from 'immutability-helper';
export default function documentReducer(state = initialState.document, action) {
    switch (action.type) {
        case actionsCodes.SET_SKIN:
            return update(state, {$set: action.document } );
        case actionsCodes.UPDATE_SKIN:
            return update(state, {$merge: action.document });
        default: return state;
    }
    
    

}