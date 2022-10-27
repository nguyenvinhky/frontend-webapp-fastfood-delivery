import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
// import * as actions from "../store/actions";
import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginAPI } from '../../services/userService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: ''
        }
    }

    handleOnChangeUsername=(event)=> {
        this.setState({
            username: event.target.value
        })
    }

    handleOnChangePassword=(event)=> {
        this.setState({
            password: event.target.value
        })
    }

    handleLogin = async() =>{
        this.setState({
            errMessage: ''
        })
        try {
            let data = await handleLoginAPI(this.state.username, this.state.password);
            if (data && data.errorCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            }
            if (data && data.errorCode === 0) {
                this.props.userLoginSuccess(data.user)
                console.log(data.response);
            }
        } catch (error) {
            console.log(error.response);
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message,
                    })
                }
            }
            console.log(error.response);
        }
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }


    render() {
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-center text-login'>Login</div>

                        <div className='col-12 form-group login-input'>
                            <label>Username:</label>
                            <input type='text' 
                                    className='form-control text-input' 
                                    placeholder='Enter your username' 
                                    value={this.state.username}
                                    onChange={(event) => {this.handleOnChangeUsername(event)}}/>
                        </div>

                        <div className='col-12 form-group login-input'>
                            <label>Password:</label>
                            <div className='custom-input-password'>
                                <input type={this.state.isShowPassword ? 'text' : 'password'}
                                        className='form-control text-input'
                                        placeholder='Enter your password' 
                                        value={this.state.password}
                                        onChange={(event) => {this.handleOnChangePassword(event)}}/>
                                <span
                                    onClick={() => {this.handleShowHidePassword()}}
                                >
                                    <i class={this.state.isShowPassword ? 'far fa-eye' : 'fas fa-eye-slash'}></i>
                                </span>
                            </div>
                        </div>
                        
                        <div className='col-12' style={{color: 'red'}}>
                            {this.state.errMessage}
                        </div>

                        <div className='col-12'>
                            <button className='btn-login' onClick={() => {this.handleLogin()}}>Log in</button>
                        </div>

                        <div className='col-12 text-center'>
                            <span className='text-forgot'>Forgot your password?</span>
                        </div>

                        <div className='col-12 text-center mt-3'>
                            <span>Or Login with:</span>
                        </div>

                        <div className='col-12 social-login'>
                            <i class="fab fa-facebook-f facebook"></i>
                            <i class="fab fa-google google"></i>
                            <i class="fab fa-twitter twitter"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
