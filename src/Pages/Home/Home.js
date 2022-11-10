import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
import about from '../../Assets/Images/Home (2).jpg'

const Home = () => {
    const servicess = useLoaderData()
    const services = servicess;
    return (
        <div>
            {/* Banner */}
            <div>
                <div className="hero bg-cover min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/8112118/pexels-photo-8112118.jpeg")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="text-right">
                        <div className="max-w-md mr-10">
                            <h1 className="mb-5 text-3xl font-bold text-white">Better Call</h1>
                            <h1 className="mb-5 text-5xl font-bold text-orange-600">Mofiz</h1>
                            <p className="mb-5 text-white">Carolyn L. Weiss, Esq. has more than twenty years’ experience representing individuals and small businesses in real estate transactions, commercial leasing and real estate financings throughout the New York metropolitan area.</p>
                            <button className="btn btn-primary"><Link to={"/services"}>Services</Link></button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Services */}
            <div className='container mx-auto py-20'>
                <div>
                    <h2 className='text-4xl font-bold px-24 col-span-2 text-center'>Services</h2>
                </div>
                <div className='grid grid-cols-3 gap-5 p-10'>
                    {
                        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
                <div className='text-center py-10'>
                    <button className='btn btn-outline text-center w-50'>SEE MORE</button>
                </div>


            </div>

            {/* Section-3 */}
            <div className='container mx-auto grid grid-cols-2 gap-5'>
                <div className='col-span-2 lg:col-span-1'>
                    <img className='object-cover h-auto w-full' src={about} alt="" />
                </div>
                <div className='  pl-16 my-auto'>
                    <h2 className='text-4xl font-bold mb-10'>About</h2>
                    <p className='text-justify'>
                        Mofiz has more than twenty years’ experience representing individuals and small businesses in real estate transactions, commercial leasing and real estate financings throughout the New York metropolitan area. Real estate transactions conducted by Ms. Weiss include house, cooperative and condominium unit, entire building and vacant land purchases and sales. She represents both purchasers and sellers, whose transactions are handled from inception to conclusion exclusively by an attorney. Ms. Weiss prepares and negotiates contracts, reviews title reports and surveys, confirms that all lender requirements in a loan commitment are satisfied, drafts closing documents and attends the closing. Depending upon the needs of the party in the transaction, Ms. Weiss conducts due diligence, such as interviewing the cooperative or condominium managing agent as to potential litigation, anticipated major capital improvements, maintenance and common charge increases, assessments and the like. In commercial property purchases, Ms. Weiss will investigate potential environmental concerns, review current leases, and obtain tenant estoppel letters in exchange for subordination and non-disturbance agreements.
                    </p>
                </div>

                {/* Section-4 */}
                <div className='container mx-auto'>

                </div>

            </div>
        </div>
    );
};

export default Home;