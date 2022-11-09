import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`https://assignment-11-server-eight.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyReviews(data);
            })
            .catch(error => console.error(error));

    }, [user?.email])
    return (
        <div>
            <div>
                Banner
            </div>
            <div>
                <div>
                    {
                        myReviews.map(myReview => <div key={myReview._id}>{myReview.review}</div>)

                    }
                </div>
            </div>
        </div>
    );
};

export default MyReviews;