import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import * as firebase from 'firebase/app';
import './LoginForm.css';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
const LoginForm = ({ user, setUser }) => {
    // handle Blur
    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
            if (!isFieldValid && e.target.value !== '') {
                alert('You have to give us A valid email address');
            }
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const reg = /\d{1}/.test(e.target.value);

            isFieldValid = isPasswordValid && reg;
            if (!isFieldValid && e.target.value !== '') {
                alert(
                    'You have to add At list One Capital word and number in your password'
                );
            }
        }
        if (isFieldValid) {
            let newUserInfo = { ...user };

            newUserInfo[e.target.name] = e.target.value;

            setUser(newUserInfo);
        }
    };
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: '/' } };
    const handleSubmit = (e) => {
        if (user.newUser) {
            if (user.email && user.password) {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(user.email, user.password)
                    .then((res) => {
                        const user = res.user;
                        const signedInUser = {
                            name:
                                user.displayName != null
                                    ? user.displayName
                                    : user.email,
                            email: user.email,
                        };
                        console.log('user created');
                        setUser(signedInUser);
                    })
                    .catch((error) => {
                        //
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.log(errorCode, errorMessage);
                    });
            }
        }
        if (user.newUser === false) {
            if (user.email && user.password) {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(user.email, user.password)
                    .then((res) => {
                        const user = res.user;
                        const signedInUser = {
                            isSignedIn: true,
                            name:
                                user.displayName != null
                                    ? user.displayName
                                    : user.email,
                            email: user.email,
                            photoURL: user.photoURL,
                        };
                        console.log('user logged');
                        setLoggedUser(signedInUser);

                        setUser(signedInUser);
                        history.replace(from);
                        console.log(loggedUser);
                    })
                    .catch((error) => {
                        const newUserInfo = { ...user };
                        newUserInfo[error] = error.message;
                        setUser(newUserInfo);
                        console.log(error.message);
                    });
            }
        }

        e.preventDefault();
    };

    return (
        <div className="row">
            <div className="col-lg-3 col-md-1"></div>
            <div className="col-lg-6 col-md-10">
                {!user.newUser && (
                    <Form onSubmit={handleSubmit}>
                        <h4>Login</h4>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Control
                                autoComplete="true"
                                onBlur={handleBlur}
                                type="email"
                                placeholder="Email or UserName"
                                name="email"
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control
                                autoComplete="true"
                                onBlur={handleBlur}
                                type="password"
                                placeholder="Password"
                                name="password"
                            />
                        </Form.Group>
                        <div className="check-filed">
                            <div className="check-box">
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check
                                        type="checkbox"
                                        label=" Remember me"
                                    />
                                </Form.Group>
                            </div>

                            <div className="forget-password">
                                <p>forget password ?</p>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className=" d-flex justify-content-center"
                            style={{
                                width: '100%',
                                height: '44px',
                                color: 'black',
                                background: '#F9A51A',

                                borderRadius: ' 5px',
                            }}
                        >
                            Login
                        </Button>
                        <p
                            className="d-flex justify-content-center"
                            style={{
                                marginTop: '10px',
                            }}
                        >
                            Don't have an Account? &nbsp;
                            <span
                                style={{
                                    color: '#f9a51a',
                                }}
                                onClick={() => setUser({ newUser: true })}
                            >
                                Create an account
                            </span>
                        </p>
                    </Form>
                )}
                {user.newUser && (
                    <Form onSubmit={handleSubmit}>
                        <h4>Create an account</h4>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Control
                                required
                                autoComplete="true"
                                onBlur={handleBlur}
                                type="text"
                                placeholder="First Name"
                                name="first"
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control
                                required
                                autoComplete="true"
                                onBlur={handleBlur}
                                type="text"
                                placeholder="Last Name"
                                name="last"
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control
                                required
                                autoComplete="true"
                                onBlur={handleBlur}
                                type="email"
                                placeholder="Username or Email"
                                name="email"
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control
                                required
                                autoComplete="true"
                                onBlur={handleBlur}
                                type="password"
                                placeholder="Password"
                                name="password"
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control
                                required
                                autoComplete="true"
                                onBlur={handleBlur}
                                type="password"
                                placeholder="Confirm Password"
                                name="password"
                            />
                        </Form.Group>
                        <Button
                            type="submit"
                            className=" d-flex justify-content-center"
                            style={{
                                width: '100%',
                                height: '44px',
                                color: 'black',
                                background: '#F9A51A',

                                borderRadius: ' 5px',
                            }}
                        >
                            Create an account
                        </Button>
                        <p
                            className="d-flex justify-content-center"
                            style={{
                                marginTop: '10px',
                            }}
                        >
                            Already have an Account? &nbsp;
                            <span
                                style={{
                                    color: '#f9a51a',
                                }}
                                onClick={() => setUser({ newUser: false })}
                            >
                                Log In
                            </span>
                        </p>
                    </Form>
                )}
            </div>
            <div className="col-lg-3 col-md-1"></div>
        </div>
    );
};

export default LoginForm;
