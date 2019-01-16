import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import {BrowserRouter} from 'react-router-dom'
import * as firebase from 'firebase'
import {SigninForm,Routersignin} from '../src/components/signin'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
<Main/>
    </div>
    </BrowserRouter>
    );
  }
}

export default App;
