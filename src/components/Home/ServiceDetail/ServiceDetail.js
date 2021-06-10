import React from 'react';
import "./ServiceDetail.css"

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center service-area p-4">
            <div>
            <img style={{width:"60px"}} src={service.imageURL} alt=""className="mb-2"/>
            <h5 className="mb-2">{service.serviceName}</h5>
            <p style={{color:"#F63E7B", fontSize:"20px"}} className="mb-2"><strong>${service.price}</strong></p>
            <p style={{color:"#4D4D4D"}}>{service.description}</p>
            </div>
            <button className="book-btn">Book Now</button>
        </div>
    );
};

export default ServiceDetail;