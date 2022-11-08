import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    console.log(service);

    const { _id, name, image, price, description } = service

    return (
        <div className='col-span-3 lg:col-span-1'>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='' src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name.substring(0, 23)}...</h2>
                    <p>{description.substring(0, 100)}<Link className='font-medium #3730a3' to={`/courses/${_id}`}> ...Read More</Link></p>
                    <div className='flex'>
                        <span className='font-medium text-base mr-2'>Price:</span><span className='text-blue-600'>{price}</span>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline"><Link to={`/service/${_id}`}>Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;