import React ,{Component} from 'react'
import * as firebase from 'firebase'
import {withRouter} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import {Link} from 'react-router-dom'
class Complain extends React.Component{
constructor(props){
    super(props)
    this.state={
        complaints : [] ,
        submited:false
     
    }
}



 componentWillMount(){
let complaints=[];
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
    
    console.log(user.uid);
     firebase.database().ref('crimesystem'  +'/'+ 'complaints'  +user.uid)
    .on('value', (data)=>{
        let obj = data.val();
        for(var props in obj){
complaints.push(obj[props])
//console.log(complaints)   
this.setState({
    complaints:complaints,
   submited:true
})
}
    
    })

        }
    })



}



render(){
console.log('state',this.state);
return(
    

             <MuiThemeProvider>
<Link to="/home"><RaisedButton primary={true} style={{margin: 12}}>Home</RaisedButton></Link>
<RaisedButton primary={true}  style={{margin:12}}  onClick={this.props.signout}>Sign out</RaisedButton>

<div>
                    <div>
        </div>
            <h1>Your Complaints </h1>
                        {this.state.submited?
                        <div className="container">


                        {this.state.complaints.map((m, i) =>
                        
                         
                        <table className="table table-striped">
                            <tr><td><h4>Complaint  # {i+1}</h4></td></tr>
                            <tr key={i}>
                            <td><b>Your Name:</b>   {m.data.name}</td></tr>
                            <tr><td><b>Your City:</b>    {m.data.city}</td></tr>
                            <tr><td><b>Your Address:  </b>    {m.data.address}</td></tr>
                            <tr><td>Date: {}</td></tr>
                            <tr><td><b>Your Complaint:  
                                 </b>   {m.data.complain}</td></tr>

                            
                            <br />
                            <tr><td><b>Status by Admin:  </b>We have recieved your complaint. We will soon take action on it. Thanks!</td></tr>
                        </table>
                        
                        )}
                </div> : <h3>You haven't submited any complain !</h3>}
         
        </div>
        </MuiThemeProvider>
    
    )
}

}
export default withRouter(Complain);