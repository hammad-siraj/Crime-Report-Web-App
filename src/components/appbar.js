import React , {Component} from 'react'
import {Navbar,NavbarBrand} from 'reactstrap'
 export default class Appbar extends React.Component{

render(){
    return(
        <div  className='container'>
       
        <Navbar  color='info text-white' expand='md' >
        <NavbarBrand className='navbar_brand' ><h3>CRIME REPORT APP</h3></NavbarBrand>
        </Navbar>
   
   </div>
    )
}

 }
