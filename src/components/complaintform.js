import React ,{Component} from 'react'
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {TextField,RaisedButton,MuiThemeProvider} from 'material-ui/'
import * as firebase from 'firebase'
import {withRouter,Link} from 'react-router-dom'
class ComplaintForm extends React.Component{
constructor(props){
    super(props)

    this.state={
        name:'',
        email:'',
        address:'',
        city:'',
        complain:''
    }
    
}
submit=(ev)=>{
    ev.preventDefault();

    console.log('submit',JSON.stringify(this.state));
const data = this.state;


let currentUser = firebase.auth().currentUser;
console.log('user' + currentUser.uid)

const database = firebase.database();
const Authref = database.ref( 'crimesystem'  +'/'+ 'complaints'  +currentUser.uid);
Authref.push({data})
this.props.history.push('/thanks')


}
inputhandler =(ev)=>{
this.setState({
    [ev.target.name]:ev.target.value
})
}

render(){


    return(

<MuiThemeProvider>
<Link to="/home"><RaisedButton primary={true} style={{margin: 12}}>Home</RaisedButton></Link>
<RaisedButton primary={true}  style={{margin:12}}  onClick={this.props.signout}>Sign out</RaisedButton>

<center>
<h1><b>COMPLAINT-FORM</b></h1>
<form onSubmit={this.submit}>
 <TextField  type='name' name='name' value={this.state.name}     required='required' floatingLabelText='Name' onChange={this.inputhandler}/>
<br/>
<br/>
<TextField type='email'  name='email' value={this.state.email} required='required' floatingLabelText='E-mail' onChange={this.inputhandler}/>
 <br/>
<br/>
<TextField type='combobox' name='address' value={this.state.address} required='required' floatingLabelText='Address' onChange={this.inputhandler}/>
<br/>
<br/>
<TextField type='combobox' name='city' value={this.state.city} equired='required' floatingLabelText='City' onChange={this.inputhandler}/>
<br/>
<br/>
<TextField type='textarea'  name='complain'  value={this.state.complain} required='required' floatingLabelText='Write Your Complain Here' onChange={this.inputhandler}/>
<br/>
<br/>  

 <RaisedButton  primary={true} type='submit'>
    SUBMIT
</RaisedButton> 


</form>
</center>
</MuiThemeProvider>
);
}

}

export default withRouter(ComplaintForm);