import React from "react";
import about from "../assets/about.png";
import "../styles/About.css";
import AOS from "aos";
import 'aos/dist/aos.css';

function AboutUs() {

    AOS.init({duration: 3000});

    return <div id="about">
        <div className="row container-fluid">
            <div data-aos="fade-right" className="col-lg-6 col-sm-12">
                <img className="about-img" src={about}/>
            </div>
            <div data-aos="fade-left" className="col-lg-6 col-sm-12">
                <h2 className="about-title">About Us</h2>
                <p className="about-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Amet volutpat consequat mauris nunc congue. Varius quam quisque id diam vel quam elementum pulvinar etiam. Lacus luctus accumsan tortor posuere. Purus non enim praesent elementum facilisis leo vel. Tristique magna sit amet purus gravida. Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Venenatis lectus magna fringilla urna porttitor rhoncus dolor.</p>
                <p className="about-content">Faucibus nisl tincidunt eget nullam. Auctor augue mauris augue neque gravida in fermentum et. Consequat mauris nunc congue nisi vitae. Enim nulla aliquet porttitor lacus luctus accumsan. Aliquet bibendum enim facilisis gravida neque. Praesent tristique magna sit amet purus. Commodo quis imperdiet massa tincidunt nunc. Vulputate eu scelerisque felis imperdiet proin fermentum. Magna sit amet purus gravida quis blandit turpis cursus.</p>
            </div>
        </div>
    </div>
}

export default AboutUs;