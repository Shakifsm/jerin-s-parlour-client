import React from 'react';
import headerImg from "../../../images/Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png"
import "./Header.css"

const Header = () => {
    return (
        <div className="header-parent">
            <div className="container">
            <div className="row">
                <div className="col-md-6 pt-5 pb-5">
                    <h1>BEAUTY SALON <br/> <span>FOR EVERY WOMEN</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <button className="header-btn">Get an Appointment</button>
                </div>
                <div className="col-md-6">
                    <img style={{height:"350px"}} className="img-fluid" src={headerImg} alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Header;