import React from 'react';

const TestimonialDetail = ({review}) => {
    return (
        <div className="col-md-4 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-3">
                        <img  className="img-fluid rounded-circle" src={review.imageURL} alt=""/>
                    </div>
                    <div className="col-md-9 col-9">
                        <div className="row">
                            <div className="col-md-12">
                            <p><strong>{review.name}</strong></p>
                            </div>
                        </div>
                        <div className="row" style={{marginTop:"-20px"}}>
                        <div className="col-md-2 col-2">
                            <p>{review.designation}</p>
                        </div>
                        <div className="col-md-2 col-2">
                            <p>{review.companyName}</p>
                        </div>
                        <div className="col-md-8"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                    {review.description}
                </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialDetail;

{/* <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid rounded-circle review-style" src={review.imageURL} alt=""/>
                </div>
                <div className="col-md-6">
                    <h4>{review.name}</h4>
                    <p>{review.review}</p>
                </div>
            </div> */}