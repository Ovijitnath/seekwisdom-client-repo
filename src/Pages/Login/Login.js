import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../Contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Login = () => {

    const { providerLogin } = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='w-50 mx-auto pt-5'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <ButtonGroup vertical>

                    <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-success"> <FaGoogle></FaGoogle>  Login with Google</Button>
                    <Button variant="outline-secondary"><FaGithub></FaGithub> Login with Github</Button>

                </ButtonGroup>
                <Form.Group className="mb-3 pt-4" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <p>New in this site?  <Link to='/register'  >Register Here</Link></p>



            </Form>
        </div >
    );
};

export default Login;