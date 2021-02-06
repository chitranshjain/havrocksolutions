import React from "react";
import Card from "react-bootstrap/Card";
import "../styles/ServicesCard.css";

function ServicesCard(props) {

    return <div className="services-card">
        <Card className="card">
            <Card.Body>
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <img className="service-img" src={props.img}/>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <h3 className="service-title">{props.title}</h3>
                        <p className="service-desc">{props.desc}</p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    </div>
}

export default ServicesCard;