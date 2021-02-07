import React from "react";
import "../styles/About.css";
import AOS from "aos";
import 'aos/dist/aos.css';
import ServicesCard from "./ServicesCard";
import openerp from "../assets/openerp.png";
import reactnative from "../assets/reactnative.png";
import unity from "../assets/unity.png";
import mobile from "../assets/mobile.png";

function AboutUs() {

    AOS.init({duration: 1500});

    return <div id="about">
            <div className="row">
                <div data-aos="fade-right" className="col col-lg-6 col-sm-12 about-content">
                    <div className="about-title">ABOUT US</div>
                    <div className="about-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis nisi a neque accumsan venenatis. Sed leo massa, commodo sed nibh eget, hendrerit semper nibh. In sodales placerat lorem, sed rhoncus nulla. Etiam eget tempor nisl. Nulla efficitur, magna in pellentesque cursus, lacus erat convallis diam, nec iaculis metus metus ac neque</div>
                    <div className="about-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis nisi a neque accumsan venenatis. Sed leo massa, commodo sed nibh eget, hendrerit semper nibh. In sodales placerat lorem, sed rhoncus nulla. Etiam eget tempor nisl. Nulla efficitur, magna in pellentesque cursus, lacus erat convallis diam, nec iaculis metus metus ac neque</div>
                </div>
                <div data-aos="fade-left" className="col services-container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <ServicesCard img={openerp} title="ERP Development"/>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <ServicesCard img={reactnative} title="React Native" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <ServicesCard img={unity} title="Game Development" />
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <ServicesCard img={mobile} title="Mobile Development"  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
}

export default AboutUs;