import React from 'react';
import HeroArea from '../components/HeroArea/HeroArea';
import HomeAbout from '../components/HomeAbout/HomeAbout';
import HomeService from '../components/HomeService/HomeService';

const Home = () => {
    return (
        <div>
            <HeroArea></HeroArea>
            <HomeAbout></HomeAbout>
            <HomeService></HomeService>
        </div>
    );
};

export default Home;