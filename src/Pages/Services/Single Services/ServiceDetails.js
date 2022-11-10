import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import ReviewCard2 from '../../../Components/ReviewCard/ReviewCard2';


const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const { _id, name, image, price, description } = useLoaderData()
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`https://assignment-11-server-eight.vercel.app/reviews?service=${_id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data);
            })
            .catch(error => console.error(error));
    }, [_id])

    const handleReviewPostSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const reviewPost = form.review.value;

        const review = {
            forService: _id,
            nameOfService: name,
            reviewer: user?.displayName,
            reviewerEmail: user?.email,
            reviewerPhoto: user?.photoURL,
            review: reviewPost

        }

        fetch('https://assignment-11-server-eight.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('You have successfully added your review')
                    form.reset();
                }
            })
            .catch(error => console.error(error));

    }

    return (
        <div>
            {/* Service Details Section */}
            <div className="hero bg-cover min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/8730785/pexels-photo-8730785.jpeg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-right">
                    <div className="max-w-lg mr-10">
                        <h1 className="mb-5 text-5xl font-bold text-white">{name}</h1>
                    </div>
                </div>
            </div>
            <div className='bg-slate-50 py-16'>
                <div className='container mx-auto'>
                    <h3 className='text-3xl font-semibold text-center pb-10'>Service Details</h3>
                    {/* Details Section */}
                    <div>
                        <div className="card card-side shadow-xl bg-white">
                            <figure className='w-full'>
                                <PhotoProvider>
                                    <PhotoView src={image}>
                                        <img src={image} alt="" />
                                    </PhotoView>
                                </PhotoProvider>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{name}</h2>
                                <p><strong>Description:</strong> {description}</p>
                                <p className='text-xl font-semibold text-blue-600'><strong>Price: $</strong>{price}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/placeorder/${_id}`} ><button className='btn btn-primary'>Aquire</button></Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Reviews per Service */}
                    <div className='mt-16'>
                        <h3 className='text-4xl font-semibold text-center pb-10'>Reviews for this Service</h3>
                        {/* Display Review */}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                            {
                                reviews.map(eachReview => <ReviewCard2 key={eachReview._id} eachReview={eachReview}> {eachReview.review}</ReviewCard2>)
                            }
                        </div>
                        {/* Post Review */}
                        <div>
                            {
                                !user.email ? <p className=''>Please <Link to={"/login"}>Login</Link> to post a review</p> :

                                    <form className='lg:w-md' onSubmit={handleReviewPostSubmit}>
                                        <div className="form-control col-span-1">
                                            <textarea name="review" type="text" placeholder="your review" className="input input-bordered" />
                                        </div>
                                        <div className="form-control mt-6 w-36">
                                            <button className="btn btn-primary">Post Review</button>
                                        </div>
                                    </form>
                            }

                        </div>

                    </div>
                </div>

            </div>

            <br />




        </div>
    );
};

export default ServiceDetails;