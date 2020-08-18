import React, { Component } from 'react';
import siteLogo from "../../assets/img/graphics/logo-desktop.png"
import "../../assets/css/style.css"
import { loginUser } from "../../redux/actions/userAction"
import { connect } from 'react-redux';


class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: {}
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.error.errors){
            this.setState({ errors: nextProps.error.errors })
        }
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e){
        e.preventDefault();
        const postData = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.loginUser(postData, this.props.history);
    }

    render(){
        return(
            <div className = "container-fluid">
                <div className = "row siteLogRow">
                    <div>
                        <img src = { siteLogo } className = "siteLogo" alt = "food-img"></img>
                    </div> 
                </div>
                <div className="row pageTitleContainer ">
                    <div className = "pageTitle">
                        Sign In
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row pageDesc">
                    </div>
                </div>
                <div className="container-fluid" style = {{ paddingBottom: "50px" }}>
                    <div className = "row">
                        <form onSubmit = {this.onSubmit.bind(this)}>
                            <div className="formContainer">
                                <div className = "text-left">* Fields required</div>
                                
                                <div className = "formItem">
                                    <div className = "text-left">Email Address *</div>
                                    <input type = "email" name = "email" className="form-control" onChange = { this.onChange.bind(this) }></input>
                                </div>
                                <div className = "formItem">
                                    <div className = "text-left">Password *</div>
                                    <input type = "password" name = "password" className="form-control" onChange = { this.onChange.bind(this) }></input>
                                </div>
                            </div>
                            <div style = {{ marginTop: "50px"}}>
                                <button type = "submit" className = "btn btn-primary submitButton">Sign In</button>
                            </div>
                            <div className = "errorDiv" >
                                <p className = { Object.keys(this.state.errors).length > 0 ? "errorStyle" : "unerrorStyle"}>The following errors have occurred:</p>
                                <p className = { this.state.errors.error ? "errorStyle" : "unerrorStyle"}>{ this.state.errors.error }</p>
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
    loginUser
}

export default connect(stateToProps, dispatchToProps)(Login);