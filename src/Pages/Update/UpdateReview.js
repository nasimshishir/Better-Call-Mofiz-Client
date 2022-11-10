import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateReview = () => {

    const { _id, review } = useLoaderData()
    const navigate = useNavigate();



    const handleUpdateReview = e => {
        e.preventDefault();
        const newReview = e.target.feedback.value;

        fetch(`https://assignment-11-server-eight.vercel.app/reviews/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ feedback: newReview })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('review updated')
                };
                navigate('/myreviews')

            })
            .catch(error => { console.error(error) })

    }
    return (
        <div>
            <div>
                <form onSubmit={handleUpdateReview}>
                    <div className="form-control col-span-1">
                        <textarea name="feedback" type="text" placeholder="your review" className="input input-bordered" defaultValue={review} />
                    </div>
                    <div className="form-control mt-6 w-36">
                        <button type='submit' className="btn btn-outline">Update Review</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateReview;