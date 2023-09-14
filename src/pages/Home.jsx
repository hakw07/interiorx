import React from 'react';
import Topbar from '../components/Topbar';
import Header from '../components/Header';

const Home = () => {
    return (
        <div>
            <Topbar/>
            <Header/>
            <div className="container">
                <h1>Hello!</h1>
            </div>
        </div>
    );
}

export default Home;