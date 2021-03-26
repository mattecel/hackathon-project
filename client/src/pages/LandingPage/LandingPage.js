import React, { Component } from 'react';
import Hero from '../../components/Hero/Hero';
import Features from '../../components/Features/Features';
import Screenflow from '../../components/Screenflow/Screenflow';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';


export default class LandingPage extends Component {

    render() {
        return (
            <>
                <Hero/>
                <Features display={false} heading='How It Works'/>
                <Screenflow/>
                <Features display={true} heading='Resources'/>
                <Banner/>
                <Footer />
            </>
        );
    }
}
