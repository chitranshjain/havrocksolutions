import React from "react";
import Card from "react-bootstrap/Card";
import "../styles/WhyUsCard.css";

function WhyUsCard(props) {
    return <div className="why-us-card">
        <div className="why-card">
                <img className="reason-img" src={props.img} />
                <h3 className="reason-title">{props.title}</h3>
                <p className="reason-desc">{props.desc}</p>
        </div>
    </div>
}

export default WhyUsCard;