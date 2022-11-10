import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {

    const { oldReview } = useLoaderData()
    const [newReview, setNewReview] = useState(oldReview)




    const handleUpdateReview = () => {
        e.preventdefault();
        fetch(`https://assignment-11-server-eight.vercel.app/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('review updated')
                }
            })
            .catch(error => { console.error(error) })

    }
    return (
        <div>
            <div>
                {_id}
                <form onSubmit={() => handleUpdateReview(_id)}>
                    <div className="form-control col-span-1">
                        <textarea name="feedback" type="text" placeholder="your review" className="input input-bordered" defaultValue={review} />
                    </div>
                    <div className="form-control mt-6 w-36">
                        <button className="btn btn-primary">Update Review</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default UpdateReview;