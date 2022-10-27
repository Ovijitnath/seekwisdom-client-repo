import React from 'react';
import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    return (
        <div className='mt-3'>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img className="d-block w-100"
                        src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&w=1000&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.section.io/engineering-education/how-to-make-an-image-carousel-for-your-website/hero.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://icodemag.com/wp-content/uploads/2019/06/Screen-Shot-2019-06-08-at-9.22.15-PM-650x300.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br />
            <br />

            <section className="pt-24 pb-36 bg-white overflow-hidden">
                <div className="container pb-5">
                    <div className="mw-md-md mx-auto text-center mb-24">
                        <h2 className="fs-10 fw-semibold text-secondary mb-5">Our happy team</h2>
                        <p className="text-muted">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>
                    <div className="container">
                        <div className="row g-16">
                            <div className="col-12 col-md-6">
                                <div className="container">
                                    <div className="row g-7">
                                        <div className="col-auto">
                                            <Image style={{ height: '100px' }} roundedCircle src="https://static.intercomassets.com/avatars/32419/square_128/Cory-Brown-Profile-1496848041.jpg" alt="" />
                                        </div>
                                        <div className="col">
                                            <p className="fs-17 text-muted mb-6">Lorem ipsum dolor sit amet, consec tetur adipis cing elit. Eleifend id vulpu tate amet nunc. Elit sagittis sollici tudin cursus aliquam quis dui. Ut curabitur morbi nunc sit leo tellus neque dolor. Amet sem egestas.</p>
                                            <h3 className="fs-17 mb-0">Darrell Steward, CEO</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 pt-5">
                                <div className="container">
                                    <div className="row g-7">
                                        <div className="col-auto">
                                            <Image style={{ height: '100px' }} roundedCircle src="https://www.contentednet.com/dam/corporate/assets/profiles/graciela.rissi.jpg" alt="" />
                                        </div>
                                        <div className="col">
                                            <p className="fs-17 text-muted mb-6">Lorem ipsum dolor sit amet, consec tetur adipis cing elit. Eleifend id vulpu tate amet nunc. Elit sagittis sollici tudin cursus aliquam quis dui. Ut curabitur morbi nunc sit leo tellus neque dolor. Amet sem egestas.</p>
                                            <h3 className="fs-17 mb-0">Cody Fisher, CTO</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 pt-5">
                                <div className="container">
                                    <div className="row g-7">
                                        <div className="col">
                                            <p className="fs-17 text-muted mb-6">Lorem ipsum dolor sit amet, consec tetur adipis cing elit. Eleifend id vulpu tate amet nunc. Elit sagittis sollici tudin cursus aliquam quis dui. Ut curabitur morbi nunc sit leo tellus neque dolor. Amet sem egestas.</p>
                                            <h3 className="fs-17 mb-0">Guy Hawkins, CMO</h3>
                                        </div>
                                        <div className="col-auto">
                                            <Image style={{ height: '100px' }} roundedCircle src="https://static-exp1.licdn.com/sc/p/com.linkedin.jobs-guest-frontend%3Ajobs-guest-frontend-static-content%2B1.0.102/f/%2Fjobs-guest-frontend%2Fimages%2Fcommon%2Fpeople%2Fuser17.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 pt-5">
                                <div className="container">
                                    <div className="row g-7">
                                        <div className="col">
                                            <p className="fs-17 text-muted mb-6">Lorem ipsum dolor sit amet, consec tetur adipis cing elit. Eleifend id vulpu tate amet nunc. Elit sagittis sollici tudin cursus aliquam quis dui. Ut curabitur morbi nunc sit leo tellus neque dolor. Amet sem egestas.</p>
                                            <h3 className="fs-17 mb-0">Annette White, COO</h3>
                                        </div>
                                        <div className="col-auto">
                                            <Image style={{ height: '100px' }} roundedCircle src="https://static.intercomassets.com/avatars/5494622/square_128/B82A2821-1649720452.JPG" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Home;