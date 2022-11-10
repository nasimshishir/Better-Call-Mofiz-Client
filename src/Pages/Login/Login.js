import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';


const Login = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const { providerLogin, LoginWithEmailPassword } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()

    const handleLoginSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email);

        LoginWithEmailPassword(email, password)
            .then(result => {
                form.reset();
                setError('');
                toast.success('Login Successful')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })

    }


    // Google Sign In======================
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                toast.success('Login Successful');
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))

    }


    return (
        <div>
            <div className="hero min-h-screen bg-cover" style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2017/06/09/22/56/lady-justice-2388500_960_720.jpg)` }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className=''>
                        <img src="" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            {/* Login form */}
                            <form onSubmit={handleLoginSubmit}>
                                <h1 className="text-4xl font-bold text-center px-24">Login</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name="email" type="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name="password" type="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                </div>
                                {
                                    error && <div className='my-5 text-center text-red-600 font-medium'>
                                        <p>{error.slice(22, -2)}</p>
                                    </div>

                                }
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>

                            <div className="form-control mt-6">
                                <h4 className='font-semibold text-center mb-2'>Login with</h4>
                                <button onClick={handleGoogleSignIn} className="btn btn-outline mb-2"> <FaGoogle className='mr-3'></FaGoogle> Google</button>
                            </div>
                            <div className='mt-2'>
                                <p className='text-center'><small>Don't have an account? <Link className='text-cyan-700 font-medium' to="/register">Register here</Link></small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster position="top-center" />

        </div>
    );
};

export default Login;