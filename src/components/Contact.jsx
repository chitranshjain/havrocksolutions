import React from "react";
import "../styles/Contact.css";
import contact from "../assets/contact.png";
import email from "../assets/email.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AOS from "aos";
import "aos/dist/aos.css";

function ContactUs() {

    AOS.init({
        duration: 2000
    });

    return <div id="contact">
        <h2 className="contact-title">CONTACT US</h2>
        <p className="contact-text">Have a project? Get it done by experts.</p>
        <div className="row">
            <div className="col-lg-6 col-sm-12 details-side">
                <img className="contact-img" src={contact} />
                <h4 className="contact-us">Here's how you can reach out to us.</h4>
                <div className="contact-details">
                    <div className="detail row"><div className="col-lg-1 col-sm-1 icon"><i className="fas fa fa-phone-alt"></i></div><div className="col-lg-11 col-sm-11">+91-9876543210</div></div>
                    <div className="detail row"><div className="col-lg-1 col-sm-1 icon"><i className="fas fa fa-envelope"></i></div><div className="col-lg-11 col-sm-11">hello@mymail.com</div></div>
                    <div className="detail row"><div className="col-lg-1 col-sm-1 icon"><i className="fas fa fa-map-marker-alt"></i></div><div className="col-lg-11 col-sm-11">Flat No 703, Tower L, Homes 121, Gh 001, Sector 121, Noida, Gautam Buddha Nagar, UP - 201307</div></div>
                </div>
            </div>
            <div className="col-lg-6 col-sm-12 mail-side">
                <img className="contact-img email-img" src={email} />
                <h4 className="contact-us">Drop your contact details here.</h4>
                <div className="contact-form">
                    <Form>
                        <Form.Group className = "form-group" controlId="name">
                            <Form.Label className="form-label">Name</Form.Label>
                            <Form.Control className="form-input" type="text" placeholder="Eg. John Doe" />
                        </Form.Group>
                        <Form.Group className = "form-group" controlId="email">
                            <Form.Label className="form-label">Email</Form.Label>
                            <Form.Control className="form-input" type="email" placeholder="Eg. johndoe@example.com" />
                        </Form.Group>
                        <Form.Group className = "form-group" controlId="phone">
                            <Form.Label className="form-label">Phone</Form.Label>
                            <Form.Control className="form-input" type="text" placeholder="Eg. +91-9876543210" />
                        </Form.Group>
                        <Button className="form-btn" type="submit">Get in touch</Button>
                    </Form>
                </div>
            </div>
        </div>
    </div>
}

export default ContactUs;