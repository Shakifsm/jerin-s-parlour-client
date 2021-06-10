import React from 'react';
import aboutImage from "../../../images/Image/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png";

const AboutUs = () => {
    return (
        <div className="header-parent">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 pb-5">
                        <img className="img-fluid" src={aboutImage} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h3> <span>Let us handle your</span> <br /> screen <span style={{ color: "#F63E7B" }}>Professionally</span>. </h3>
                        <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.</p>
                        <div className="row">
                            <div className="col-md-4 col-4">
                                <h4 style={{color:"#F63E7B"}}>500+</h4>
                                <p>Happy Customer</p>
                            </div>
                            <div className="col-md-1 col-1"></div>
                            <div className="col-md-4 col-4">
                            <h4 style={{color:"#F63E7B"}}>16+</h4>
                                <p>Total Service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;