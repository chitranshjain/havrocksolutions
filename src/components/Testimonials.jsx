import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Testimonial from "./Testimonial";
import "../styles/Testimonial.css";
import myimage from "../assets/MyImage2.jpg";
import aditya from "../assets/aditya.jpg";

function TestimonialCarousel() {
    return <div data-aos="fade-in" id="testimonials">
    <h2 className="testimonial-title">TESTIMONIALS</h2>
    <p className="testimonial-text">Hear what our clients have to say about our services.</p>
        <Carousel>
            <Carousel.Item>
                <Testimonial img={myimage} feedback="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices eu diam in ultrices. In sed ultricies nibh, id consectetur lacus. Maecenas vulputate eros ut quam aliquet, at dignissim nulla ultrices. Pellentesque hendrerit vitae turpis eget maximus. Aenean rutrum erat nec bibendum pharetra." name="Chitransh Jain"/>
            </Carousel.Item>
            <Carousel.Item>
                <Testimonial img={aditya} feedback="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices eu diam in ultrices. In sed ultricies nibh, id consectetur lacus. Maecenas vulputate eros ut quam aliquet, at dignissim nulla ultrices. Pellentesque hendrerit vitae turpis eget maximus. Aenean rutrum erat nec bibendum pharetra." name="Aditya Singh"/>
            </Carousel.Item>
        </Carousel>
    </div>
}

export default TestimonialCarousel;