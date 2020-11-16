import React from "react";
import { NavLink } from "react-router-dom";
import update from 'immutability-helper';
import { fieldCd, skinCodes } from '../../constants/typeCodes';
import { connect } from 'react-redux';
import ResumePreview from './resumePreview'
import * as contactActions from '../../actions/contactActions';
import { bindActionCreators } from 'redux';
import axios from 'axios';
class Contact extends React.Component {

    constructor(props, context) {
        super(props, context);
        console.log("final", props)
        this.state = {
            contactSection: this.props.contactSection,
            document: this.props.document,
            countryData: [],
            country: "country",
            stateData:[],
            state:"state",
            collegeList: [],
            college: "college"
        };
    }


    componentWillMount() {
        if (!this.state.document || !this.state.document.id) {
            this.props.history.push("/getting-started")
        }
    }
    componentDidMount = async () => {
        let res = await axios.get(`http://restcountries.eu/rest/v2/all?fields=name`)
        await this.setState({ countryData: res.data });
        //    this.state.countryData.map((e,kay)=>{
        //        console.log(e);
        //    })  
    }

    onChange = (event) => {
        this.setState({ ...this.state, contactSection: { ...this.state.contactSection, [event.target.name]: event.target.value } })
    }

    onSubmit = async () => {
        // database call
        if (this.state.contactSection.createdDate) {
            await this.props.contactActions.update(this.state.document.id, this.state.contactSection)
        } else {
            await this.props.contactActions.add(this.state.document.id, this.state.contactSection)
        }
        await this.props.history.push("/education")
    }
    handleChange = async  (e) => {
        let key = e.target.name
        await this.setState({ [key]: e.target.value })
        let res = await axios.get(`http://universities.hipolabs.com/search?country=`+this.state[fieldCd.Country])
        if(key==fieldCd.Country){
            let res = await axios.get(`http://universities.hipolabs.com/search?country=`+this.state[fieldCd.Country])
            console.log(res.data);
        await this.setState({ stateData: res.data });
        }
    }
    getFieldData = (key) => {
        if (this.state.contactSection && this.state.contactSection[key]) {
            return this.state.contactSection[key]
        }
        return "";
    }
    render() {
        const { contactSection } = this.state
        const { getFieldData } = this
        return (
            <div className="container med contact">
                <div className="section funnel-section">
                    <div className="form-card">
                        <h2 className="form-heading center">Personal Details</h2>
                        <div className="form-section">
                            <div className="input-group"><label>First Name</label>
                                <div className="effect"><input type="text" name={fieldCd.FirstName} value={getFieldData(fieldCd.FirstName)} onChange={this.onChange} /><span></span>
                                </div>
                                <div className="error"></div>
                            </div>

                            <div className="input-group"><label>Last Name</label>
                                <div className="effect"><input type="text" name={fieldCd.LastName} value={getFieldData(fieldCd.LastName)}
                                    onChange={this.onChange} /><span></span>
                                </div>
                                <div className="error"></div>
                            </div>

                            <div className="input-group full"><label>Professional Summary</label>
                                <div className="effect"><input type="text" name={fieldCd.ProfSummary} value={getFieldData(fieldCd.ProfSummary)} onChange={this.onChange} /><span></span>
                                </div>
                                <div className="error"></div>
                            </div>

                            <div className="input-group"><label>Email</label>
                                <div className="effect"><input type="text" name={fieldCd.Email} value={getFieldData(fieldCd.Email)} onChange={this.onChange} /><span></span>
                                </div>
                                <div className="error"></div>
                            </div>

                            <div className="input-group"><label>Phone</label>
                                <div className="effect"><input type="text" name={fieldCd.Phone} value={getFieldData(fieldCd.Phone)} onChange={this.onChange} /><span></span>
                                </div>
                                <div className="error"></div>
                            </div>

                            <div className="input-group"><label>Profession</label>
                                <div className="effect"><input type="text" name={fieldCd.Profession} value={getFieldData(fieldCd.Profession)} onChange={this.onChange} /><span></span>
                                </div>
                                <div className="error"></div>
                            </div>
                            <div className="input-group"><label>Country</label>
                                <select className="btn btn-secondary dropdown-toggle" name={fieldCd.Country}  onChange={this.handleChange}>
                                    {this.state.countryData.map((e) => {
                                        return <option className="effect" key={e.name} value={e.name}>{e.name}</option>;
                                    })}
                                </select>
                                <div className="error"></div>
                            </div>
                            <div className="input-group"><label>State</label>
                            <select className="btn btn-secondary dropdown-toggle" name={fieldCd.State}  onChange={this.handleChange}>
                                    {this.state.stateData.map((e,index) => {
                                        return <option className="effect" key={index} value={e.name}>{e.name}</option>;
                                    })}
                                </select>
                                <div className="error"></div>
                            </div>
                            <div className="input-group"><label>City</label>
                                <div className="effect"><input type="text" name={fieldCd.City} value={getFieldData(fieldCd.City)} onChange={this.onChange} /><span></span>
                                </div>
                                <div className="error"></div>
                            </div>
                            <div className="input-group"><label>Street</label>
                                <div className="effect"><input type="text" name={fieldCd.Street} value={getFieldData(fieldCd.Street)} onChange={this.onChange} /><span></span>
                                </div>
                                <div className="error"></div>
                            </div>

                            

                            


                            
                            <div className="input-group"><label>Pin Code</label>
                                <div className="effect"><input type="text" name={fieldCd.ZipCode} value={getFieldData(fieldCd.ZipCode)} onChange={this.onChange} /><span></span>
                                </div>
                                <div className="error"></div>
                            </div>
                            <div className="form-buttons">
                                <button onClick={this.onSubmit} className="btn hvr-float-shadow" type='button'>Next</button>
                                <NavLink to='/getting-started' className="center">Back</NavLink>
                            </div>
                        </div>

                    </div>

                    <div className="preview-card">
                        <ResumePreview contactSection={this.state.contactSection} ></ResumePreview>
                    </div>

                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        contactSection: state.contact,
        document: state.document
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        contactActions: bindActionCreators(contactActions, dispatch)
        // setSkinCd:(skinCd)=>(dispatch(documentAction.setSkin(skinCd)))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Contact)