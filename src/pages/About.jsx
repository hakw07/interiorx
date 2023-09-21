import React from 'react';
import AppLayout from '../layouts/AppLayout';
import BreadCrumb from '../components/BreadCrumb';

import { FaQuoteLeft } from 'react-icons/fa';

// images
import AboutImage01 from '../assets/images/exclusive/03.jpg';
import AboutImage02 from '../assets/images/construction/01.jpg';

const About = () => {
    return (
        <AppLayout>
            <BreadCrumb page="about" />
            <div className="about container-xl">
                <div className="aboutWrap">
                    <div className="aboutImage">
                        <img src={ AboutImage01} alt="about-img"/>
                    </div>
                    <div className="aboutDesc">
                        <h3>Welcome to Interiorx!</h3>
                        <h1>Best Interior Solutions Here</h1>
                        <p>Atque molestias illo consectetur odio laborum libero consectetur accusamus reiciendis molestias
                            laboriosam omnis dolor cupiditate fugit iusto perferendis praesentium eos excepturi magnam
                            corporis earum magnam est cumque commodi voluptate distinctio perspiciatis aperiam rerum quae
                            soluta quam incidunt quis beatae corrupti eaque.</p>
                        <p>Dacilis in corporis ad itaque minus necessitatibus laudantium quod inventore sint repellat nam
                            lorem ipsum dolor sit amet consectetur adipisicing elit atque molestias illo consectetur odio
                            laborum libero doloremque. </p>
                        <button>Read More</button>
                    </div>
                </div>

                <div className="aboutWrap">
                    <div className="aboutDesc">
                        <h3>We Build & Install</h3>
                        <h1>Your Dream Construction Project</h1>
                        <p>Atque molestias illo consectetur odio laborum libero consectetur accusamus reiciendis molestias
                            laboriosam omnis dolor cupiditate fugit iusto perferendis praesentium eos excepturi magnam
                            corporis earum magnam est cumque commodi voluptate distinctio perspiciatis aperiam rerum quae
                            soluta quam incidunt quis beatae corrupti eaque.</p>
                        <p>Dacilis in corporis ad itaque minus necessitatibus laudantium quod inventore sint repellat nam
                            lorem ipsum dolor sit amet consectetur adipisicing elit atque molestias illo consectetur odio
                            laborum libero doloremque. </p>
                        <button>Read More</button>
                    </div>

                    <div className="aboutImage">
                        <img src={AboutImage02} alt="about-img"/>
                    </div>
                </div>
            </div>

            <div className="customerReview">
                <div className="reviewTitle">
                    <h1><span>Customer</span> Review</h1>
                </div>
                <div className="reviewCards">
                    <div className="card">
                        <FaQuoteLeft className="reviewIcon" />
                        <p className="reviewDesc text-white mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolore
                            cumque commodi neque rerum. Excepturi quibusdam ab quod qui quisquam numquam neque incidunt expedita
                            iure alias eos saepe inventore cum quam quidem provident praesentium. Facere cum delectus aut eum
                            totam.</p>
                        <p className="text-white">- Jhon Doe, USA</p>
                    </div>

                    <div className="card">
                        <FaQuoteLeft className="reviewIcon" />
                        <p className="reviewDesc text-white mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolore
                            cumque commodi neque rerum. Excepturi quibusdam ab quod qui quisquam numquam neque incidunt expedita
                            iure alias eos saepe inventore cum quam quidem provident praesentium. Facere cum delectus aut eum
                            totam.</p>
                        <p className="text-white">- Jhon Doe, USA</p>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default About;