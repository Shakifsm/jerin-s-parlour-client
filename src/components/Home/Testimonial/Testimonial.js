import React, { useEffect, useState } from 'react';
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';

const Testimonial = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className=" mt-5 pt-2">
            <div className="text-center">
                <h2>Testimonials</h2>
            </div>
            <div className="d-flex  justify-content-center mt-5 pt-5 pb-5 mb-5">
                <div className="row w-10 container-fluid">
                    {
                        reviews.length === 0 && <div class="spinner-border text-info" style={{ margin: '150px auto' }} role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    }
                    {
                        reviews.map(review => <TestimonialDetail review={review}></TestimonialDetail>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Testimonial;