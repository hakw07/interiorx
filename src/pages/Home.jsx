import React from 'react';
import AppLayout from '../layouts/AppLayout';
import HeroSlider from '../components/HeroSlider';

import InteriorImg1 from '../assets/images/interior/01.jpg';
import InteriorImg9 from '../assets/images/interior/09.jpg';
import ConstructionImg1 from '../assets/images/construction/01.jpg';
import ConstructionImg8 from '../assets/images/construction/08.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <AppLayout>
            <HeroSlider/> 

            {/* service cards */}
            <div id="serviceCards">
                <div className="section-title pt-5">
                    <h1 className="text-center text-uppercase"><span>Our</span> Services</h1>
                    <p className="text-center text-uppercase">What we do</p>
                </div>

                <div className="container-lg pt-4 pb-5 d-flex flex-wrap justify-content-center justify-content-lg-start" data-aos="fade-up" data-aos-duration="700">
                    <div className="card mb-5 ms-2 me-2 flex-grow-1">
                        <img src={InteriorImg1} alt="interior"/>

                        <div className="cardTextContent">
                            <p>Interior Design</p>
                        </div>
                    </div>

                    <div className="card mb-5 ms-2 me-2 flex-grow-1">
                        <img src={ConstructionImg1} alt="architecture"/>

                        <div className="cardTextContent">
                            <p>Architecture</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="construction" className="container-lg pt-4 pb-5" data-aos="fade-up" data-aos-duration="700">
                <div className="serviceDetailsCard construction-content pt-4 pb-4">
                    <div className="serviceDetailsCardImg">
                        <img src={ConstructionImg8} alt="construction"/>
                    </div>

                    <div className="serviceDetailsCardText construction-text">
                        <h2>Construction</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit repellendus ipsa libero totam
                            quod est cumque nobis architecto fugiat nesciunt ducimus eius Quidem sit commodi nemo quaerat magnam
                            nostrum voluptatibus fugiat reiciendis ratione pariatur totam voluptatem minima sapiente harum.</p>
                        <div style={{margin: '3rem 0 0 2rem'}}>
                            <Link to="/construction" className="learnMoreBtn">Learn more</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div id="interior" className="container-lg pt-4 pb-5" data-aos="fade-up" data-aos-duration="700">
                <div className="serviceDetailsCard interior-content pt-4 pb-4">
                    <div className="serviceDetailsCardImg">
                        <img src={InteriorImg9} alt="interior"/>
                    </div>

                    <div className="serviceDetailsCardText interior-text">
                        <h2>Interiors</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit repellendus ipsa libero totam
                            quod est cumque nobis architecto fugiat nesciunt ducimus eius Quidem sit commodi nemo quaerat magnam
                            nostrum voluptatibus fugiat reiciendis ratione pariatur totam voluptatem minima sapiente harum.</p>
                        <div style={{margin: '3rem 0 0 2rem'}}>
                            <Link to="/interior" className="learnMoreBtn">Learn more</Link>
                        </div>
                    </div>
                </div>
            </div>

        </AppLayout>
    );
}

export default Home;