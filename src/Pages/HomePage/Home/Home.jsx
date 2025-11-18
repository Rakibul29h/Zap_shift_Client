import React from 'react';
import Banner from '../Banner/Banner';
import HowItWork from '../HowItWork/HowItWork';
import Services from '../Services/Services';
import Brands from '../brands/Brands';
import Reviews from '../Reviews/Reviews';
import Support from '../Support/Support';
import Merchant from '../Merchant/Merchant';
import FAQ from '../FAQ/FAQ';
const reviewPromise = fetch('/reviews.json').then(res=>res.json());
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWork></HowItWork>
            <Services></Services>
            <Brands></Brands>
            <Support></Support>
            <Merchant></Merchant>
            <Reviews reviewPromise={reviewPromise}></Reviews>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;