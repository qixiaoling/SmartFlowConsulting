import React from 'react';
import HeroSection from "./HeroSection";
import Clients from "./Clients";
import Footer from "./Footer";
import AboutMe from "./AboutMe";
import Expertise from "./Component/Expertise/Expertise";

function Home(){
    return(
        <>
            <HeroSection />
            <Expertise/>
            {/*<AboutMe/>*/}
            <Clients />
            <Footer />
        </>
    )
}
export default Home