import React from 'react';
import Appionment from '../Appionment/Appionment';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Appionment/>
        </div>
    );
};

export default Home;