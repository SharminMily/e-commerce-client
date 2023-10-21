import Banner from "../Banner/Banner";
import Benefit from "../Benefit/Benefit";

import Footer from "../Footer/Footer";
import Product from "../Product";
import MoreDetails from "../MoreDetails/MoreDetails";
import { useEffect, useState } from "react";

const Home = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://e-commerce-server-bbmemffin-sharminmily.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    return (
        <div>

            <Banner></Banner>
            <div className="my-10 lg:mt-16 md:32 mt-48">
                <h1 className="text-4xl font-bold">Our <span className="text-orange-600">E-Commerce</span> site</h1>
                <div className="md:flex flex-row gap-2  justify-evenly">
                    {
                        categories.map(category => <Product key={category._id} category={category}></Product>)
                    }
                </div>
            </div>

            <Benefit></Benefit>
            <MoreDetails></MoreDetails>

            <Footer></Footer>
        </div>
    );
};

export default Home;