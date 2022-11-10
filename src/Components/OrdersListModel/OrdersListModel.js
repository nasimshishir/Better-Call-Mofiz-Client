import React from 'react';
import { FcCheckmark } from 'react-icons/fc'

const OrdersListModel = ({ myOrder }) => {
    const { nameOfService, priceOfService, phone } = myOrder;

    const handleOrderDelete = () => {



    }

    return (
        <div className='flex justify-between my-2 py-2 bg-slate-50 px-3'>
            <div className=''><button onClick={handleOrderDelete}><FcCheckmark /></button></div>
            <div className=''>{nameOfService}</div>
            <div className=''>{priceOfService}</div>
            <div className=''>{phone}</div>

        </div>
    );
};

export default OrdersListModel;