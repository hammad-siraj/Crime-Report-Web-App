import React , {Component} from 'react'
import * as firebase from 'firebase'
import {Card,CardHeader,CardText,CardTitle,RaisedButton} from 'material-ui'
import {MuiThemeProvider} from 'material-ui/styles'
import * as MUI from 'material-ui'
import {SocialPerson} from 'material-ui/svg-icons/'
import Loader from 'react-loader-spinner' 
import {Link} from 'react-router-dom'
class Recent extends React.Component{
    constructor(props){
        super(props)
    
    this.state={
        missing:[],
loading:true
    }
    
}

componentDidMount(){

setTimeout(() => {
    this.setState({loading:false})
}, 3000);
    var missing =[];
    const database = firebase.database();
database.ref('crimesytem' + '/' + 'missingreports' + '/').on('value',(data)=>{
    let obj = data.val();
    for (var props in obj){
          missing.push(obj[props]);
          this.setState({
            missing:missing
        })
            
        }

})

}
    render(){
        console.log("render ", this.state.missing);
 return(
 <MuiThemeProvider>

 <Link to="/home"><RaisedButton primary={true} style={{margin: 6}}>Home</RaisedButton></Link>
 <RaisedButton primary={true}  style={{margin:12}}  onClick={this.props.signout}>Sign out</RaisedButton>

 <h1>RECENT MISSING REPORTS </h1>

{this.state.loading ? 	<Loader type="TailSpin" color="black" height={80} width={80} /> :
 <div className='container'>


     
{this.state.missing.map((m, i) =>
                        
                         
    <div>
<br/>
<br/>
<MUI.Card >
<MUI.CardHeader
title={m.data.firstname}
subtitle={m.data.address} 

avatar={<MUI.Avatar icon={<SocialPerson/>}></MUI.Avatar>}
>

</MUI.CardHeader>
<MUI.CardText>
<b>CONTACT NO: {m.data.contact}</b>
<br/>
   <strong> <b>MISSING PERON DETAIL</b></strong>
<br/>
<b>NAME: {m.data.missedfirstname}</b>
<br/>
    <b>AGE: {m.data.missedage}</b>
    <br/>
    <b>UNIQUE SIGN: {m.data.uniquesign}</b>
<br/>
{m.data.male ? <b> GENDER : male </b>:<b>GENDER: female</b>}

</MUI.CardText>

</MUI.Card>
    
    
    </div>)

 }

</div>
}
    </MuiThemeProvider>
 )  
    }
}

export default Recent;