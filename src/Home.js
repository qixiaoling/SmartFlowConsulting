import React from 'react';
import HeroSection from "./Component/HeroSection/HeroSection";
import Clients from "./Clients";
import Footer from "./Footer";
import AboutMe from "./AboutMe";
import Services from "./Component/Services/Services";

function Home(){
    return(
        <>
            <HeroSection/>
            <Services/>

        </>
    )
}
export default Home