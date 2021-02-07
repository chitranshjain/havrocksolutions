import React from "react";
import home from "../assets/home.png";
import "../styles/Home.css";
import AOS from "aos";
import 'aos/dist/aos.css';

function Home() {

    AOS.init({
        duration: 3000
    });

    return <div id="home">
    <div className="row container-fluid">
        <div className="col-lg-6 col-sm-12 container-fluid name-container">
            <div data-aos="fade-up">
                <h1 className="head-title">HAVROCK</h1>
            </div>
            <div data-aos="fade-up">
                <h1 className="head-title">SOLUTIONS</h1>
            </div>
            
            <div data-aos="fade-down" className="home-desc desc-main">
                <h2 className="desc">We create</h2>
            </div>
            <div data-aos="fade-down" className="home-desc">
                <h2 className="desc">powerful, innovative and futuristic</h2>
            </div>
            <div data-aos="fade-down" className="home-desc">
                <h2 className="desc">business solutions.</h2>
            </div>
        </div>
        <div className="col-lg-6 col-sm-0 container-fluid"></div>
    </div>
    </div>
}

export default Home;