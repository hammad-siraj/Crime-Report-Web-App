import React , {Component} from 'react'
import * as firebase from 'firebase'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Card,CardBody,CardImg,CardHeader,CardText} from 'reactstrap'
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom'
class Home extends React.Component{
    
render(){
console.log(firebase.auth().currentUser)
    return(
    <MuiThemeProvider>
   <RaisedButton primary={true}  style={{margin:12}}  onClick={this.props.signout}>Sign out</RaisedButton>
    
    <div className='container'>
        <br/>
        <h1>HOME</h1>
        <div className='row'>
        <div className='col-12 col-md-5 m-1'>
        <Card>
            <CardBody>
            <Link to='/crimeform'>

<CardHeader>
    CRIME REPORT FORM
    </CardHeader>
    </Link>
<CardImg src=''/>
<CardText>You are the key to your safety ! please report us to eradicate crimes from our society </CardText>
            </CardBody>
            </Card>
</div>

        <div className='col-12 col-md-5 m-1'>
        <Card>
            <CardBody>
            <Link to='/complaintform'>

<CardHeader>
    COMPLAINT FORM
    </CardHeader>
    </Link>
<CardImg src=''/>
<CardText>You have any complaints ? Report us ! </CardText>
            </CardBody>
            </Card>
</div>

        <div className='col-12 col-md-5 m-1'>
        <Card>
            <CardBody>
            <Link to='/missingform'>

<CardHeader>
    MISSING PERSON REPORT
    </CardHeader>
    </Link>
<CardImg src=''/>
<CardText>Lost someone ? let report us to help you to find out the missing one ! </CardText>
            </CardBody>
            </Card>
</div>
   
     
<div className='col-12 col-md-5 m-1'>
        <Card>
            <CardBody>
            <Link to='/complain'>

<CardHeader>
    MY COMPLAINTS
    </CardHeader>
    </Link>
<CardImg src=''/>
<CardText>Your complaints ! </CardText>
            </CardBody>
            </Card>
</div>
   


              <div className='col-12 col-md-5 m-1'>
        <Card>
            <CardBody>
            <Link to='/recent'>

<CardHeader>
    RECENT REPORTS
    </CardHeader>
    </Link>
<CardImg src=''/>
<CardText>Look out  reports posted by user and help them ! </CardText>
            </CardBody>
            </Card>
</div>


    </div>

                   
    </div>
    </MuiThemeProvider>
    
    
    
    )
}

}
export default withRouter(Home);