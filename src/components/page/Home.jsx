import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";

// import Footer from "../Footer/Footer";

const Home = () => {
    const product = useLoaderData({});
    console.log(product)
    return (
        <div>
            
            <Banner></Banner>
            {/* <Product></Product> */}
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;