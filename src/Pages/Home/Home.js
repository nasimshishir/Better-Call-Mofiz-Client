import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';

const Home = () => {
    const services = useLoaderData()
    return (
        <div>
            <p>Home</p>
            <div>
                <div className='h-96 ' style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2017/06/09/22/56/lady-justice-2388500_960_720.jpg)` }}>

                </div>
            </div>
            <div className='grid grid-cols-3 gap-5 p-10'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Home;