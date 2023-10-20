/* eslint-disable react/no-unknown-property */
import { Link, NavLink } from "react-router-dom";

const Header = () => {   
    
    const navLinks = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/addProduct">Add Product</NavLink></li>
            <li><NavLink to="/productDetails">Product Details</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            {/* <li><NavLink to="/"></NavLink></li> */}
        </>
    )
    return (
        <div className="">
        <div className="navbar bg-base-100 lg:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                
                <a className=""><img className="w-32 text-blue-900" src="https://i.ibb.co/SRT8dqF/logo2-removebg-preview.png" alt="" /></a>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/login"><a className="btn">Login</a></Link>
                {/* {
                    user?.email ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} alt={user.displayName} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <button className="btn btn-sm  btn-ghost">{user?.displayName || user?.email}</button>

                            </li>
                            <li>
                                <button onClick={logOut}
                                    className="btn btn-sm  btn-ghost">Logout</button>

                            </li>
                        </ul>
                    </div>
                        :
                        <Link to="/register"><a className="btn">register</a></Link>
                } */}
            </div>
        </div>
    </div>
    );
};

export default Header;