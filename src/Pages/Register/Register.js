import React, { useState } from 'react';
import { useContext } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useSiteTitle from '../../Hooks/useSiteTitle';

const Register = () => {
    useSiteTitle('Register')
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const { RegisterWithEmailPassword } = useContext(AuthContext);

    const handleRegisterSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const thumbnail = form.photoURL.value;
        const fullname = form.fullname.value;

        RegisterWithEmailPassword(email, password)
            .then(result => {
                setError('');
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            {/* registration form */}
                            <form onSubmit={handleRegisterSubmit}>
                                <h1 className="text-4xl font-bold text-center w-80">Register</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input name='fullname' type="text" placeholder="your full name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input name='photoURL' type="text" placeholder="your photo name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" placeholder="repeat password" className="input input-bordered" />
                                </div>
                                {
                                    error && <div className='my-5 text-center text-red-600 font-medium'>
                                        <p>{error.slice(22, -2)}</p>
                                    </div>

                                }
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>
                            <div className='mt-2'>
                                <p className='text-center'><small>Already have an account? <Link className='text-cyan-700 font-medium' to="/login">Login here</Link></small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;