import React from 'react';

const ReviewCard2 = ({ eachReview }) => {
    const { reviewerPhoto, reviewer, review, nameOfService } = eachReview;
    return (
        <div className='col-span-2 lg:col-span-1 card shadow-lg bg-white p-6'>
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
    );
};

export default ReviewCard2;