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
import ConstructionImg01 from '../assets/images/construction/01.jpg';
import ConstructionImg02 from '../assets/images/construction/02.jpg';
import ConstructionImg03 from '../assets/images/construction/03.jpg';
import ConstructionImg04 from '../assets/images/construction/04.jpg';
import ConstructionImg05 from '../assets/images/construction/05.jpg';
import ConstructionImg06 from '../assets/images/construction/06.jpg';
import ConstructionImg07 from '../assets/images/construction/07.jpg';
import ConstructionImg08 from '../assets/images/construction/08.jpg';
import ConstructionImg09 from '../assets/images/construction/09.jpg';
import ConstructionImg10 from '../assets/images/construction/10.jpg';
import ConstructionImg11 from '../assets/images/construction/11.jpg';
import ConstructionImg12 from '../assets/images/construction/12.jpg';

const ProjectGallary = ({ type="construction" }) => {
    return (
        <AppLayout>
            <BreadCrumb page="project-interior" />

            <div className="container-lg gallary">
                <div className="gallaryContents">
                    <div className="filterItems projectItems" data-aos="fade-up">                    
                        <div className="card">
                            {type === "interior" && <img src={InteriorImg03} alt="projectImg"/>}
                            {type === "construction" && <img src={ConstructionImg03} alt="projectImg"/>}
                            <p className="hoverText"><FaLink/></p>
                        </div>

                        <div className="card">
                            {type === "interior" && <img src={InteriorImg02} alt="projectImg"/>}
                            {type === "construction" && <img src={ConstructionImg02} alt="projectImg"/>}
                            <p className="hoverText"><FaLink/></p>
                        </div>

                        <div className="card">
                            {type === "interior" && <img src={InteriorImg01} alt="projectImg"/>}
                            {type === "construction" && <img src={ConstructionImg01} alt="projectImg"/>}
                            <p className="hoverText"><FaLink/></p>
                        </div>
                        
                        <div className="card">
                            {type === "interior" && <img src={InteriorImg07} alt="projectImg"/>}
                            {type === "construction" && <img src={ConstructionImg07} alt="projectImg"/>}
                            <p className="hoverText"><FaLink/></p>
                        </div>

                        <div className="card">
                            {type === "interior" && <img src={InteriorImg04} alt="projectImg"/>}
                            {type === "construction" && <img src={ConstructionImg04} alt="projectImg"/>}
                            <p className="hoverText"><FaLink/></p>
                        </div>

                        <div className="card">
                            {type === "interior" && <img src={InteriorImg06} alt="projectImg"/>}
                            {type === "construction" && <img src={ConstructionImg06} alt="projectImg"/>}
                            <p className="hoverText"><FaLink/></p>
                        </div>

                        <div className="card">
                            {type === "interior" && <img src={InteriorImg05} alt="projectImg"/>}
                            {type === "construction" && <img src={ConstructionImg05} alt="projectImg"/>}
                            <p className="hoverText"><FaLink/></p>
                        </div>

                        <div className="card">
                            {type === "interior" && <img src={InteriorImg11} alt="projectImg"/>}
                            {type === "construction" && <img src={ConstructionImg11} alt="projectImg"/>}
                            <p className="hoverText"><FaLink/></p>
                        </div>

                        <div className="card">
                            {type === "interior" && <img src={InteriorImg12} alt="projectImg"/>}
                            {type === "construction" && <img src={ConstructionImg12} alt="projectImg"/>}
                            <p className="hoverText"><FaLink/></p>
                        </div>

                        <div className="card">
                            {type === "interior" && <img src={InteriorImg08} alt="projectImg"/>}
                            {type === "construction" && <img src={ConstructionImg08} alt="projectImg"/>}
                            <p className="hoverText"><FaLink/></p>
                        </div>

                        <div className="card">
                            {type === "interior" && <img src={InteriorImg09} alt="projectImg"/>}
                            {type === "construction" && <img src={ConstructionImg09} alt="projectImg"/>}
                            <p className="hoverText"><FaLink/></p>
                        </div>

                        <div className="card">
                            {type === "interior" && <img src={InteriorImg10} alt="projectImg"/>}
                            {type === "construction" && <img src={ConstructionImg10} alt="projectImg"/>}
                            <p className="hoverText"><FaLink/></p>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default ProjectGallary;