import React from 'react';
import AppLayout from '../layouts/AppLayout';
import HeroSlider from '../components/HeroSlider';

import ServiceCards from '../components/ServiceCards';
import ServiceDetailsCard from '../components/ServiceDetailsCard';

const Home = () => {
    return (
        <AppLayout>
            <HeroSlider/> 
            <ServiceCards/>
            <ServiceDetailsCard type="construction"/>
            <ServiceDetailsCard type="interior"/>
        </AppLayout>
    );
}

export default Home;