import React from 'react';
import { FaRegTrashAlt, FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom';


const ReviewCard = ({ myReview, handleDeleteReview, handleUpdateReview }) => {
    const { _id, reviewerPhoto, reviewer, review, nameOfService } = myReview;


    return (
        <div className='col-span-2 lg:col-span-1 card shadow-lg bg-white p-6'>
            <div className=''>
                <div className='flex justify-end'>
                    <button onClick={() => { handleDeleteReview(_id) }} className='m-2 justify-end text-right'><FaRegTrashAlt /></button>
                    <Link to={`/updatereview/${_id}`} className='m-2 justify-end text-right'><FaEdit /></Link>
                </div>
                <div className='grid'>
                    <div className='mx-auto'>
                        <img className='w-24 rounded-full' src={reviewerPhoto} alt="" />
                    </div>
                    <div className='mx-auto'>
                        <p className='font-medium'>{reviewer}</p>
                    </div>
                    <p className='py-3 px-5'>{review}</p>
                    <p className='text-end text-sm text-slate-400'>{nameOfService}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;