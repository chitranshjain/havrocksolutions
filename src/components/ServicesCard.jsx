import React from "react";
import Card from "react-bootstrap/Card";
import "../styles/ServicesCard.css";

function ServicesCard(props) {

    return <div className="services-card">
        <Card className="card">
            <Card.Body>
                <div className="row">
                    <div className="col">
                        <img className="service-img" src={props.img}/>
                    </div>
                    <div className="col">
                        <h3 className="service-title">{props.title}</h3>
                        <p className="service-desc">{props.desc}</p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    </div>
}

export default ServicesCard;