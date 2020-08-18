import React, { Component } from 'react';
import siteLogo from "../../assets/img/graphics/logo-desktop.png"
import birthIcon from "../../assets/img/graphics/ico-help-desktop@2x.png"
import usaFlag from "../../assets/img/graphics/ic-usa-desktop@2x.jpg"
import cadFlag from "../../assets/img/graphics/ic-canada-desktop@2x.jpg"
import { signupUser } from "../../redux/actions/userAction"
import { connect } from 'react-redux';
import "../../assets/css/style.css"

class SignUp extends Component{

    constructor(props){
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            cpassword: '',
            phone: '',
            country: '',
            zip: '',
            month: '',
            day: '',
            year: '',
            check1: false,
            check2: '',
            errors: {},
            pop: false
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.error.errors){
            this.setState({ errors: nextProps.error.errors })
        }
        console.log(nextProps.error.errors)
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value })
    }

    onClick(){
        this.setState({ check1: !this.state.check1 })
    }
    onPopover(){
        this.setState({pop: !this.state.pop})
    }
    onSubmit(e){
        e.preventDefault();
        const postData = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            cpassword: this.state.cpassword,
            phone: this.state.phone,
            country: this.state.country,
            zip: this.state.zip,
            month: this.state.month,
            day: this.state.day,
            year: this.state.year,
            check1: this.state.check1,
            check2: this.state.check2
        }
  
        this.props.signupUser(postData, this.props.history);
    }

    render(){
        const monthList = [];
        for(var i = 1; i < 13; i++){
            monthList.push(<option value={i}>{i}</option>)
        }
        const dayList = [];
        for(var j = 1; j < 32; j++){
            dayList.push(<option value={j}>{j}</option>)
        }
        const yearList = [];
        for(var k = 1990; k < 2021; k++){
            yearList.push(<option value={k}>{k}</option>)
        }

        return(
            <div className = "container-fluid">
                <div className = "row siteLogRow">
                    <div>
                        <img src = { siteLogo } className = "siteLogo" alt = "logo-img"></img>
                    </div> 
                </div>
                <div className="row pageTitleContainer ">
                    <div className = "pageTitle">
                        REGISTER
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row pageDesc">
                        <div className="">
                            Enter your information below for exlusive offers, promotions<br/>and savings
                        </div>
                    </div>
                </div>
                <div className="container-fluid" style = {{ paddingBottom: "50px" }}>
                    <div className = "row">
                        <form onSubmit = { this.onSubmit.bind(this) }>
                            <div className="formContainer">
                                <div className = {Object.keys(this.state.errors).length > 0 ? "text-left errorStyle" : "text-left"}>* Fields required</div>
                                <div className = "formItem">
                                    <div className = "text-left">First Name *</div>
                                    <input type = "text" name = "firstname" className="form-control" onChange = { this.onChange.bind(this) }></input>
                                </div>
                                <div className = "formItem">
                                    <div className = "text-left">Last Name *</div>
                                    <input type = "text" name = "lastname" className="form-control" onChange = { this.onChange.bind(this) }></input>
                                </div>
                                <div className = "formItem">
                                    <div className = "text-left">Email Address *</div>
                                    <input type = "email" name = "email" className="form-control" onChange = { this.onChange.bind(this) }></input>
                                </div>
                                <div className = "formItem">
                                    <div className = "text-left">Choose Password *</div>
                                    <input type = "password" name = "password" className="form-control" onChange = { this.onChange.bind(this) }></input>
                                </div>
                                <div className = "formItem">
                                    <div className = "text-left">Confirm Password *</div>
                                    <input type = "password" name = "cpassword" className="form-control" onChange = { this.onChange.bind(this) }></input>
                                </div>
                                
                                
                                <div className = "formItem popDiv">
                                    <div className = "popup" style = {{ display: this.state.pop? "block" : "none" }}>
                                        We'll use this to send you birthday bonus<br/>points.
                                    </div>
                                    <div className = "text-left input-label-top">
                                        <div>Birthdate *</div>
                                        <div>
                                            <img src = {birthIcon} alt = "food-img" style = {{ width: "20px", height: "20px" }} onClick = {this.onPopover.bind(this) }></img>
                                        </div>
                                    </div>
                                    <div className = "birthdayDiv">
                                        <div className = "col-sm-4" style = {{ marginLeft: "-15px" }}>
                                            <select name="month" placeholder = "Month" className="custom-select mb-3" onChange = { this.onChange.bind(this) }>
                                                <option selected>Month</option>
                                                {monthList}
                                            </select>
                                        </div>
                                        <div className = "col-sm-4">
                                            <select name="day" className="custom-select mb-3" onChange = { this.onChange.bind(this) }>
                                                <option selected>Day</option>
                                                {dayList}
                                            </select>
                                        </div>
                                        <div className = "col-sm-4" style = {{ marginRight: "-15px" }} onChange = { this.onChange.bind(this) }>
                                            <select name="year" className="custom-select mb-3">
                                                <option selected>Year</option>
                                                {yearList}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className = "formItem">
                                    <div className = "text-left input-label-top">
                                        <div>Phone Number</div>
                                        <div><code  style = {{ color: "#206fcc" }}>Lorem ipsum dolor.</code></div>
                                    </div>
                                    <input className="form-control" type = "text" name = "phone" placeholder = "(XXX) XXX-XXXX" onChange = { this.onChange.bind(this) }></input>
                                </div>

                                <div className = "formItem">
                                    <div className = "text-left">Country *</div>
                                    <div style = {{ float: "left", width: "100%" }} id = "country">
                                        <div className="form-check-inline" style = {{ float: "left" }}>
                                            <label htmlFor="usa" className="form-check-label">
                                                <input type="radio" id = "usa" name = "country" value = "USA" className="form-check-input" onChange = { this.onChange.bind(this) }/>
                                                <img src = {usaFlag} alt = "food-img"></img>
                                            </label>
                                        </div>
                                        <div className="form-check-inline" style = {{ marginLeft: "20px", float: "left"  }}>
                                            <label htmlFor="cad" className="form-check-label">
                                                <input type="radio" id = "cad" name = "country" value = "CAD" className="form-check-input" onChange = { this.onChange.bind(this) }/>
                                                <img src = {cadFlag} alt = "food-img"></img>
                                            </label>
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className = "formItem">
                                    <div className = "text-left">Zip/Postal Code *</div>
                                    <input type = "text" name = "zip" className="form-control" onChange = { this.onChange.bind(this) }></input>
                                </div>
                            </div>
                            <div className = "checkboxDiv">
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" id = "check1" name="check1" value = { this.state.check1 } onClick = { this.onClick.bind(this) }/>
                                    <label className="custom-control-label " htmlFor="check1" style = {{ color: "#757575 "}}>Yes, I accept the <a href = "/login" style = {{ color: "#757575 "}}>Terms & Conditions</a> and <a href = "/login" style = {{ color: "#757575 "}}>Privacy Policy</a></label>
                                </div>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" id = "check2" name="check2" value = "checked2" onChange = { this.onChange.bind(this) }/>
                                    <label className="custom-control-label " htmlFor="check2" style = {{ color: "#757575 "}}>Yes, I'd like to receive news and special offers</label>
                                </div>
                            </div>
                            <div>
                                <button type = "submit" className = "btn btn-primary submitButton">REGISTER</button>
                            </div>
                            <div className = "errorDiv" >
                                <p className = { Object.keys(this.state.errors).length > 0 ? "errorStyle" : "unerrorStyle" }>The following errors have occurred:</p>
                                <p className = { this.state.errors.firstname ? "errorStyle" : "unerrorStyle"}>{ this.state.errors.firstname }</p>
                                <p className = { this.state.errors.lastname ? "errorStyle" : "unerrorStyle"}>{ this.state.errors.lastname }</p>
                                <p className = { this.state.errors.email ? "errorStyle" : "unerrorStyle"}>{ this.state.errors.email }</p>
                                <p className = { this.state.errors.password ? "errorStyle" : "unerrorStyle"}>{ this.state.errors.password }</p>
                                <p className = { this.state.errors.mpassword ? "errorStyle" : "unerrorStyle"}>{ this.state.errors.mpassword }</p>
                                <p className = { this.state.errors.birth ? "errorStyle" : "unerrorStyle"}>{ this.state.errors.birth }</p>
                                <p className = { this.state.errors.phone ? "errorStyle" : "unerrorStyle"}>{ this.state.errors.phone }</p>
                                <p className = { this.state.errors.country ? "errorStyle" : "unerrorStyle"}>{ this.state.errors.country }</p>
                                <p className = { this.state.errors.zip ? "errorStyle" : "unerrorStyle"}>{ this.state.errors.zip }</p>
        <p className = { this.state.errors.check1 ? "errorStyle" : "unerrorStyle"}>{this.state.errors.check1}</p>
                            </div>
                        </form>
                    </div>
                </div>

                <div>
                </div>
                
            </div>
        )
    }
}

const stateToProps = (state) => ({
    error: state.user
})

const dispatchToProps = {
    signupUser
}

export default connect(stateToProps, dispatchToProps)(SignUp);