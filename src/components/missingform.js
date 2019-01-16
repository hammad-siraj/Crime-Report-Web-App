import React ,{Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import * as firebase from 'firebase'
import {withRouter,Link} from 'react-router-dom'
class MissingForm extends React.Component{
constructor(props){
    super(props);
    this.state={
firstname:'',
email:'',
contact:'',
address:'',
date:'',
missedfirstname:'',
missedage:'',
uniquesign:'',
male:false,
female:false

    }
}

inputhandler =(ev)=>{
const target = ev.target;
const value = target.type ==='checked' ? target.checked :target.value;
const name = target.name;
this.setState({
    [name]:value
})
}
submit =(ev)=>{
ev.preventDefault();
console.log(this.state);
const data = this.state
const database = firebase.database();
 database.ref('crimesytem' + '/' + 'missingreports' + '/').push({data})
this.props.history.push('/thanks');
}

render(){
return(
<MuiThemeProvider>
<Link to="/home"><RaisedButton primary={true} style={{margin: 12}}>Home</RaisedButton></Link>

<center>
<form onSubmit={this.submit}> 
<h1><b>MISSING Person -FORM</b></h1>
<br/>
<h4>Your Details</h4>
        <TextField name='firstname' value={this.state.firstname}  type='name' required='required' floatingLabelText='Name' onChange={this.inputhandler} /> 
<br/><br/>
    <TextField name='email' value={this.state.email} type='email' required='required' floatingLabelText='E-mail' onChange={this.inputhandler}/>
<br/><br/>
        <TextField name='contact'  value={this.state.contact} type='text' required='required' floatingLabelText='Contact No.' onChange={this.inputhandler}/>
<br/><br/>
    <TextField name='address' value={this.state.address} type='commentbox' required='required' floatingLabelText='Address' onChange={this.inputhandler}/>
        <DatePicker floatingLabelText='Date' name='date'  value={this.state.date} />
<h4> Missing Person Detail</h4>
    <TextField name='missedfirstname' value={this.state.missedfirstname} type='name' required='required' floatingLabelText='Name' onChange={this.inputhandler}/>
<br/><br/>
          <TextField name='missedage' value={this.state.missedage} type='name' required='required' floatingLabelText='Age' onChange={this.inputhandler}/>
<br/><br/>
    
         <TextField name='uniquesign' value={this.state.uniquesign} type='commentbox' required='required' floatingLabelText='Unique Sign' onChange={this.inputhandler}/>
<br/><br/>
    <input type='checkbox' name='male' checked={this.state.male} onChange={this.inputhandler}/><strong>Male</strong>
        <input type='checkbox' name='female' checked={this.state.female} onChange={this.inputhandler}/><strong>Female</strong>
<br/><br/>
<      strong>Image of Missing Person</strong>
<br/>
        <input type='file' name='pic'  accept='/image'/>
<br/><br/>
<RaisedButton type='submit' primary={true}>Submit</RaisedButton>
</form>
</center>
</MuiThemeProvider>

);

}

}
export default withRouter(MissingForm);