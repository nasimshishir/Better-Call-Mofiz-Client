import React, { useContext, useEffect, useState } from 'react';
import ReviewCard from '../../Components/ReviewCard/ReviewCard';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);



    useEffect(() => {
        fetch(`https://assignment-11-server-eight.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyReviews(data)
            })
            .catch(error => console.error(error));

    }, [user?.email])

    const handleDeleteReview = (id) => {
        const proceed = window.confirm('Are you sure, you want to cancel this order?');
        if (proceed) {
            fetch(`https://assignment-11-server-eight.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = myReviews.filter(rvw => rvw._id !== id);
                        setMyReviews(remaining);
                    }
                })
        }
    }


    return (
        <div>
            <div className='max-h-screen' >

            </div>
            <div className='bg-slate-50'>
                <div className='container mx-auto py-16'>
                    <h3 className='text-4xl font-bold text-center mb-5'>My Reviews</h3>
                    <div className='grid grid-cols-2 gap-5 px-5'>
                        {
                            myReviews.length === 0 ? "No Reviews" : myReviews.map(myReview => <ReviewCard key={myReview._id} myReview={myReview} handleDeleteReview={handleDeleteReview}></ReviewCard>)

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReviews;