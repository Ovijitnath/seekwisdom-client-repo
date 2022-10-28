import React from 'react';
import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='mt-2'>
            <Carousel variant="light" >
                <Carousel.Item>
                    <img className="d-block w-100"
                        src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&w=1000&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='fs-2'>seekWisdom?</h3>
                        <p>If any of you lacks wisdom, let him ask God, who gives generously to all without reproach, and it will be given him.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.section.io/engineering-education/how-to-make-an-image-carousel-for-your-website/hero.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className='fs-2'>seekWisdom?</h3>
                        <p>But the wisdom from above is first pure, then peaceable, gentle, open to reason, full of mercy and good fruits, impartial and sincere.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://effectivechurch.com/wp-content/uploads/2018/08/wisdom.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className='fs-2'>seekWisdom?</h3>
                        <p>
                            Blessed is the one who finds wisdom, and the one who gets understanding.
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

            <hr />
            <br />
            <section className="pt-36 bg-light-light overflow-hidden">
                <div className="container">
                    <div className="row g-16">
                        <div className="col-12 col-md-6">
                            <div className="mw-md-xl">
                                <h2 className="fs-10 lh-sm mb-6">Get our mobile app to make the process faster.</h2>
                                <p className="fs-17 text-muted mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada tellus vestibulum, commodo pulvinar id fames nunc. Turpis leo turpis non, id ut nunc.</p>
                                <div className="row g-5">
                                    <div className="col-auto">
                                        <Link to="#">
                                            <img src="https://icgmasjid.org/wp-content/uploads/2021/08/PlayStore.png" alt="" />
                                        </Link>
                                    </div>
                                    <div className="col-auto">
                                        <Link ti="#">
                                            <img src="https://freeiconshop.com/wp-content/uploads/edd/app-store-badge-128x128.png" alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="d-flex justify-content-center">
                                <img class="img-fluid self-end" src="https://ps.w.org/appstore-reviews-viewer/assets/icon-256x256.png?rev=1164395" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </section >
        </div >
    );
};

export default Home;