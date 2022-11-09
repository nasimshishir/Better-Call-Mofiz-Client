import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

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
        <div className='container mx-auto'>
            <div>

            </div>
            Service Details Page: {name}
            <br />
            <Link to={`/placeorder/${_id}`} ><button className='btn'>Aquire</button></Link>

            {/* Reviews per Service */}
            <div>
                {/* Display Review */}
                <div>
                    {
                        reviews.map(eachReview => <div key={eachReview._id}> {eachReview.review}</div>)
                    }
                </div>
                {/* Post Review */}
                <div>
                    <form onSubmit={handleReviewPostSubmit}>
                        <div className="form-control col-span-1">
                            <textarea name="review" type="text" placeholder="your review" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6 w-36">
                            <button className="btn btn-primary">Post Review</button>
                        </div>
                    </form>

                </div>

            </div>

        </div>
    );
};

export default ServiceDetails;