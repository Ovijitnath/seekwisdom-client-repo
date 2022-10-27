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
                            <Card.Header>Course Name:{course.title}</Card.Header>
                            <Card.Body>
                                <Card.Title></Card.Title>

                                <div>
                                    <Image
                                        fluid
                                        className='me-2'
                                        src={course.image_url}
                                        style={{ height: '250px' }}
                                    ></Image>
                                </div>
                            </Card.Body>
                            <Card.Footer className="text-muted">Good to go</Card.Footer>

                        </Card>


                        <Nav.Link> <Link to='/premium' style={{ textDecoration: 'none' }} >Premium</Link></Nav.Link>
                    </div>)}
                </div>

            }

            <div className="App">
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button variant="danger" onClick={toPdf}>Download Pdf</button>}
                </Pdf>
                <div >


                </div>
            </div>

        </div>
    );
};

export default Category; 