import React from 'react';
import {Link} from 'react-router-dom'
import {RaisedButton} from 'material-ui'
import {MuiThemeProvider} from 'material-ui/styles'
const Thanks = ()=>{
return(
    <MuiThemeProvider>

<Link to="/home"><RaisedButton primary={true} style={{margin: 12}}>Home</RaisedButton></Link>
   <RaisedButton primary={true}  style={{margin:12}}  onClick={this.props.signout}>Sign out</RaisedButton>

<center>
<h1> THANK YOU </h1>
</center>
</MuiThemeProvider>
)
}
export { Thanks};