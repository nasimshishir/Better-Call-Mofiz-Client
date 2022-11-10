import React from 'react';
import { FaRegTrashAlt, FaEdit } from 'react-icons/fa'


const ReviewCard = ({ myReview, handleDeleteReview, handleUpdateReview }) => {
    const { _id, reviewerPhoto, reviewer, review } = myReview;

    // <ReviewCard key={myReview._id} myReview={myReview} handleDeleteReview={handleDeleteReview}></ReviewCard>


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
            {/* Update Modal */}
            <div>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">Write your review here</h3>
                        <div>
                            {_id}
                            <form onSubmit={() => handleUpdateReview(_id)}>
                                <div className="form-control col-span-1">
                                    <textarea name="review" type="text" placeholder="your review" className="input input-bordered" defaultValue={review} />
                                </div>
                                <div className="form-control mt-6 w-36">
                                    <button className="btn btn-primary">Update Review</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;