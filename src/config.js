import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBtPGnSG43J4nWpFcaiMTNCdcFrjqfo9kM",
    authDomain: "pep-resume-api1-d3adb.firebaseapp.com",
    databaseURL: "https://pep-resume-api1-d3adb.firebaseio.com",
    projectId: "pep-resume-api1-d3adb",
    storageBucket: "pep-resume-api1-d3adb.appspot.com",
    messagingSenderId: "195414451578",
    appId: "1:195414451578:web:ce239f44170deaba1f22c3",
    measurementId: "G-Q4GNS9T2JV"
  }
  firebase.initializeApp(firebaseConfig);

export default firebase;