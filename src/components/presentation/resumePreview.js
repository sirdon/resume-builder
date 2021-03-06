import React from 'react';
import { fieldCd } from './../../constants/typeCodes'
import * as documentActions from '../../actions/documentActions';
import {connect } from 'react-redux';
import {  bindActionCreators} from 'redux';

class ResumePreview extends React.PureComponent {
    constructor(props,context) {
        super(props,context)
        this.state = {
          educationSection: this.props.educationSection,
          contactSection:this.props.contactSection,
          document:this.props.document
        }
      } 

    contactResume=(key, valToAppend)=>{
        if(this.props.contactSection){
          var data= this.props.contactSection[key]?this.props.contactSection[key] + (valToAppend?valToAppend:'') :'';
       return data;
        }
        return '';
    }

    rvEducation=(key, valToAppend)=>{
        if(this.props.educationSection){
          return this.props.educationSection[key]?this.props.educationSection[key] + (valToAppend?valToAppend:'') :'';
        }
        return '';
    }

    render() {
        const { contactResume, rvEducation } = this;
        return (
            <div className={"resume-preview "+this.props.document.skinCd } id="myresume">
                <div className={'name-section'}>
                    <p className={'center contact-name text-upper'}> {`${contactResume(fieldCd.FirstName)}  ${contactResume(fieldCd.LastName)}`} </p>
                    <p className={'center address'}>{contactResume(fieldCd.City) + contactResume(fieldCd.State)
                        +contactResume(fieldCd.Country) +contactResume(fieldCd.Street)+contactResume(fieldCd.ZipCode)}</p>
                    <p className={'center'}>{contactResume(fieldCd.Email)} </p>
                    <p className={'center'}>{contactResume(fieldCd.Phone)}</p>
                    <p className={'center'}>{contactResume(fieldCd.ProfSummary)}</p>
                </div>

               <div className={'educationSection text-upper'}>                   
                    <p className="heading bold">EDUCATIONAL DETAILS</p>
                     <div className={'divider'}></div>
                     <p>{rvEducation(fieldCd.SchoolName)}</p>
                     <p>{rvEducation(fieldCd.Degree)}</p>
                     <p>{rvEducation(fieldCd.City)}</p>
                     <p>{rvEducation(fieldCd.GraduationCGPA)}</p>
                     <p>{rvEducation(fieldCd.GraduationDate)}</p>
                     <p>{rvEducation(fieldCd.GraduationYear)}</p>
                </div>

            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        contactSection:state.contact,
        educationSection:state.education,
        document:state.document
    }
  }

  export default connect(mapStateToProps,null)(ResumePreview)