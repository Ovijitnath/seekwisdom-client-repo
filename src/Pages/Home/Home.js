import React from 'react';
import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    return (
        <div className='mt-2'>
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
                        <p className="text-muted fs-4">At Better Work, we are driven by shared standards of excellence, guided by the same integrity, and motivated by a common ambition to improve lives.</p>
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
                                            <p className="fs-17 text-muted mb-6">What's pleasing about this particular page is the simplicity: The grid design provides a modern feel, and clicking on a face opens a box with more information about the team member, including their bio, credentials, and social profiles.</p>
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
                                            <p className="fs-17 text-muted mb-6">Below images are brief descriptions of each member. Notice how Philly Reps has made each description roughly the same length to maintain balance and alignment between grid elements. Most won’t notice this detail, but it results in a page with maximum readability.</p>
                                            <h3 className="fs-17 mb-0">Cody Fisher, CTO</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 pt-5">
                                <div className="container">
                                    <div className="row g-7">
                                        <div className="col">
                                            <p className="fs-17 text-muted mb-6">Each employee at the London-based marketing agency has a trading card-style profile detailing their actual marketing accomplishments and personal facts, as well as their fictional superhero abilities. It's a quirky twist that gives visitors a colorful snapshot of the agency's team, highlighting both their impressive experience and friendly culture.</p>
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
                                            <p className="fs-17 text-muted mb-6">overing over each team member's picture produces a darker alternative almost like an image negative, revealing the employee’s name along with an outfit change. This is a great example of a minimal, accessible "Meet the Team" page that manages to look cool and introduce the faces behind the agency without going over the top.</p>
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