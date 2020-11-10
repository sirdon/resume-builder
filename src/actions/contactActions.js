import * as actionTypes from './actionTypes';

// export function add(contactSection){
//     return {type: actionTypes.ADD_CONTACT, contactSection}
// }

// export function update(contactSection){
//     return {type: actionTypes.UPDATE_CONTACT, contactSection}
// }

export const add=(documentId, contactSection)=>{
    return async (dispatch,getState,{getFirebase, getFirestore})=>{
        const firestore = getFirestore();
        contactSection.createdDate = new Date();
        await firestore.collection('resume').doc(documentId).set({contactSection:contactSection}, {merge:true} )
        await dispatch({type: actionTypes.ADD_CONTACT, contactSection:contactSection})
        
    }
}

export const update=(documentId, contactSection)=>{
    return async (dispatch,getState,{getFirebase, getFirestore})=>{
        const firestore = getFirestore();
        contactSection.modifiedDate = new Date();
        await firestore.collection('resume').doc(documentId).set({contactSection:contactSection} , {merge:true})
        await dispatch({type: actionTypes.UPDATE_CONTACT, contactSection:contactSection})
        
    }
}