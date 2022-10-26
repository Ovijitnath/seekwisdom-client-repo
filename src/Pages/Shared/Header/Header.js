import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../Contexts/AuthProvider';





const Header = () => {
    const { user } = useContext(AuthContext)

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">seekWisdom</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="courses">Courses</Nav.Link>
                            <Nav.Link href="Blog">Blog</Nav.Link>
                            <Nav.Link href="about">About</Nav.Link>
                            <Nav.Link href="faq">FAQ</Nav.Link>


                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">
                                {
                                    user.uid ?
                                        <span>{user?.displayName}</span>
                                        :
                                        <>
                                            <Link to="/login"></Link>
                                            <Link to="/register"></Link>
                                        </>
                                }
                            </Nav.Link>

                            <Nav.Link href="login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;