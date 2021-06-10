import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer-parent">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <p>H#000 (0th Floor), Road #00,New DOHS, Mohakhali, Dhaka, Bangladesh</p>
                    </div>
                    <div className="col-md-3">
                        <h4>Company</h4>
                        <p>About</p>
                        <p>Project</p>
                        <p>Our Team</p>
                        <p>Terms and Conditions</p>
                        <p>Submuit Listing</p>
                    </div>
                    <div className="col-md-3">
                        <h4>Quick Links</h4>
                        <p>Quick Links</p>
                        <p>Rentals</p>
                        <p>Sales</p>
                        <p>Contatct</p>
                        <p>Our Blog</p>
                    </div>
                    <div className="col-md-3">
                        <h4>About Us</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;