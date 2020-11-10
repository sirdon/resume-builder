import initialState from '../initailStates/initialState.json'
import * as actionsCodes from '../actions/actionTypes';
import update from 'immutability-helper';
const authReducer = (state = initialState.authSection, action) => {
    switch (action.type) {
        case actionsCodes.SET_MAIL:
            return update(state,  { EMAIL: { $set: action.email  } });
        case actionsCodes.SET_PASSWORD:
            return update(state,  { PASSWORD: { $set: action.password  } });
        default: return state;
    }
}
export default authReducer
