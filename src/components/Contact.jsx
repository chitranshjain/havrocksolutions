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
        <h2 data-aos="fade-up" className="contact-title">Contact Us</h2>
        <div className="row">
            <div data-aos = "fade-down" className="col">
                <img className="contact-img" src={contact} />
                <h4 className="contact-us">Have something to discuss? Get in touch</h4>
                <div className="contact-details">
                    <div className="detail"><i class="fas fa-phone-alt"></i>&emsp;&emsp;+91-9876543210</div>
                    <div className="detail"><i class="fas fa-envelope"></i>&emsp;&emsp;hello@mymail.com</div>
                    <div className="detail"><i class="fas fa-map-marker-alt"></i>&emsp;&emsp;&nbsp;Flat No 703, Tower L, Homes 121, Gh 001, Sector 121, Noida &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gautam Buddha Nagar, UP - 201307</div>
                </div>
            </div>
            <div data-aos = "fade-down" className="col">
                <img className="contact-img email-img" src={email} />
                <div className="contact-form">
                    <Form>
                        <Form.Group controlId="name">
                            <Form.Label className="form-label">Name</Form.Label>
                            <Form.Control className="form-input" type="text" placeholder="Eg. John Doe" />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label className="form-label">Email</Form.Label>
                            <Form.Control className="form-input" type="email" placeholder="Eg. johndoe@example.com" />
                        </Form.Group>
                        <Form.Group controlId="phone">
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