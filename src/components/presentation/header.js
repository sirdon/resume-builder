import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../static/images/logo.png";
import {connect} from 'react-redux';
import * as authActions from '../../actions/authActions';
import {bindActionCreators} from 'redux';
function LoggedIn(props) {
  let email =props.auth.email;
  console.log(props.auth);
  return (
        <ul>
            <li className="signin ">
              <NavLink className="  " to="/register">
               Logged in as {email}
              </NavLink>
            </li>
            <li className="signin" onClick={props.hello}> 
              <NavLink className="text-blue btnv-3" to="/login">
             Signout
              </NavLink>         
            </li>
          </ul>
  )

}

function LoggesOut(props) {
  return (
    <ul>
      <li className="signup ">
        <NavLink className=" btnv-1" to="/register">
        Register
        </NavLink>
      </li>
      <li className="signin"> 
        <NavLink className="text-blue btnv-3" to="/login">
        Sign In
        </NavLink>         
      </li>
    </ul>
  )
}

const header = (props) => {

  const { auth } = props;
  return (  
  <header className="header">
  <nav className="nav">
      <a href="/" className="holder-logo">
        <img className='logo' src={logo}></img>
      </a> 
        <div className="header-links full-height">

        {auth && auth.uid ?<LoggedIn auth={auth} hello={props.authActions.signout}></LoggedIn>:<LoggesOut></LoggesOut>}
          
          <ul id="nav-mid">
            <li>
            <NavLink className="btn-nvt-gm" to="/resume-templates">
            Resume Templates
            </NavLink>
            </li> 
            <li className="holder-pricing">            
              <NavLink className="btn-nvt-gm" to="/about-us">
              About Us
              </NavLink>
            </li>        
          </ul>
            
      </div>   
    </nav>
  </header>

  );
};

const mapStateToProps=(state)=>{
  return{
     auth: state.firebase.auth
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
     authActions:bindActionCreators(authActions, dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(header);