import React from 'react';
import HeroSection from "./Component/HeroSection/HeroSection";
import About from "./Component/About/About";
import Services from "./Component/Services/Services";

function Home(){
    return(
        <>
            <HeroSection/>
            <Services/>
            <About/>

        </>
    )
}
export default Home