import React ,{Component} from 'react'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DatePicker from 'material-ui/DatePicker'
import * as firebase from 'firebase'
import {withRouter,Link} from 'react-router-dom'
class CrimeForm extends React.Component{
constructor(props){
    super(props)
this.state={
firstname:'',
lastname:'',
email:'',
contact:'',
homicide:false,
attemtedhomicide:false,
robberycommercial:false,
sexualassault:false,
deathinvestigation:false,
crime:'',
crimepoint:''
}
}
inputhandler =(ev)=>{
const target =ev.target;
const value = target.type === 'checked' ? target.checked :target.value;
const name =target.name;
this.setState({
    [name]:value
})

}
submit =(ev)=>{
ev.preventDefault();
console.log(this.state);
const data = this.state;
const database = firebase.database();
const currentUser = firebase.auth().currentUser;
const authRef = database.ref('crimesystem ' +'/' + ' crimereports' + '/' );
authRef.push({data})
this.props.history.push('/thanks');
}


    render(){
return(
<MuiThemeProvider>
<Link to="/home"><RaisedButton primary={true} style={{margin: 12}}>Home</RaisedButton></Link>
<RaisedButton primary={true}  style={{margin:12}}  onClick={this.props.signout}>Sign out</RaisedButton>

<center>
   <h1> <b>CRIME FORM</b></h1>
    <form onSubmit={this.submit}>
<TextField name='firstname' type='name' value={this.state.firstname} required='required' floatingLabelText='First Name'  onChange={this.inputhandler}/>
<br/><br/>
<TextField name='lastname' type='name'  value={this.state.lastname} required='required' floatingLabelText='Last Name' onChange={this.inputhandler}/>
<br/><br/>
<TextField name='email' type='email'  value={this.state.email} required='required' floatingLabelText='E-mail' onChange={this.inputhandler}/>
<br/><br/>
<TextField name='contact' type='text'  value={this.state.contact} required='required' floatingLabelText='Contact No.' onChange={this.inputhandler}/>
<br/><br/>
<DatePicker floatingLabelText='Date'/>
<h6>Crime Type</h6>
 <input type='checkbox'  name='homicide'  checked={this.state.homicide}  onChange={this.inputhandler}/> <strong>Homicide </strong>
<input type='checkbox' name='attemtedhomicide' checked={this.state.attemtedhomicide} onChange={this.inputhandler}/> <strong>Attempted Homicide</strong>
<input type='checkbox' name='robberycommercial' checked={this.state.robberycommercial} onChange={this.inputhandler}/> <strong>Robbery-commercial</strong>
<input type='checkbox' name='sexualassault' checked={this.state.sexualassault} onChange={this.inputhandler}/> <strong>Sexual assault</strong>
<input type='checkbox' name='deathinvestigation' checked={this.state.deathinvestigation} onChange={this.inputhandler}/> <strong>Death investigation</strong>
 
<br/><br/>
<TextField name='crime' value={this.state.crime}  type='textarea' required='required' floatingLabelText='Crime Detail' onChange={this.inputhandler}/>
<br/><br/>
<TextField name='crimepoint' value={this.state.crimepoint} type='commentbox' floatingLabelText='Where did crime happen' onChange={this.inputhandler}/>
<br/><br/>

<RaisedButton type='submit' primary={true}>submit</RaisedButton>
    </form>
    </center>

</MuiThemeProvider>
);

}

}
export default withRouter(CrimeForm);