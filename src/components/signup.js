import React , {Component} from 'react'
import {Link,withRouter } from 'react-router-dom'
import  TextField from 'material-ui/TextField' ;
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import * as firebase from 'firebase'
const INITIAL_STATE ={
    username:'',
    email:'',
    password:'',
    error:null
}
class SignupForm extends React.Component{
constructor(){
    super();
    this.state= INITIAL_STATE;
}


signUp=(ev)=>{
    ev.preventDefault();
    console.log('hello');
    const {username,email,password}=this.state;
 
const auth = firebase.auth();
auth.createUserWithEmailAndPassword(email,password).then((authUser)=>{
    this.setState({...INITIAL_STATE})
 this.props.history.push('/signin');   
}).catch((error)=>{this.setState({error})});
 
auth.onAuthStateChanged((authUser)=>{
    authUser ? console.log(authUser,'loggedIn'):console.log('not loggedIn');
})
}
inputhandler =(ev)=>{
this.setState({
    [ev.target.name]:ev.target.value
})
}

    render(){
//console.log('render',this.state);
        const {username,email,password}=this.state;
        return(
            <MuiThemeProvider>
            <center>
                <div>
              <h1>Sign Up</h1>
{this.state.error ? <i>{this.state.error.message}</i>:null}
              <form onSubmit={this.signUp}>
                <TextField hintText="First Name" floatingLabelText="First Name" required="required"  name='username' onChange={this.inputhandler} value={username}/>
                <br />
                {/* <TextField hintText="Last Name" floatingLabelText="Last Name"  required="required" onChange={this.inputhandler} value={this.state.lastname} /> */}
                <br />
                 <TextField type='email' hintText="Email" floatingLabelText="Email"  name='email' onChange={this.inputhandler} value={email}/>
                <br />
                <TextField hintText="Password Field" floatingLabelText="Password" type="password"   name='password'  onChange={this.inputhandler} value={password}/>
                <br /><br /><br />
                <RaisedButton type="submit" primary={true}>Submit</RaisedButton>
              </form>
            </div>
            </center>
                </MuiThemeProvider>
      
            

        )
    }

}
// const Singuplink =()=>{

//     return(<div>
// <p> Dont have an account ?
// <Link to='/signup'>SIGN-UP</Link>
// </p>
//     </div>);

// }

const RouterSignup = withRouter(SignupForm);
 export  {SignupForm,RouterSignup}
