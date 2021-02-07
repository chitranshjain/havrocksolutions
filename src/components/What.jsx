import React from "react";
import "../styles/What.css";
import AOS from "aos";
import "aos/dist/aos.css";
import WhyUsCard from "./WhyUsCard";
import clock from "../assets/clock.png";
import trust from "../assets/trust.png";
import satisfaction from "../assets/satisfaction.png";
import excellence from "../assets/excellence.png";

function What() {

    AOS.init({
        duration: 1500
    });

    return <div id="why">
        <h2 data-aos="zoom-in-up" className="what-title">WHY US?</h2>
        <div className="row reasons-row">
            <div data-aos="fade-down" data-aos-duration="3000" className="col col-lg-3 col-sm-12 ontime">
                <WhyUsCard img={clock} title="On time delivery" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra diam sit amet nunc luctus semper. Donec vitae lacus purus. Nunc pulvinar urna sit amet posuere auctor. Praesent euismod neque sit amet commodo lobortis." />
            </div>
            <div data-aos="fade-up" data-aos-duration="1500" className="col col-lg-3 col-sm-12 trust">
                <WhyUsCard img={trust} title="Trusted" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra diam sit amet nunc luctus semper. Donec vitae lacus purus. Nunc pulvinar urna sit amet posuere auctor. Praesent euismod neque sit amet commodo lobortis." />
            </div>
            <div data-aos="fade-down" data-aos-duration="3000" className="col col-lg-3 col-sm-12 quality">
                <WhyUsCard img={excellence} title="Quality" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra diam sit amet nunc luctus semper. Donec vitae lacus purus. Nunc pulvinar urna sit amet posuere auctor. Praesent euismod neque sit amet commodo lobortis." />
            </div>
            <div data-aos="fade-up" data-aos-duration="1500" className="col col-lg-3 col-sm-12 satisfaction">
                <WhyUsCard img={satisfaction} title="Customer Satisfaction" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra diam sit amet nunc luctus semper. Donec vitae lacus purus. Nunc pulvinar urna sit amet posuere auctor. Praesent euismod neque sit amet commodo lobortis." />
            </div>
        </div>
    </div>
}

export default What;