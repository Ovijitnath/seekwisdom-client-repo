import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { FaSearchengin } from "react-icons/fa";
import { AuthContext } from '../../../Contexts/AuthProvider';
import DarkMode from '../../../DarkMode/DarkMode';



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

                    <Navbar.Brand href="/">  <h2 className='fw-2'>seekWisdom <FaSearchengin></FaSearchengin></h2>  </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>

                        <Nav>
                            <Nav.Link><Link to='/home' style={{ textDecoration: 'none' }} ><h5>Home</h5></Link></Nav.Link>
                            <Nav.Link> <Link to='/courses' style={{ textDecoration: 'none' }} ><h5>Courses</h5></Link></Nav.Link>
                            <Nav.Link><Link to='/faq' style={{ textDecoration: 'none' }} ><h5>FAQ</h5></Link></Nav.Link>
                            <Nav.Link> <Link to='/blog' style={{ textDecoration: 'none' }} ><h5>Blog</h5></Link></Nav.Link>


                            <Nav.Link data-tip={user?.displayName} >
                                {
                                    user?.uid ?
                                        <>
                                            <Nav.Link onClick={handleLogOut}> <Link style={{ textDecoration: 'none' }} ><h6>Log Out</h6></Link></Nav.Link>

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
                <DarkMode></DarkMode>
            </Navbar>
        </div>
    );
};

export default Header;