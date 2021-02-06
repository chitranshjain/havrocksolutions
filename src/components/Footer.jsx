import React from "react";
import "../styles/Footer.css";

function Footer() {

    const today = new Date();
    const year = today.getFullYear();

    return <div className="footer">
    <h6 className="footer-text">© {year} Havrock Solutions</h6>
    </div>
}

export default Footer;