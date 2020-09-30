import React from 'react';
import Header from '../Header/Header';
import './Login.css';
import LoginForm from './LoginForm/LoginForm';
const Login = () => {
    return (
        <div className="container">
            <Header />
            <div className=" login-form">
                <LoginForm />
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-1"></div>
                <div className="col-lg-6 col-md-10">
                    <div className="hr-style">
                        <hr />
                        Or
                        <hr />
                    </div>
                </div>
                <div className="col-lg-3 col-md-1"></div>
            </div>
        </div>
    );
};

export default Login;
