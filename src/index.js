import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import  'roboto-fontface'
import App from './App';
import * as firebase from 'firebase'
//import Firebase,{firebasecontext} from './components/firebase/'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDSSWIXg3ydo3U2AqtiugWBv8Kndxs9neM",
    authDomain: "crime-report-app-b5342.firebaseapp.com",
    databaseURL: "https://crime-report-app-b5342.firebaseio.com",
    projectId: "crime-report-app-b5342",
    storageBucket: "crime-report-app-b5342.appspot.com",
    messagingSenderId: "1057661140064"
  };
firebase.initializeApp(config);

ReactDOM.render(
//<firebasecontext.Provider value={new Firebase()}>

<App />

//</firebasecontext.Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
