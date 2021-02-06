import React from "react";
import home from "../assets/home.png";
import "../styles/Home.css";
import AOS from "aos";
import 'aos/dist/aos.css';

function Home() {

    AOS.init({
        duration: 2500
    });

    return <div id="home">
    <img data-aos="fade-up" src={home} className="home-img"></img>
    <div data-aos="zoom-out" className="heading">
    <h1 className="head-title">Havrock</h1>
    <h1 className="head-title"> Solutions</h1>
    </div>
    </div>
}

export default Home;