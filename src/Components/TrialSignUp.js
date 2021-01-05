import React from "react"
import Navigation from "./Navigation";
import { Link } from 'react-router-dom';

class TrialSignUp extends React.Component{
    constructor(){
        super();
        this.state = {
fields:{},
errors:{}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);  
    };
  
    handleChange(e){
        let fields=this.state.fields;
        fields[e.target.name]=e.target.value;
        this.setState({fields});
    }
    handleSubmit(e){
        e.preventDefault();
        if(this.validateForm()){
            let fields={};
            fields["userName"]="";
            fields["emailId"]="";
            fields["mobileNo"]="";
            fields["password"]="";
            fields["status"]="";
            fields["exp"]="";
            fields["date"]="";
            this.setState({fields:fields});
            alert("form submitted");
        }
    }
    validateForm(){
        let fields=this.state.fields;
        let errors={};
        let formIsValid=true;
        if(!fields["userName"]){
            formIsValid=false;
            errors["userName"]='Please enter your name'
        }
        if(typeof fields["userName"]!=="undefined"){
            if(!fields["userName"].match(/^[a-zA-Z ]*$/)){
            formIsValid=false;
            errors["userName"]='Please enter Alphabets'
        }}
        if(!fields["emailId"]){
            formIsValid=false;
            errors["emailId"]='Please enter your email address'
        }
        if(typeof fields["emailId"]!=="undefined"){
            var pattern=new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if(!pattern.test(fields["emailId"])){
            formIsValid=false;
            errors["emailId"]='Please enter a valid email Id'
        }}
        if(!fields["mobileNo"]){
            formIsValid=false;
            errors["mobileNo"]='Please enter your mobile number'
        }
        if(typeof fields["mobileNo"]!=="undefined"){
            if(!fields["mobileNo"].match(/^[0-9]{10}$/)){
            formIsValid=false;
            errors["mobileNo"]='Please enter a valid mobile number'
        }}
        if(!fields["password"]){
            formIsValid=false;
            errors["password"]='Please enter a password'
        }
        this.setState({
            errors:errors
        });
        return formIsValid;
    }
  render(){
    return(
      <div>
          <Navigation/>
          <p class="lead"><i class="fas fa-user"></i> Create Your Account</p>
          
          <form class="form" onSubmit={this.handleSubmit}>
          <div class="form-group">
          <select name="status" value={this.state.fields.status} onChange={this.handleChange}>
            <option value="0">* Select Professional Status</option>
            <option value="Staffing Professional">Staffing Professional</option>
            <option value="Recruiter">Recruiter</option>
            <option value="Team Manager">Team Manager</option>
            <option value="Other">Other</option>
          </select>
          <small class="form-text">Give us an idea of where you are at in your career</small>
        </div>
        <div class="form-group">
          <input type="text" placeholder="Enter your userName" name="userName" value={this.state.fields.userName} onChange={this.handleChange} />
    <div>{this.state.errors.userName}</div>
        </div>
        <div class="form-group">
          <input type="text" placeholder="Enter phone Number" name="phone" value={this.state.fields.mobileNo} onChange={this.handleChange} />
          <div>{this.state.errors.mobileNo}</div>
</div>
        <div class="form-group">
          <input type="email" placeholder="Enter Email Address" name="email" value={this.state.fields.emailId} onChange={this.handleChange}/>
          <div>{this.state.errors.emailId}</div>
</div>
        <div class="form-group">
          <input type="password" placeholder="Password" name="password" value={this.state.fields.password} onChange={this.handleChange}/>
          <div>{this.state.errors.password}</div>
</div>
<div class="form-group">
        <p>Add Your Job Credentials</p>
          <input type="text" placeholder="Years of Experience" name="exp" value={this.state.fields.exp} onChange={this.handleChange}/>
          {/* <input class="form-control" type="datetime-local" name="date"  value={profile.date} onChange={handleChange}/>    */}
          <input type="date" name="date" value={this.state.fields.date} onChange={this.handleChange}/>       
          </div>

        <div class="my-2">
          <button type="button" class="btn btn-light">
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        
        <div class="form-group social-input">
          <i class="fab fa-facebook fa-2x"></i>
          <input type="text" placeholder="Facebook URL" name="facebook" value={this.state.fields.facebook} onChange={this.handleChange}/>
        </div>

        <div class="form-group social-input">
          <i class="fab fa-linkedin fa-2x"></i>
          <input type="text" placeholder="Linkedin URL" name="linkedin" value={this.state.fields.linkedin} onChange={this.handleChange}/>
        </div>

        <div class="form-group social-input">
          <i class="fab fa-instagram fa-2x"></i>
          <input type="text" placeholder="Instagram URL" name="instagram" value={this.state.fields.instagram} onChange={this.handleChange}/>
        </div>
        <Link to={`/Card/${this.state.fields.status}/${this.state.fields.userName}/${this.state.fields.mobileNo}/${this.state.fields.emailId}/${this.state.fields.exp}/${this.state.fields.date}/${this.state.fields.facebook}/${this.state.fields.linkedin}/${this.state.fields.instagram}}`}><button type="submit" className="btn ">SUBMIT</button></Link>
        </form>
      </div>
    )
  }
}

export default TrialSignUp;