import React from 'react';
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className="container" style={{ backgroundColor: 'inherit' }}>
            <Navbar expand="md">
                <Navbar.Brand>
                    <img
                        src="https://i.ibb.co/FnqG1FH/logo.png"
                        height="56"
                        width="120"
                        alt=""
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="">
                    <Form inline>
                        <FormControl
                            type="text"
                            placeholder="Search Your Destination"
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.2',

                                fontWeight: '400',
                            }}
                        />
                    </Form>

                    <Nav className="ml-auto">
                        <span className="link">
                            <Link to="/home">
                                <span className="color">home</span>
                            </Link>
                        </span>
                        <span className="link">
                            <Link to="/home">
                                <span className="color">Destination</span>
                            </Link>
                        </span>
                        <span className="link">
                            <Link to="/home">
                                <span className="color">Contact</span>
                            </Link>
                        </span>
                    </Nav>

                    <Link to="/login">
                        <button
                            style={{
                                width: '104px',
                                height: '44px',

                                background: '#F9A51A',
                                borderRadius: ' 5px',
                            }}
                        >
                            <span className="color">Login</span>
                        </button>
                    </Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
