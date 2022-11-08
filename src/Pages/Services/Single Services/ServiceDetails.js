import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

    const { _id, name, image, price, description } = useLoaderData()


    console.log(name);
    return (
        <div>
            Service Details Page: {name}
            <br />
            <Link to={`/checkout/${_id}`} ><button className='btn'>Aquire</button></Link>

        </div>
    );
};

export default ServiceDetails;