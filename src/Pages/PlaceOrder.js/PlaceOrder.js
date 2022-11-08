import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const PlaceOrder = () => {
    const { _id, name, price } = useLoaderData()
    const { user } = useContext(AuthContext)

    const handlePlaceOrderSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const customer = form.fullname.value;
        const phone = form.phone.value;
        const address = form.address.value;

        const orderDetails = {
            service: _id,
            nameOfService: name,
            priceOfService: price,
            customer: customer,
            email: user?.email,
            phone: phone,
            address: address
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('You have successfully added the service')
                    form.reset();
                }
            })
            .catch(error => console.error(error));
    }

    return (
        <div className=' bg-slate-100'>

            <div className='h-96 ' style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2017/06/09/22/56/lady-justice-2388500_960_720.jpg)` }}>
                <h2>{name}</h2>

            </div>
            <div className='container mx-auto card shadow-xl mt-16 p-16 bg-white'>
                <h1 className="text-4xl font-bold text-center px-24 col-span-2">Place Order</h1>
                <h1 className="text-sm text-red-600 text-center px-24 col-span-2 mb-10">(All the following info are required)</h1>
                <h1 className="text-4xl font-bold text-center px-24 col-span-2 mt-10">{name}</h1>

                {/* Order Form */}
                <form onSubmit={handlePlaceOrderSubmit}>
                    <div className='grid grid-cols-2 gap-5'>
                        <div className="form-control col-span-1">
                            <input name="email" type="email" placeholder="your email" className="input input-bordered" defaultValue={user?.email} readOnly />
                        </div>

                        <div className="form-control col-span-1">
                            <input name="fullname" type="text" placeholder="your full name" className="input input-bordered" required defaultValue={user?.displayName} />
                        </div>

                        <div className="form-control col-span-1">
                            <input name="phone" type="text" placeholder="your phone number" className="input input-bordered" required />
                        </div>

                        <div className="form-control col-span-1">
                            <input name="address" type="text" placeholder="your address" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="form-control mt-6 w-36">
                        <button className="btn btn-primary">Place Order</button>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default PlaceOrder;