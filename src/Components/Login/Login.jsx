import React, { useState } from 'react';
import Header from '../Header/Header';
import './Login.css';
import LoginForm from './LoginForm/LoginForm';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebase.config';
import GoogleSignIn from './googleLogin/GoogleSignIn';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const [user, setUser] = useState({
        newUser: false,
        isSignedIn: false,
        name: '',
        email: '',
        error: '',
    });
    return (
        <div className="container">
            <Header />
            <div className=" login-form">
                <LoginForm user={user} setUser={setUser} />
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-1"></div>
                <div className="col-lg-6 col-md-10 ">
                    <div className="hr-style">
                        <hr />
                        Or
                        <hr />
                    </div>
                    <div className="popUpLogIn ">
                        <img
                            src={require('./google.png')}
                            alt=""
                            width="31px"
                            height="31.74px"
                        />
                        <div className="popUp d-flex justify-content-center">
                            <GoogleSignIn user={user} setUser={setUser} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-1"></div>
            </div>
        </div>
    );
};

export default Login;
