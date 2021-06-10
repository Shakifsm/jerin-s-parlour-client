import React from 'react';
import Footer from '../../Footer/Footer';
import NavBar from '../../NavBar/NavBar';
import AboutUs from '../AboutUs/AboutUs';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Header></Header>
            <Service></Service>
            <AboutUs></AboutUs>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;