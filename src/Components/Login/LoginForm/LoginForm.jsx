import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './LoginForm.css';
const LoginForm = () => {
    return (
        <div className="row">
            <div className="col-lg-3 col-md-1"></div>
            <div className="col-lg-6 col-md-10">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="label">Origin</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Your Current Location"
                            name="origin"
                            style={{
                                fontWeight: '700',
                            }}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="label">Destination</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Your Destination"
                            name="destination"
                            style={{
                                fontWeight: '700',
                            }}
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
                        className=" d-flex justify-content-center"
                        style={{
                            width: '100%',
                            height: '44px',
                            color: 'black',
                            background: '#F9A51A',

                            fontWeight: '700',
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
                        >
                            Create an account
                        </span>
                    </p>
                </Form>
            </div>
            <div className="col-lg-3 col-md-1"></div>
        </div>
    );
};

export default LoginForm;
