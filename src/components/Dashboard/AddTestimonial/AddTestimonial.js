import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
import "./AddTestimonial.css"

const AddTestimonials = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [imageURL, setImageURL] = useState(null);

    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '0233cc6f820bf3b7e422a932b34aaf8e')
        imageData.append('image', event.target.files[0])


        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            companyName: data.companyName,
            designation: data.designation,
            description: data.description,
            imageURL: imageURL
        }
        const url = 'http://localhost:5000/addAReview'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('serverside responce', res))
    }

    return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-10">
                        <h5>Review</h5>
                        <div className="form-area">
                            <form className="p-5"  onSubmit={handleSubmit(onSubmit)}>


                                <input style={{ marginRight: "30px" }} name="name" placeholder="Your Name" {...register("name")} />

                                <input name="companyName" placeholder="Company Name" {...register("companyName")} /><br /><br />

                                <input style={{ marginRight: "30px" }} name="designation" placeholder="Designation" {...register("designation")} />

                                <input type="file" accept="image/*" id="file" onChange={handleImageUpload} />
                                <label className="file" for="file">Upload Image</label> <br /><br />

                                <textarea name="description" placeholder="Description" {...register("description")} cols="30" rows="2"></textarea> <br /><br />

                                <button type="submit" className="header-btn">Submit</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default AddTestimonials;