import {combineReducers} from 'redux';
import authReducer from './authReducer';
import contactReducer from './contactReducer';
import documentReducer from './documentReducer';
import educationReducer from './educationReducer'
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from "react-redux-firebase";
const rootReducer = combineReducers({
    firestore: firestoreReducer,
    firebase:firebaseReducer,
    auth:authReducer,
    education:educationReducer,
    contact:contactReducer,
    document:documentReducer
});

export default rootReducer