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
        <div className='bg-slate-50'>
            <div>

            </div>

            {/* Orders List */}
            <div className='py-16'>
                <div className='container mx-auto p-10 card shadow-lg pb-16 bg-white'>
                    <h2 className='text-4xl font-bold text-center mb-5'>Your orders</h2>
                    <div className='flex justify-between my-2 py-2 bg-slate-100 px-3'>
                        <div className='text-md font-medium'>Check</div>
                        <div className='text-md font-medium'>Service</div>
                        <div className='text-md font-medium'>Price</div>
                        <div className='text-md font-medium'>Contact</div>
                    </div>
                    <div>
                        {
                            myOrders.map(myOrder => <OrdersListModel key={myOrder._id} myOrder={myOrder}>{myOrder.nameOfService}</OrdersListModel>)
                        }
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Orders;