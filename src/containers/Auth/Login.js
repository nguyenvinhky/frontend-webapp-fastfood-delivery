import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
// import * as actions from "../store/actions";
import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';

class Login extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-center text-login'>Login</div>

                        <div className='col-12 form-group login-input'>
                            <label>Username:</label>
                            <input type='text' className='form-control text-input' placeholder='Enter your username'/>
                        </div>

                        <div className='col-12 form-group login-input'>
                            <label>Password:</label>
                            <input type='password' className='form-control text-input' placeholder='Enter your password'/>
                        </div>

                        <div className='col-12'>
                            <button className='btn-login'>Login</button>
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
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
