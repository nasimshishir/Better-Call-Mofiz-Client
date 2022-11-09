import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        fetch(`https://assignment-11-server-eight.vercel.app/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyOrders(data);
            })
            .catch(error => console.error(error));

    }, [user?.email])

    return (
        <div>
            {
                myOrders.map(myOrder => <div key={myOrder._id}>{myOrder.nameOfService}</div>)
            }

        </div>
    );
};

export default Orders;