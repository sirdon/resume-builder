import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';

import config from './config';
const reduxStore = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(firebase)));
// ReactDOM.render(
//   <Provider store={reduxStore}>
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
//   </Provider>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={config}
      dispatch={reduxStore.dispatch}
      createFirestoreInstance={createFirestoreInstance}>
      <App />
    </ReactReduxFirebaseProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);