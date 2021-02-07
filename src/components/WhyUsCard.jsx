import React from "react";
import Card from "react-bootstrap/Card";
import "../styles/WhyUsCard.css";

function WhyUsCard(props) {
    return <div className="why-us-card">
        <Card className="why-card">
            <Card.Body>
                <img className="reason-img" src={props.img} />
                <h3 className="reason-title">{props.title}</h3>
                <p className="reason-desc">{props.desc}</p>
            </Card.Body>
        </Card>
    </div>
}

export default WhyUsCard;