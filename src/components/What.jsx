import React from "react";
import ServicesCard from "./ServicesCard";
import "../styles/What.css";
import AOS from "aos";
import "aos/dist/aos.css";
import openerp from "../assets/openerp.png";
import reactnative from "../assets/reactnative.png";

function What() {

    AOS.init({
        duration: 3000
    });

    return <div id="what">
        <h2 data-aos="flip-left" className="what-title">What We Do?</h2>
        <div data-aos="flip-up" className="services">
            <ServicesCard duration="1000" img={openerp} title="OpenERP" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Amet volutpat consequat mauris nunc congue. Varius quam quisque id diam vel quam elementum pulvinar etiam."/>
            <ServicesCard duration="6000" img={reactnative} title="React Native" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Amet volutpat consequat mauris nunc congue. Varius quam quisque id diam vel quam elementum pulvinar etiam."/>
        </div>
    </div>
}

export default What;