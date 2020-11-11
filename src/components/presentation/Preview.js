import React, { Component } from 'react'
import ResumePreview from "./resumePreview";
import {skinCodes} from '../../constants/typeCodes';
import * as documentActions from '../../actions/documentActions';
import {connect } from 'react-redux';
import {  bindActionCreators} from 'redux';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
export class Preview extends Component {
  constructor(props,context) {
    super(props,context)
    this.state = {
      educationSection: this.props.educationSection,
      contactSection:this.props.contactSection,
      document:this.props.document
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({document:nextProps.document})
  }
  onChange = async (skinCd) => {
    await this.props.documentActions.updateSkinCd(this.state.document.id,skinCd);
    // this.setState({...this.state, document: {...this.state.document, skinCd:skinCd   }})
    //   this.setState({skinCd:skinCd})
  
    
    //   this.props.documentActions.changeFontFamily();          
  }
  download=()=>{
    const resumeElem = document.getElementsByClassName('resume-preview');
    html2canvas(resumeElem[0]).then((canvas)=>{
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'JPEG',0,0);
      pdf.save('resume.pdf');
    }).catch((error)=>{
      console.log(error);
    })
  }
  render() {
    const { educationSection, contactSection, document } = this.state
    return (
      <div className="container med finalize-page" >
        <div className="funnel-section ">
            <div className="finalize-preview-card ">
              <ResumePreview contactSection={contactSection} educationSection={educationSection} skinCd={document.skinCd}></ResumePreview>   
            </div>
            <div className="finalize-settings">
          <div className="section">
          <button className=" center" onClick={this.download}>Download</button>
            <h1 className=" center">
              Select a resume template to get started</h1>
            <p className=" center">
              You’ll be able to edit and change this template later!
            </p>
            <div className="styleTemplate ">
              {
              skinCodes.map((value, index) => {
              return( <div className="template-card rounded-border">

                <i className={this.state.document.skinCd==value?'fa fa-check-circle selected':'hide'} aria-hidden="true"></i>
                <img className={this.state.document.skinCd==value?'active':''} src={'/images/' + value + '.svg' } />
                <button className="btn-select-theme" onClick={()=>this.onChange(value)}  type='button'>USE TEMPLATE</button>
              </div>);
              })
        }
      </div>

    </div>
  </div>
        </div>

      {/* <div>
       <div class="slider">
       <input type="radio" name="testimonial" id="t-1"/>
       <input type="radio" name="testimonial" id="t-2"/>
       <input type="radio" name="testimonial" id="t-3" checked/>
       <input type="radio" name="testimonial" id="t-4"/>
       <input type="radio" name="testimonial" id="t-5"/>
       <div class="testimonials">
         <label class="item" for="t-1">
           <img src="http://lorempixel.com/output/nature-q-c-126-126-1.jpg" alt="picture"/>
           <p>"Raw denim you probably haven't heard of them jean short austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
           <h2>- Princy, Web Developer</h2>
         </label>
         <label class="item" for="t-2">
           <img src="http://lorempixel.com/output/nature-q-c-126-126-1.jpg" alt="picture"/>
           <p>"Raw denim you probably haven't heard of them jean short austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
           <h2>- Princy, Web Developer</h2>
         </label>
         <label class="item" for="t-3">
           <img src="http://lorempixel.com/output/nature-q-c-126-126-1.jpg" alt="picture"/>
           <p>"Raw denim you probably haven't heard of them jean short austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
           <h2>- Princy, Web Developer</h2>
         </label>
         <label class="item" for="t-4">
           <img src="http://lorempixel.com/output/nature-q-c-126-126-1.jpg" alt="picture"/>
           <p>"Raw denim you probably haven't heard of them jean short austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
           <h2>- Princy, Web Developer</h2>
         </label>
         <label class="item" for="t-5">
           <img src="http://lorempixel.com/output/nature-q-c-126-126-1.jpg" alt="picture"/>
           <p>"Raw denim you probably haven't heard of them jean short austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
           <h2>- Princy, Web Developer</h2>
         </label>
       </div>
       <div class="dots">
         <label for="t-1"></label>
         <label for="t-2"></label>
         <label for="t-3"></label>
         <label for="t-4"></label>
         <label for="t-5"></label>
       </div>
     </div>
      </div> */}

      </div>
    );
  }
}

  

const mapStateToProps=(state)=>{
  return {
      contactSection:state.contact,
      educationSection:state.education,
      document:state.document
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
      documentActions: bindActionCreators(documentActions, dispatch)
     // setSkinCd:(skinCd)=>(dispatch(documentAction.setSkin(skinCd)))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Preview)
