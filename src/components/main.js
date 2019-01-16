import React , {Component} from 'react'
import Appbar from './appbar'
import Footer from './footer'
import {Route,Switch,withRouter,} from 'react-router-dom'
import Recent from './recentcomplain'
import Home from './home'
import {SigninForm,Routersignin} from './signin'
import Complain from './complain'
import ComplaintForm from './complaintform'
import CrimeForm from './crimeform'
import MissingForm from './missingform'
import {Thanks} from './thanks'
import * as firebase from 'firebase'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
class Main extends React.Component{
constructor(props){
    super(props)
this.state={
    user: firebase.auth().onAuthStateChanged((user)=>
    {
        this.setState({user:user})
    })
}
}
// componentDidMount(){
//     firebase.auth().onAuthStateChanged((user)=>{
//         user ? this.setState({user:user}): this.setState({user:null})
//     })
//}
signout(ev) {
    ev.preventDefault();
    firebase.auth().signOut().then(function () {
        console.log("Sign-out successful.");

    }, function (error) {
        console.log("An error happened.");
    });
}
render(){
console.log(this.state);
    
    return(
    <MuiThemeProvider>
    <div className='container'>
    <Appbar/>
 
 
    {this.state.user ?     
   <div>
    <Switch>
 
        <Route exact path='/home' render={()=>{return <Home signout={this.signout}/>}} />
        <Route exact path='/signin'  render={()=>{return <Routersignin/>}}  />
        <Route exact path='/complain' render={()=>{return <Complain signout={this.signout}/> }}  />
        <Route exact path='/complaintform'  render={()=>{return <ComplaintForm signout={this.signout}/> }}/>
        <Route exact path='/crimeform'  render={()=>{return <CrimeForm signout={this.signout}/>}}  />
        <Route exact path='/missingform'  render={()=>{return  <MissingForm signout={this.signout}/>}} />
        <Route exact path='/recent'  render={()=>{return  <Recent signout={this.signout}/>}} />

<Route exact path='/thanks'  render={()=>{ return <Thanks signout={this.signout}/> }} />

</Switch></div>:
<Routersignin />
}


    

<br/><br/>
    <Footer/>    
        </div>
        </MuiThemeProvider>
        )
}

}
export default Main;
