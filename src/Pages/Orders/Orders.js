import React, { useContext, useEffect, useState } from 'react';
import OrdersListModel from '../../Components/OrdersListModel/OrdersListModel';
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
            <div>

            </div>

            {/* Orders List */}
            <div>

            </div>
            {
                myOrders.map(myOrder => <OrdersListModel key={myOrder._id} orderList={myOrder}>{myOrder.nameOfService}</OrdersListModel>)
            }

        </div>
    );
};

export default Orders;