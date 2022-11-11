import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../../Components/ServiceCard/ServiceCard';
import useSiteTitle from '../../../Hooks/useSiteTitle';

const Services = () => {
    useSiteTitle('Services')
    const services = useLoaderData()
    console.log(services);

    return (
        <div className='container mx-auto py-16'>
            <div>
                <h4 className='mb-5 text-5xl font-bold text-black text-center pb-10'>All Service</h4>
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