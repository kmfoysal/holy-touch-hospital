import React from 'react';
import HeroArea from '../components/HeroArea/HeroArea';
import HomeAbout from '../components/HomeAbout/HomeAbout';
import HomeService from '../components/HomeService/HomeService';
import Subscription from '../components/Subscription/Subscription';
import WhyUs from '../components/WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <HeroArea/>
            <HomeAbout/>
            <HomeService/>
            <WhyUs/>
            <Subscription/>
        </div>
    );
};

export default Home;