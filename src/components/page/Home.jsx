import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Benefit from "../Benefit/Benefit";

import Footer from "../Footer/Footer";
import Product from "../Product";

const Home = () => {
    const products = useLoaderData();
    console.log(products)
    return (
        <div>

            <Banner></Banner>
            <div className="my-10 mt-16">
                <h1 className="text-4xl font-bold">Our <span className="text-orange-600">E-Commerce</span> site</h1>
                <div className="flex gap-2  justify-evenly">
                    {
                        products.map(product => <Product key={product.id} product={product}></Product>)
                    }
                </div>
            </div>

            <Benefit></Benefit>

            <Footer></Footer>
        </div>
    );
};

export default Home;