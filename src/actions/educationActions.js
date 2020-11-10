import * as actionTypes from './actionTypes';

// export function add(educationSection){
//     return {type: actionTypes.ADD_EDUCATION, educationSection}
// }


export const add=(documentId, educationSection)=>{
    return async (dispatch,getState,{getFirebase, getFirestore})=>{
        const firestore = getFirestore();
        educationSection.createdDate = new Date();
        await firestore.collection('resume').doc(documentId).set({educationSection:educationSection},{merge:true} )
        await dispatch({type: actionTypes.ADD_EDUCATION, educationSection:educationSection})
    }
}
export const update=(documentId, educationSection)=>{
    return async (dispatch,getState,{getFirebase, getFirestore})=>{
        const firestore = getFirestore();
        educationSection.modifiedDate = new Date();
        //contactSection.id=documentId
        await firestore.collection('resume').doc(documentId).set({educationSection:educationSection} , {merge:true})
        await dispatch({type: actionTypes.UPDATE_EDUCATION, educationSection:educationSection})
    }
}