import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import SocialLogin from "./SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const SingUp = () => {

    const { signIn } = useContext(AuthContext)

 
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        //get field value  
        const email = e.target.email.value
        const password = e.target.password.value
        console.log('hello', email, password)

        // create a new user
        signIn(email, password)
        .then(res => {
            toast.success('user login successfully')
            navigate('/serviceDetails')
            console.log(res.user)
           
        })
        .catch(error => {
            toast.error(error.message)
           
        })      

    }
   

    return (
        <div>
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex flex-col ">
                <h1 className="text-3xl p-4 font-bold text-blue-900">Please Login Here...</h1>

                <div className="card px-10 w-full max-w-sm shadow-2xl bg-base-100 "  data-aos="zoom-in">
                    <div className="pb-8">

                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="mb-6">
                                <input type="password" placeholder="password" name='password"' className="input input-bordered" />
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover mt-4">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-2 p-0">
                                <button type='submit' className="btn btn-neutral bg-orange-600">Login</button>
                            </div>
                        </form>

                        <label className="label">
                            New here? <Link to="/singIn" className="label-text-alt link link-hover  text-orange-600 font-bold underline">Create an account</Link>
                        </label>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </div>
        <Toaster />
    </div>
    );
};

export default SingUp;