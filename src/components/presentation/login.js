import { NavLink } from "react-router-dom";
import {connect} from 'react-redux'
import React, { Component } from 'react'
import {fieldCd, skinCodes}  from '../../constants/typeCodes';

import ResumePreview from './resumePreview'
import {bindActionCreators} from 'redux';
import * as authActions from '../../actions/authActions';
export class login extends Component {
    state = {
        errorMessage: this.props.auth?this.props.auth.ErrorMessage:'',
        auth:{}
        }
    handleChange = (event) => {
        var key =event.target.name;
        var val =event.target.value;
        this.setState({...this.state, auth:{...this.state.auth, [key]:val}});
    }
    handleSubmit = ()=>{
        // const {EMAIL,PASSWORD} = this.props.authSection
        // if(EMAIL===this.state.email && PASSWORD===this.state.password){
        //         this.props.history.push("/getting-started");
        //         this.setState({
        //             errorMessage:"center hide"
        //         })
        // }else{
        //         this.setState({
        //             errorMessage:"center"
        //         })
        // }
        this.props.authActions.signIn(this.state.auth)
        this.props.history.push('/contact');
    }
    render() {
        return (
            <div className="container log contact" >
                <div className="section funnel-section">
                    <div className="form-card">
                        <h2 className="form-heading center">Enter login details</h2>
                        <div className="form-section">
                        <div className="input-group full"><label>Email</label>
                        <div className="effect"><input type="text" name="email" value={this.state.auth.email}  onChange={this.handleChange}  /><span></span>
                        </div>
                    </div>

                    <div className="input-group full"><label>Password</label>
                        <div className="effect"><input  type="password" name="password"  value={this.state.auth.password} onChange={this.handleChange}/><span></span>
                        </div>
                    </div>

                            <div className="input-group full">
                                <span className="error-message" >{this.state.errorMessage}</span> 
                            </div>
                            <div className="form-buttons">
                                <button className=" btn hvr-float-shadow center" onClick={this.handleSubmit}>Login</button>
                            </div>
                           
                            <div className="form-buttons">
                            <p className="center">if you don't have account</p>
                                <NavLink to='/register'  className="center">Register</NavLink>
                            </div>
                        </div>

                    </div>



                </div>
            </div>

        )
    }
}
const mapStateToProps =(state)=>{
   return {
       authSection:state.auth
   }
}
const mapDispatchToProps=(dispatch)=>{
    return{
       authActions:bindActionCreators(authActions, dispatch)
    }
  }
  
    export default connect(mapStateToProps,mapDispatchToProps)(login)
