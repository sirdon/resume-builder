import React from "react";
import { NavLink } from 'react-router-dom';
import ResumePreview from './resumePreview'
import { skinCodes, fieldCd } from './../../constants/typeCodes';
import { connect } from 'react-redux'
//import * as educationActions from '../../actions/contactActions';
import * as educationActions from '../../actions/educationActions';

import { bindActionCreators } from 'redux';
class Education extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      educationSection: this.props.educationSection,
      contactSection: this.props.contactSection,
      document: this.props.document
    }
  }

  componentWillMount() {
    if (!this.state.contactSection.createdDate) {
      this.props.history.push("/contact")
    }
  }

  onChange = (event) => {
    console.log("ed",this.state.educationSection);

    this.setState({ ...this.state, educationSection: { ...this.state.educationSection, [event.target.name]: event.target.value } })
    //  this.props.educationActions.add(this.state.educationSection);
    console.log("ed",this.state.educationSection);
  }

  onSubmit = async(e) => {
    //console.log(this.state.educationSection);
    if(this.state.educationSection.createdDate){
      await this.props.educationActions.update(this.state.document.id, this.state.educationSection);
    }else{
      await this.props.educationActions.add(this.state.document.id, this.state.educationSection);
    }
     this.props.history.push('/preview')
  }

  getFieldData=(key)=>{
    if(this.state.educationSection && this.state.educationSection[key]){
        return this.state.educationSection[key]
    }
    return "";
}

  render() {
    const { educationSection, contactSection } = this.state
    const {getFieldData}  = this;
    console.log("redering edsection ",educationSection)
    return (
      <div className="container med education" >
        <div className="section funnel-section">
          <div className="form-card">
            <h2 className="form-heading center">Educational Section</h2>
            <div className="form-section">
              <div className="input-group"><label>College Name</label>
                <div className="effect"><input type="text" name={fieldCd.SchoolName}
                  onChange={this.onChange} value={getFieldData(fieldCd.SchoolName)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Degree</label>
                <div className="effect"><input type="text" name={fieldCd.Degree}
                  onChange={this.onChange} value={getFieldData(fieldCd.Degree)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>CGPA</label>
                <div className="effect"><input type="text" name={fieldCd.GraduationCGPA}
                  onChange={this.onChange} value={getFieldData(fieldCd.GraduationCGPA)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>City/State</label>
                <div className="effect"><input type="text" name={fieldCd.City}
                  onChange={this.onChange} value={getFieldData(fieldCd.City)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Graduation Month</label>
                <div className="effect"><input type="text" name={fieldCd.GraduationDate}
                  onChange={this.onChange} value={getFieldData(fieldCd.GraduationDate)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Graduation Year</label>
                <div className="effect"><input type="text" name={fieldCd.GraduationYear}
                  onChange={this.onChange} value={getFieldData(fieldCd.GraduationYear)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="form-buttons">
              <button onClick={this.onSubmit} className="btn hvr-float-shadow" type='button'>Next</button>
                <NavLink to='/contact' className="center">Back</NavLink>
              </div>
            </div>
          </div>
          <div className="preview-card">
            <ResumePreview contactSection={contactSection} educationSection={educationSection}></ResumePreview>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contactSection: state.contact,
    educationSection: state.education,
    document: state.document
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    educationActions: bindActionCreators(educationActions, dispatch)
    // setSkinCd:(skinCd)=>(dispatch(documentAction.setSkin(skinCd)))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Education)


