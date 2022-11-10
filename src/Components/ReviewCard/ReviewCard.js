import React, { useState } from 'react';
import { FaRegTrashAlt, FaEdit } from 'react-icons/fa'


const ReviewCard = ({ myReview, handleDeleteReview, handleUpdateReview }) => {
    const { _id, reviewerPhoto, reviewer, review } = myReview;
    const [newReview, setNewReview] = useState(myReview)

    const handleUpdateReviewSubmit = (e) => {
        console.log('modal button called');
        e.preventdefault();
        const feeedback = e.target.feedback.value;

        const reviewMessage = {
            review: feeedback
        }
        const changedReview = { ...myReview };
        setNewReview(changedReview);
        handleUpdateReview(_id, newReview)

    }


    return (
        <div className='col-span-2 lg:col-span-1 card shadow-lg bg-white p-6'>
            <div className=''>
                <div className='flex justify-end'>
                    <button onClick={() => { handleDeleteReview(_id) }} className='m-2 justify-end text-right'><FaRegTrashAlt /></button>
                    <label htmlFor="my-modal-3" className='m-2 justify-end text-right'><FaEdit /></label>
                </div>
                <div className='mx-auto'>
                    <img className='w-24 rounded-full' src={reviewerPhoto} alt="" />
                </div>
                <div>
                    <p>{reviewer}</p>
                    <p>{review}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;