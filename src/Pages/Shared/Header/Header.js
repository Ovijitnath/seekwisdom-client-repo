import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import { AuthContext } from '../../../Contexts/AuthProvider';






const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {

        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }


    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>

                    <Navbar.Brand href="/">    seekWisdom</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">


                        </Nav>
                        <Nav>
                            <Nav.Link><Link to='/home' style={{ textDecoration: 'none' }} >Home</Link></Nav.Link>
                            <Nav.Link> <Link to='/courses' style={{ textDecoration: 'none' }} >Courses</Link></Nav.Link>
                            <Nav.Link><Link to='/faq' style={{ textDecoration: 'none' }} >FAQ</Link></Nav.Link>
                            <Nav.Link> <Link to='/blog' style={{ textDecoration: 'none' }} >Blog</Link></Nav.Link>


                            <Nav.Link data-tip={user?.displayName} >
                                {
                                    user?.uid ?
                                        <>
                                            <Nav.Link onClick={handleLogOut}> <Link style={{ textDecoration: 'none' }} >Log Out</Link></Nav.Link>

                                        </>
                                        :
                                        <>
                                            <Link style={{ textDecoration: 'none' }} to='/login'> Login </Link>

                                        </>
                                }

                            </Nav.Link>

                            <Nav.Link data-tip={user?.displayName}>{user?.photoURL ?
                                <Image style={{ height: '30px' }} roundedCircle src={user?.photoURL} ></Image> : <FaUser></FaUser>
                            } </Nav.Link>

                            <ReactTooltip />



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;