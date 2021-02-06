import React from "react";
import Header from "./Header";
import Home from "./Home";
import AboutUs from "./About";
import What from "./What";
import ContactUs from "./Contact";
import Footer from "./Footer";
import AOS from "aos";

function App() {

    AOS.init();

    return <div>
        <Header />
        <Home />
        <AboutUs />
        <What />
        <ContactUs />
        <Footer />
    </div>
}

export default App;