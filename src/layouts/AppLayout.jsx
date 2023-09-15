import React from 'react';

// components
import Topbar from '../components/Topbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AppLayout = ({children}) => {
    return (
        <>
            <Topbar/>
            <Header/>
            {children}
            <Footer/>
        </>
    );
}

export default AppLayout;