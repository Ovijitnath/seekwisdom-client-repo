import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Checkout = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="6">

                        <div className='mt-5'>
                            <img src="https://sithcomputers.com/wp-content/uploads/2021/05/Scratch.gif" alt="" ></img>
                        </div>

                    </Col>
                    <Col lg="6">
                        <div className='mt-5'>
                            <h1>Congratulations! <br /> You are a <span className='text-primary'>Premium member</span>  now !!</h1>
                            <h4 className='mt-5'> <span className='text-danger'>seekWisdom</span> Premium Membership is completed for you. </h4>

                        </div>
                    </Col>

                </Row>
                <div className='mt-1 d-flex justify-content-center '><button type="button" class="btn btn-success text-white ">
                    <Link class="text-white " style={{ textDecoration: 'none' }} to='/home'> Back to Home </Link ></button></div>
            </Container>
        </div>
    );
};

export default Checkout;


