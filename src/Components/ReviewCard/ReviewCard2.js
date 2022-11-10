import React from 'react';

const ReviewCard2 = ({ eachReview }) => {
    const { reviewerPhoto, reviewer, review } = eachReview;
    return (
        <div className='col-span-2 lg:col-span-1 card shadow-lg bg-white p-6'>
            <div className=''>
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

export default ReviewCard2;