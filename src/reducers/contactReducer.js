import * as actionsCodes from '../actions/actionTypes'
import update from 'immutability-helper';
import initialState from '../initailStates/initialState.json'
export default function contactReducer(state = initialState.contactSection, action) {
    switch (action.type) {
        case actionsCodes.ADD_CONTACT:
            return update(state,  { $set: action.contactSection } );
        case actionsCodes.UPDATE_CONTACT:
            return update(state,   { $merge: action.contactSection }  );
       default: return state;
    }  
}