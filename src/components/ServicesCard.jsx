import React from "react";
import Card from "react-bootstrap/Card";
import "../styles/ServicesCard.css";

function ServicesCard(props) {

    return <div className="services-card">
        <Card className="service-card">
            <Card.Body>
                        <img className="service-img" src={props.img}/>
                        <h3 className="service-title">{props.title}</h3>
            </Card.Body>
        </Card>
    </div>
}

export default ServicesCard;