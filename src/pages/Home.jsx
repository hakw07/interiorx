import React from 'react';
import AppLayout from '../layouts/AppLayout';
import HeroSlider from '../components/HeroSlider';

import ServiceImg1 from '../assets/images/interior/01.jpg';
import ServiceImg2 from '../assets/images/construction/01.jpg';

const Home = () => {
    return (
        <AppLayout>
            <HeroSlider/> 

            <div id="services">
                <div class="section-title pt-5">
                    <h1 class="text-center text-uppercase"><span>Our</span> Services</h1>
                    <p class="text-center text-uppercase">What we do</p>
                </div>

                <div class="container-lg pt-4 pb-5 d-flex flex-wrap justify-content-center justify-content-lg-start" data-aos="fade-up" data-aos-duration="700">
                    <div class="card mb-5 ms-2 me-2 flex-grow-1">
                        <img src={ServiceImg1} alt="interior"/>

                        <div class="card-text-content">
                            <p>Interior Design</p>
                        </div>
                    </div>

                    <div class="card mb-5 ms-2 me-2 flex-grow-1">
                        <img src={ServiceImg2} alt="architecture"/>

                        <div class="card-text-content">
                            <p>Architecture</p>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default Home;