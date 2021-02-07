import React from "react";
import Header from "./Header";
import Home from "./Home";
import AboutUs from "./About";
import What from "./What";
import ContactUs from "./Contact";
import Footer from "./Footer";
import TestimonialCarousel from "./Testimonials";
import AOS from "aos";

function App() {

    AOS.init({
        duration: 1500
    });

    return <div style={{overflow: "hidden", width: "100%"}}>
        <Header />
        <Home />
        <AboutUs />
        <What />
        <TestimonialCarousel />
        <ContactUs />
        <Footer />
    </div>
}

export default App;