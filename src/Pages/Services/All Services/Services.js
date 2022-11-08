import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../../Components/ServiceCard/ServiceCard';

const Services = () => {
    const services = useLoaderData()
    console.log(services);

    return (
        <div className=''>
            <div>
                Banner
            </div>
            <div className='container mx-auto grid grid-cols-3 gap-5'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;