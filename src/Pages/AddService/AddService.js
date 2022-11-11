import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useSiteTitle from '../../Hooks/useSiteTitle';


const AddService = () => {
    useSiteTitle('Add Service')
    const navigate = useNavigate();



    const handleAddOrder = e => {
        e.preventDefault();
        const form = e.target;
        const sImage = form.imageurl.value;
        const sName = form.servicename.value;
        const sDescription = form.description.value;
        const sPrice = form.price.value;

        const newService = {
            image: sImage,
            name: sName,
            description: sDescription,
            price: sPrice
        }

        fetch('https://assignment-11-server-eight.vercel.app/services', {
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
                    toast.success('You have successfully added a service')
                    form.reset();
                    navigate('/services')
                }
            })
            .catch(error => console.error(error));


    }

    return (
        <div className='h-3/4'>
            <div>

            </div>
            <div className='container mx-auto py-16'>
                <h4 className='mb-5 text-5xl font-bold text-black text-center pb-10'>Add Service here</h4>
                <form onSubmit={handleAddOrder}>
                    <div className='grid grid-cols-2 gap-5'>
                        <div className="form-control col-span-1">
                            <input name="imageurl" type="text" placeholder="Thumbnail for Service" className="input input-bordered" required />
                        </div>

                        <div className="form-control col-span-1">
                            <input name="servicename" type="text" placeholder="Name of Service" className="input input-bordered" required />
                        </div>

                        <div className="form-control col-span-1">
                            <input name="description" type="text" placeholder="Description of Service" className="input input-bordered" required />
                        </div>

                        <div className="form-control col-span-1">
                            <input name="price" type="text" placeholder="Price" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="form-control mt-6 w-36">
                        <button className="btn btn-primary">Add Service</button>
                    </div>
                </form>
            </div>
            <Toaster />
        </div>
    );
};

export default AddService;