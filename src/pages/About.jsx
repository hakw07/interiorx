import React from 'react';
import AppLayout from '../layouts/AppLayout';
import BreadCrumb from '../components/BreadCrumb';

const About = () => {
    return (
        <AppLayout>
            <BreadCrumb page="about" />
        </AppLayout>
    );
}

export default About;