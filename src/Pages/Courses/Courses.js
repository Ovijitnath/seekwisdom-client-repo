
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
<link rel="stylesheet" href="./Courses.css" />

const Courses = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {

        fetch('https://seekwisdom-server.vercel.app/catagories')
            .then(res => res.json())
            .then(data => setCategories(data))
    })


    return (
        <div className='mx-auto pt-5'>

            <Container>
                <Row>
                    <Col lg="3">
                        <h4>Courses Name</h4>
                        <div>
                            {
                                categories.map(category => <div key={category.id} className='mt-1' >

                                    <button type="button" class="btn btn-danger custom"><Link class="text-white " style={{ textDecoration: 'none' }} to={`/course/${category.id}`}> {category.name}  Language </Link></button>
                                </div>)

                            }

                        </div>

                    </Col>
                    <Col lg="9">

                        <div>

                            {
                                categories.map(category => <div className='mt-1 d-flex justify-content-center ' key={category.id}>
                                    <Row xs={1} md={2} className="g-4">
                                        {Array.from({ length: 1 }).map((_, idx) => (
                                            <Col>
                                                <Card >

                                                    <Card.Body className='mt-1 justify-content-center align-items-center ' >
                                                        <Card.Title className='mt-1 d-flex justify-content-center '>{category.name}</Card.Title>
                                                        <Card.Text>
                                                            This is a longer card with supporting text below as a natural
                                                            lead-in to additional content. This content is a little bit
                                                            longer.
                                                        </Card.Text>
                                                        <div className='mt-1 d-flex justify-content-center '>
                                                            <Image
                                                                fluid
                                                                className='me-2'
                                                                src={category.image_url}
                                                                style={{ height: '250px' }}
                                                            ></Image>
                                                        </div>
                                                        <div className='mt-1 d-flex justify-content-center '><button type="button" class="btn btn-success text-white "><Link class="text-white " style={{ textDecoration: 'none' }} to={`/course/${category.id}`}> More Details </Link></button></div>

                                                    </Card.Body>
                                                </Card>

                                            </Col>
                                        ))}
                                    </Row>
                                </div>)
                            }
                        </div>

                    </Col>
                </Row>


            </Container>







        </div>
    );
};

export default Courses;