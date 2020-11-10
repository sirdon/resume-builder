import * as actionTypes from './actionTypes';

export function addEmail(email){
    return {type: actionTypes.SET_MAIL,email}
}
export function addPassword(password){
    return {type: actionTypes.SET_PASSWORD,password}
}

export function update(obj){
    return {type: actionTypes.UPDATE_MAIL,obj}
}