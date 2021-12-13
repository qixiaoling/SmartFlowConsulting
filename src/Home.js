import React from 'react';
import HeroSection from "./Component/HeroSection/HeroSection";
import About from "./Component/About/About";
import Services from "./Component/Services/Services";
import Clients from "./Component/Clients/Clients";
import Banner from "./Component/Banner/Banner";


function Home(){
    return(
        <>
            <HeroSection/>
            <Services/>
            <About/>
            <Clients/>
            <Banner/>

        </>
    )
}
export default Home