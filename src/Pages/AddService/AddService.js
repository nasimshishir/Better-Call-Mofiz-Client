import React from 'react';

const AddService = () => {


    const handleAddOrder = e => {
        e.preventDefault();
        const form = e.target;
        const reviewPost = form.review.value;

        const newService = {


        }

        fetch('https://assignment-11-server-eight.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('You have successfully added a service')
                    form.reset();
                }
            })
            .catch(error => console.error(error));


    }

    return (
        <div>
            <div>

            </div>
            <div>
                <form onSubmit={handleAddOrder}>
                    <div className='grid grid-cols-2 gap-5'>
                        <div className="form-control col-span-1">
                            <input name="email" type="email" placeholder="your email" className="input input-bordered" required />
                        </div>

                        <div className="form-control col-span-1">
                            <input name="fullname" type="text" placeholder="your full name" className="input input-bordered" required />
                        </div>

                        <div className="form-control col-span-1">
                            <input name="phone" type="text" placeholder="your phone number" className="input input-bordered" required />
                        </div>

                        <div className="form-control col-span-1">
                            <input name="address" type="text" placeholder="your address" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="form-control mt-6 w-36">
                        <button className="btn btn-primary">Add Service</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;