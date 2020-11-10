import { NavLink } from "react-router-dom";
import {connect} from 'react-redux'
import React, { Component } from 'react'

export class login extends Component {
    state = {
        email: "",
        password: "",
        errorMessage:"center hide"
        }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = ()=>{
        const {EMAIL,PASSWORD} = this.props.authSection
        if(EMAIL===this.state.email && PASSWORD===this.state.password){
                this.props.history.push("/getting-started");
                this.setState({
                    errorMessage:"center hide"
                })
        }else{
                this.setState({
                    errorMessage:"center"
                })
        }
    }
    render() {
        return (
            <div className="container log contact" >
                <div className="section funnel-section">
                    <div className="form-card">
                        <h2 className="form-heading center">Enter login details</h2>
                        <div className="form-section">
                            <div className="input-group full"><label>Email</label>
                                <div className="effect"><input type="text" name="email" value={this.state.email} onChange={this.handleChange} /><span></span>
                                </div>
                                <div className="error"></div>
                            </div>

                            <div className="input-group full"><label>Password</label>
                                <div className="effect"><input type="password" name="password" value={this.state.password} onChange={this.handleChange} /><span></span>
                                </div>
                                <div className="error"></div>
                            </div>

                            <div className="input-group full">
                                <div className={this.state.errorMessage} ><p>Invalid Email or Password</p>
                                </div>
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

 export default connect(mapStateToProps)(login)
