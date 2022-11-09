import React from 'react';

const OrdersListModel = ({ myOrder }) => {
    const { nameOfService, priceOfService, phone } = myOrder;
    return (
        <div className='flex justify-between'>
            <div>{nameOfService}</div>
            <div>{priceOfService}</div>
            <div>{phone}</div>

        </div>
    );
};

export default OrdersListModel;