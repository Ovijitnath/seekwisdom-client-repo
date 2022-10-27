import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import Image from 'react-bootstrap/Image'

import { Card, Nav } from 'react-bootstrap';

// import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";


const ref = React.createRef();

const Category = () => {

    const courses = useLoaderData();

    return (
        <div className='mx-5 my-5 p-5' ref={ref}>

            {
                <div>
                    {courses.map(course => <div>
                        <Card className="text-center" >
                            <Card.Header> <h2 className='text-danger'>Course Name:  {course.title}</h2></Card.Header>
                            <Card.Body>
                                <Card.Title></Card.Title>

                                <div>
                                    <Image
                                        fluid
                                        className='me-2'
                                        src={course.image_url}
                                        style={{ height: '200px' }}
                                    ></Image>
                                </div>
                            </Card.Body>
                            <Card.Footer className="text-muted"><p className='fs-6'>{course.details} </p></Card.Footer>
                            <Card.Footer className="text-muted">
                                <h5>Rating: {course.rating.number} </h5>
                                <h5>Course Cost: {course.price}</h5>
                                <h5> Course Duration: {course.duration}</h5>
                                <div className="App">
                                    <Pdf targetRef={ref} filename="code-example.pdf">
                                        {({ toPdf }) => <button variant="primary" onClick={toPdf}>Download Pdf</button>}
                                    </Pdf>

                                </div>

                            </Card.Footer>

                        </Card>


                        <div className='mt-1 d-flex justify-content-center '>
                            <Nav.Link> <Link class="btn btn-success text-white my-2  " to='/checkout' style={{ textDecoration: 'none' }} >Get premium access</Link></Nav.Link>
                        </div>

                    </div>)}
                </div>

            }



        </div>
    );
};

export default Category; 