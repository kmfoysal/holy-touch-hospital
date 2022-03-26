import React from 'react';
import HeroArea from '../components/HeroArea/HeroArea';
import HomeAbout from '../components/HomeAbout/HomeAbout';
import HomeService from '../components/HomeService/HomeService';
import Subscription from '../components/Subscription/Subscription';

const Home = () => {
    return (
        <div>
            <HeroArea></HeroArea>
            <HomeAbout></HomeAbout>
            <HomeService></HomeService>
            <Subscription></Subscription>
        </div>
    );
};

export default Home;