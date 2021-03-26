import React, { Component } from 'react';
import Hero from '../../components/Hero/Hero';
import DataVisuals from '../../components/DataVisuals/DataVisuals';
import Features from '../../components/Features/Features';
import Screenflow from '../../components/Screenflow/Screenflow';
import Banner from '../../components/Banner/Banner';


export default class LandingPage extends Component {

    render() {
        return (
            <>
                <Hero/>
                <DataVisuals/>
                <Features/>
                <Screenflow/>
                <Banner/>
            </>
        );
    }
}

 