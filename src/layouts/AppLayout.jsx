import React, { useEffect } from 'react';

// components
import Topbar from '../components/Topbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AppLayout = ({children}) => {

    // sticky navbar animation
    useEffect(() => {
        const header = document.querySelector('.header');
        const carousel = document.querySelector('.carousel');

        window.onscroll = () => {
            const scrollTop = document.documentElement.scrollTop;

            if (scrollTop > header.offsetHeight) {
                header.classList.add('active');

                if (carousel !== null) {
                    carousel.style.marginTop = header.offsetHeight + 'px';
                }
            } else {
                header.classList.remove('active');

                if (carousel !== null) {
                    carousel.style.marginTop = 0 + 'px';
                }
            }
        }
    });

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