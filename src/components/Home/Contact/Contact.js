import React from 'react';

const Contact = () => {
    return (
        <div className="header-parent">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-center">Let us handle your <br/> project, professionally.</h3>
                        <div className="text-center pt-5">
                            
                                
                                    <input style={{border:"1px solid lightgray", marginRight:"20px", height:"40px"}} type="text" name="firstName" placeholder="First Name" />
                                
                                
                                    <input style={{border:"1px solid lightgray", marginRight:"20px", height:"40px", marginTop:"20px"}} type="text" name="lastName" placeholder="Last Name" /><br />
                               
                                
                                    <input style={{border:"1px solid lightgray", marginRight:"20px", marginTop:"20px", height:"40px"}} type="email" name="email" placeholder="Email Address" />
                                
                                
                                    <input style={{border:"1px solid lightgray", marginRight:"20px", marginTop:"20px", height:"40px"}} type="text" name="phone" placeholder="Phone Number" /><br />
                                
                                
                                    <textarea style={{border:"1px solid lightgray", marginTop:"20px", marginLeft:"-20px"}} name="message" placeholder="Message" cols="50" rows="3"></textarea><br />
                                    <button className="header-btn">Send Message</button>
                                
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;