import * as firebase from 'firebase';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const config = {
  apiKey: "AIzaSyDrc9GbOIMHArI44utsY1auG_FrPyswDII",
  authDomain: "react-bookmarks.firebaseapp.com",
  databaseURL: "https://react-bookmarks.firebaseio.com",
  storageBucket: "react-bookmarks.appspot.com",
  messagingSenderId: "50545659800"
};
firebase.initializeApp(config);


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
