import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';

const Home = () => {
    const services = useLoaderData()
    return (
        <div>
            <p>Home</p>
            <div className='grid grid-cols-3 gap-5 p-10'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Home;