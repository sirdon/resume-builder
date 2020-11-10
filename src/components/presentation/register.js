import { NavLink } from "react-router-dom";

import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import React, { Component } from 'react'
import { UPDATE_CONTACT } from "../../actions/actionTypes";
import * as register from '../../actions/registerActions';


export class Register extends Component {
    state = {
        email: "",
        password: "",
        confirmPassword: "",
        errorMessage: "center hide"
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        if (this.state.password == this.state.confirmPassword) {
            const obj = { email: this.state.email, password: this.state.password }
            this.props.register.addEmail(this.state.email)
            this.props.register.addPassword(this.state.password)
            this.setState({
                errorMessage: "center hide"
            })
            this.props.history.push("/getting-started")
        }
        else {
            console.log("error")
            this.setState({
                errorMessage: "center"
            })
        }
    }
    render() {
        return (
            <div className="container log contact">
                <div className="section funnel-section">
                    <div className="form-card">
                        <h2 className="form-heading center">Enter signup details</h2>
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
                            <div className="input-group full"><label>Confirm Password</label>
                                <div className="effect"><input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} /><span></span>
                                </div>
                                <div className="error"></div>
                            </div>

                            <div className="input-group">
                                <div className={this.state.errorMessage}><p>Error Message</p>
                                </div>
                            </div>
                            <div className="form-buttons">
                                <button className=" btn hvr-float-shadow center" onClick={this.handleSubmit}>Register</button>
                                </div>

                            <div className="form-buttons">
                                <p className="center">if you already have account</p>
                                <NavLink to='/login' className="center">Login</NavLink>
                            </div>
                        </div>

                    </div>



                </div>
            </div>

        )
    }
}

// const mapStateToProps =(state)=>{
//    return {
//        contactSection:state.contactSection,
//        skinCd:state.document.skinCd
//    }
// }
const mapDispatchToProps = (dispatch) => {
    return {
        register: bindActionCreators(register, dispatch)
        // setSkinCd:(skinCd)=>(dispatch(documentAction.setSkin(skinCd)))
    }
}
export default connect(null,mapDispatchToProps)(Register)
