import React from 'react';
import { FaRegTrashAlt, FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom';


const ReviewCard = ({ myReview, handleDeleteReview, handleUpdateReview }) => {
    const { _id, reviewerPhoto, reviewer, review } = myReview;


    return (
        <div className='col-span-2 lg:col-span-1 card shadow-lg bg-white p-6'>
            <div className=''>
                <div className='flex justify-end'>
                    <button onClick={() => { handleDeleteReview(_id) }} className='m-2 justify-end text-right'><FaRegTrashAlt /></button>
                    <Link to={`/updatereview/${_id}`} className='m-2 justify-end text-right'><FaEdit /></Link>
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