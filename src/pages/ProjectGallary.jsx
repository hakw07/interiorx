import React from 'react';
import AppLayout from '../layouts/AppLayout';
import BreadCrumb from '../components/BreadCrumb';

import { FaLink } from 'react-icons/fa';

// images
import InteriorImg01 from '../assets/images/interior/01.jpg';
import InteriorImg02 from '../assets/images/interior/02.jpg';
import InteriorImg03 from '../assets/images/interior/03.jpg';
import InteriorImg04 from '../assets/images/interior/04.jpg';
import InteriorImg05 from '../assets/images/interior/05.jpg';
import InteriorImg06 from '../assets/images/interior/06.jpg';
import InteriorImg07 from '../assets/images/interior/07.jpg';
import InteriorImg08 from '../assets/images/interior/08.jpg';
import InteriorImg09 from '../assets/images/interior/09.jpg';
import InteriorImg10 from '../assets/images/interior/10.jpg';
import InteriorImg11 from '../assets/images/interior/11.jpg';
import InteriorImg12 from '../assets/images/interior/12.jpg';

const ProjectGallary = () => {
    return (
        <AppLayout>
            <BreadCrumb page="project-interior" />

            <div className="container-lg gallary">
                <div className="gallaryContents">
                    <div className="filterItems projectItems" data-aos="fade-up">                    
                        <div className="card">
                            <img src={InteriorImg03} alt="projectImg"/>
                            <p className="hoverText"><FaLink/></p>
                        </div>

                        <div className="card">
                            <img src={InteriorImg02} alt="projectImg"/>
                            <p className="hoverText"><FaLink/></p>
                        </div>

                        <div className="card">
                            <img src={InteriorImg01} alt="projectImg"/>
                            <p className="hoverText"><FaLink/></p>
                        </div>
                        
                        <div className="card">
                            <img src={InteriorImg07} alt="projectImg"/>
                            <p className="hoverText"><FaLink/></p>
                        </div>

                        <div className="card">
                            <img src={InteriorImg04} alt="projectImg"/>
                            <p className="hoverText"><FaLink/></p>
                        </div>

                        <div className="card">
                            <img src={InteriorImg06} alt="projectImg"/>
                            <p className="hoverText"><FaLink/></p>
                        </div>

                        <div className="card">
                            <img src={InteriorImg05} alt="projectImg"/>
                            <p className="hoverText"><FaLink/></p>
                        </div>

                        <div className="card">
                            <img src={InteriorImg11} alt="projectImg"/>
                            <p className="hoverText"><FaLink/></p>
                        </div>

                        <div className="card">
                            <img src={InteriorImg12} alt="projectImg"/>
                            <p className="hoverText"><FaLink/></p>
                        </div>

                        <div className="card">
                            <img src={InteriorImg08} alt="projectImg"/>
                            <p className="hoverText"><FaLink/></p>
                        </div>

                        <div className="card">
                            <img src={InteriorImg09} alt="projectImg"/>
                            <p className="hoverText"><FaLink/></p>
                        </div>

                        <div className="card">
                            <img src={InteriorImg10} alt="projectImg"/>
                            <p className="hoverText"><FaLink/></p>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default ProjectGallary;