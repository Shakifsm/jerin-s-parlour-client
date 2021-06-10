import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Service = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section className="service-container mt-5 pt-2">
            <div className="text-center">
                <h2><b>Our Awesome <span style={{ color: '#F63E7B' }}>Services</span></b></h2>
            </div>
            <div className="d-flex  justify-content-center mt-5 mb-5 pt-3 pb-3">
                <div className="row w-10 container-fluid">
                    {
                        services.length === 0 && <div class="spinner-border text-info" style={{ margin: '150px auto' }} role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    }
                    {
                        services.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;