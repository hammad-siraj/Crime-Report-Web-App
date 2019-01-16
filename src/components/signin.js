import React , {Component} from 'react'
import {withRouter,Switch} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import * as firebase from 'firebase'
import {Link,Route} from 'react-router-dom'
import {SignupForm,RouterSignup} from './signup'

const SigninPage = ()=>{
    return(<div>
        <h1>SIGN IN</h1>
    </div>)
}

 export class SigninForm extends React.Component{
constructor(props){
    super(props)
this.state ={
    email:'',
    password:'',
error:null,
user:true
}
}
signIn=(ev)=>{
    ev.preventDefault();
const {email,password}=this.state
const auth = firebase.auth();

auth.signInWithEmailAndPassword(email,password)
        .then((authUser)=>{this.setState({email:'',password:'' })
        this.props.history.push('/home')

})


        .catch((error)=>{this.setState({error})})


    
}

inputhandler=(ev)=>{
this.setState({
    [ev.target.name]:ev.target.value
})
}
    render(){
return(
<MuiThemeProvider>
{this.state.user ? 
<center>
<div className='container'>
<h1>SIGN-IN</h1>
<br/>
{this.state.error ? <i>{this.state.error.message}</i>:null} 
<form onSubmit={this.signIn}>
<TextField type='email' hintText='E-mail' type='email' floatingLabelText='E-mail' required='required' name='email' onChange={this.inputhandler} value={this.state.email} />
<br/><br/>
<TextField hintText='password' type='password' floatingLabelText='password' required='required' name='password' onChange={this.inputhandler}/>
<br/><br/>
<RaisedButton type='submit' primary={true}>SUBMIT</RaisedButton>
<br/>
<i>Dont have an account ? <Link onClick={()=>{this.setState({
    user:false
})}} to='/signup'>Sign up now </Link> </i>
</form>
</div>
</center>

:<center>
<Route exact strict path='/signup'  render={()=>{return <RouterSignup/>}}  />


</center>
}
</MuiThemeProvider>




        )
    
}

}
const Routersignin = withRouter(SigninForm);
export {Routersignin};
 export default SigninPage;
 
