import React from "react";
import "../styles/Testimonial.css";

function Testimonial(props) {
    return <div className="testimonial-container container-fluid">
        <div className="row testimonial-row">
            <div className="col col-lg-3 col-sm-12">
                <img src={props.img} className="testimonial-img" />
            </div>
            <div className="col col-lg-9 col-sm-12 testimonial-main">
                <div className="testimonial-content">
                    <p className="testimonial-feedback">{props.feedback}</p>
                </div>
                <div className="testimonial-detail">
                    <h5 className="testimonial-name"> - {props.name}</h5>
                </div>
            </div>
        </div>
    </div>
} 

export default Testimonial;